// ── Térkép inicializálás ──────────────────────────────────────────────────

var map = L.map('map', {
  center: [48.5, 16],
  zoom: 5,
  zoomControl: true
});

L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OSM</a> &copy; <a href="https://carto.com/">CARTO</a>',
  subdomains: 'abcd',
  maxZoom: 18
}).addTo(map);

// ── Városonkénti csoportosítás ───────────────────────────────────────────

function groupByCity(matches) {
  var groups = {};
  for (var i = 0; i < matches.length; i++) {
    var m = matches[i];
    var key = m.city + '|' + m.lat + '|' + m.lng;
    if (!groups[key]) {
      groups[key] = {
        city: m.city,
        country: m.country,
        lat: m.lat,
        lng: m.lng,
        matches: []
      };
    }
    groups[key].matches.push(m);
  }
  return groups;
}

// ── Marker szín (gyűrű) meghatározása ────────────────────────────────────

function getRingColor(matches) {
  var comps = {};
  for (var i = 0; i < matches.length; i++) {
    comps[matches[i].competition] = true;
  }
  var keys = Object.keys(comps);
  if (keys.length > 1) return '#FFFFFF';
  if (keys[0] === 'BL') return '#FFD700';
  if (keys[0] === 'EL') return '#FF6B35';
  if (keys[0] === 'ECL') return '#9B59B6';
  return '#FFFFFF';
}

// ── Marker méret ─────────────────────────────────────────────────────────

function getRadius(count) {
  if (count >= 4) return 18;
  if (count >= 2) return 14;
  return 10;
}

// ── SVG marker ikon generálás ────────────────────────────────────────────

function createMarkerIcon(ringColor, radius) {
  var size = radius * 2 + 8;
  var cx = size / 2;
  var cy = size / 2;
  var svg = '<svg xmlns="http://www.w3.org/2000/svg" width="' + size + '" height="' + size + '">' +
    '<circle cx="' + cx + '" cy="' + cy + '" r="' + (radius + 2) + '" fill="' + ringColor + '" opacity="0.7"/>' +
    '<circle cx="' + cx + '" cy="' + cy + '" r="' + radius + '" fill="#007A33"/>' +
    '</svg>';
  return L.divIcon({
    html: svg,
    className: '',
    iconSize: [size, size],
    iconAnchor: [cx, cy],
    popupAnchor: [0, -radius]
  });
}

// ── Dátum formázás (YYYY-MM-DD → YYYY.MM.DD) ────────────────────────────

function formatDate(dateStr) {
  return dateStr.replace(/-/g, '.');
}

// ── Eredmény összesítés ──────────────────────────────────────────────────

function calcRecord(matches) {
  var w = 0, d = 0, l = 0;
  for (var i = 0; i < matches.length; i++) {
    var m = matches[i];
    var fradiHome = m.home_team === 'Ferencváros';
    var fradiGoals = fradiHome ? m.home_score : m.away_score;
    var oppGoals = fradiHome ? m.away_score : m.home_score;
    if (fradiGoals > oppGoals) w++;
    else if (fradiGoals === oppGoals) d++;
    else l++;
  }
  return { w: w, d: d, l: l };
}

// ── Popup HTML generálás ─────────────────────────────────────────────────

function buildPopup(group) {
  var sorted = group.matches.slice().sort(function(a, b) {
    return b.date.localeCompare(a.date);
  });

  var html = '<div class="popup-title">' + group.city + ', ' + group.country + '</div>';

  for (var i = 0; i < sorted.length; i++) {
    var m = sorted[i];
    html += '<div class="popup-match">' +
      '<div class="popup-meta">' + formatDate(m.date) + ' · ' + m.competition + ' · ' + m.round + ' · ' + m.leg + '</div>' +
      '<div class="popup-score">' + m.home_team + ' – ' + m.away_team + '  ' + m.home_score + '–' + m.away_score + '</div>' +
      '</div>';
  }

  var rec = calcRecord(sorted);
  html += '<div class="popup-summary">' + sorted.length + ' meccs · ' +
    rec.w + ' gy · ' + rec.d + ' d · ' + rec.l + ' v</div>';

  return html;
}

// ── Markerek létrehozása ─────────────────────────────────────────────────

var cityGroups = groupByCity(MATCHES);
var markers = [];

Object.keys(cityGroups).forEach(function(key) {
  var group = cityGroups[key];
  var ringColor = getRingColor(group.matches);
  var radius = getRadius(group.matches.length);
  var icon = createMarkerIcon(ringColor, radius);

  var marker = L.marker([group.lat, group.lng], { icon: icon })
    .bindPopup(buildPopup(group), { maxWidth: 320, minWidth: 220 })
    .addTo(map);

  marker._fradiGroup = group;
  markers.push(marker);
});

// ── Számlálók feltöltése ─────────────────────────────────────────────────

function updateStats(filter) {
  var filtered = filter === 'all'
    ? MATCHES
    : MATCHES.filter(function(m) { return m.competition === filter; });

  var countries = {};
  var cities = {};
  for (var i = 0; i < filtered.length; i++) {
    countries[filtered[i].country] = true;
    cities[filtered[i].city] = true;
  }

  document.getElementById('stat-matches').textContent = filtered.length;
  document.getElementById('stat-countries').textContent = Object.keys(countries).length;
  document.getElementById('stat-cities').textContent = Object.keys(cities).length;
}

updateStats('all');

// ── Szűrő logika ────────────────────────────────────────────────────────

var activeFilter = 'all';

document.querySelectorAll('.filter-btn').forEach(function(btn) {
  btn.addEventListener('click', function() {
    document.querySelectorAll('.filter-btn').forEach(function(b) {
      b.classList.remove('active');
    });
    btn.classList.add('active');

    activeFilter = btn.getAttribute('data-filter');
    updateStats(activeFilter);

    markers.forEach(function(marker) {
      var group = marker._fradiGroup;
      if (activeFilter === 'all') {
        marker.setOpacity(1);
        marker.bindPopup(buildPopup(group), { maxWidth: 320, minWidth: 220 });
        return;
      }

      var filteredMatches = group.matches.filter(function(m) {
        return m.competition === activeFilter;
      });

      if (filteredMatches.length > 0) {
        marker.setOpacity(1);
        var filteredGroup = {
          city: group.city,
          country: group.country,
          matches: filteredMatches
        };
        marker.bindPopup(buildPopup(filteredGroup), { maxWidth: 320, minWidth: 220 });
      } else {
        marker.setOpacity(0.25);
      }
    });
  });
});
