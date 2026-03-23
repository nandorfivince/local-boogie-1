// Leaflet térkép inicializálás — CartoDB Dark Matter tile
const map = L.map('map').setView([50, 15], 4);

L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/">CARTO</a>',
  subdomains: 'abcd',
  maxZoom: 19
}).addTo(map);

// --- Színek ---
const RING_COLORS = {
  BL: '#FFD700',
  EL: '#FF6B35',
  ECL: '#9B59B6',
  mixed: '#FFFFFF'
};
const FILL_COLOR = '#007A33';

// --- Meccsek városonkénti csoportosítása ---
// Kulcs: "city|lat|lng" — így Budapest Groupama és Puskás külön marad
function groupMatchesByCity(matches) {
  const groups = {};
  for (const m of matches) {
    const key = `${m.city}|${m.lat}|${m.lng}`;
    if (!groups[key]) {
      groups[key] = { city: m.city, country: m.country, lat: m.lat, lng: m.lng, matches: [] };
    }
    groups[key].matches.push(m);
  }
  return Object.values(groups);
}

// --- Gyűrű szín meghatározása ---
function getRingColor(matches) {
  const comps = new Set(matches.map(m => m.competition));
  if (comps.size === 1) return RING_COLORS[comps.values().next().value];
  return RING_COLORS.mixed;
}

// --- Marker méret (sugár px) ---
function getRadius(matchCount) {
  if (matchCount >= 4) return 18;
  if (matchCount >= 2) return 14;
  return 10;
}

// --- SVG marker ikon generálás ---
function createMarkerIcon(radius, ringColor) {
  const size = radius * 2 + 6; // +6 a gyűrű vastagságáért
  const center = size / 2;
  const svg = `
    <svg width="${size}" height="${size}" viewBox="0 0 ${size} ${size}" xmlns="http://www.w3.org/2000/svg">
      <circle cx="${center}" cy="${center}" r="${radius + 2}" fill="none" stroke="${ringColor}" stroke-width="2.5"/>
      <circle cx="${center}" cy="${center}" r="${radius}" fill="${FILL_COLOR}"/>
    </svg>`;
  return L.divIcon({
    html: svg,
    className: '',
    iconSize: [size, size],
    iconAnchor: [center, center],
    popupAnchor: [0, -center]
  });
}

// --- Popup HTML generálás ---
function formatDate(isoDate) {
  const [y, m, d] = isoDate.split('-');
  return `${y}.${m}.${d}`;
}

function getResult(match) {
  const fradiHome = match.home_team === 'Ferencváros';
  const fradiGoals = fradiHome ? match.home_score : match.away_score;
  const opponentGoals = fradiHome ? match.away_score : match.home_score;
  if (fradiGoals > opponentGoals) return 'gy';
  if (fradiGoals === opponentGoals) return 'd';
  return 'v';
}

function buildPopupHtml(group) {
  const sorted = [...group.matches].sort((a, b) => b.date.localeCompare(a.date));

  let wins = 0, draws = 0, losses = 0;
  const matchRows = sorted.map((m, i) => {
    const result = getResult(m);
    if (result === 'gy') wins++;
    else if (result === 'd') draws++;
    else losses++;

    const separator = i < sorted.length - 1 ? '<hr class="popup-separator">' : '';
    return `
      <div class="popup-match">
        <div class="popup-meta">${formatDate(m.date)} · ${m.competition} · ${m.round} · ${m.leg}</div>
        <div class="popup-score">${m.home_team} – ${m.away_team}  <strong>${m.home_score}–${m.away_score}</strong></div>
      </div>${separator}`;
  }).join('');

  const total = sorted.length;
  return `
    <div class="popup-content">
      <div class="popup-title">${group.city}, ${group.country}</div>
      <hr class="popup-separator">
      ${matchRows}
      <hr class="popup-separator">
      <div class="popup-summary">${total} meccs · ${wins} gy · ${draws} d · ${losses} v</div>
    </div>`;
}

// --- Markerek létrehozása ---
const cityGroups = groupMatchesByCity(MATCHES);

const markers = cityGroups.map(group => {
  const ringColor = getRingColor(group.matches);
  const radius = getRadius(group.matches.length);
  const icon = createMarkerIcon(radius, ringColor);

  const marker = L.marker([group.lat, group.lng], { icon }).addTo(map);
  marker.bindPopup(buildPopupHtml(group), { maxWidth: 320, className: 'fradi-popup' });

  // Adatok eltárolása a markeren a szűréshez
  marker._cityData = group;

  return marker;
});

// --- Szűrő logika ---
function applyFilter(competition) {
  markers.forEach(marker => {
    const group = marker._cityData;
    const hasMatch = competition === 'all' || group.matches.some(m => m.competition === competition);
    const el = marker.getElement();
    if (el) {
      el.style.opacity = hasMatch ? '1' : '0.25';
      el.style.transition = 'opacity 0.3s';
    }

    // Popup frissítése: szűrt meccsekkel
    if (competition === 'all') {
      marker.bindPopup(buildPopupHtml(group), { maxWidth: 320, className: 'fradi-popup' });
    } else {
      const filtered = { ...group, matches: group.matches.filter(m => m.competition === competition) };
      if (filtered.matches.length > 0) {
        marker.bindPopup(buildPopupHtml(filtered), { maxWidth: 320, className: 'fradi-popup' });
      }
    }
  });
}

// --- Számlálók feltöltése ---
function updateStats(matches) {
  const matchCount = matches.length;
  const countries = new Set(matches.map(m => m.country)).size;
  const cities = new Set(matches.map(m => `${m.city}|${m.lat}|${m.lng}`)).size;

  document.getElementById('stat-matches').textContent = matchCount;
  document.getElementById('stat-countries').textContent = countries;
  document.getElementById('stat-cities').textContent = cities;
}

updateStats(MATCHES);

// --- Szűrő gombok eseménykezelése ---
document.querySelectorAll('.filter-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    applyFilter(filter);

    // Számlálók frissítése a szűrőnek megfelelően
    const filtered = filter === 'all' ? MATCHES : MATCHES.filter(m => m.competition === filter);
    updateStats(filtered);
  });
});
