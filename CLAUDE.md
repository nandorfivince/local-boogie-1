# CLAUDE.md – Ferencváros Európai Meccsek Interaktív Térképe

## Projekt leírás

Interaktív Európa-térkép, amely megjeleníti a Ferencváros TC összes európai
kupamérkőzésének helyszínét 2010-től 2026-ig. A térképen kattintható markerek
jelölik a városokat; kattintásra popup jelenik meg az adott helyszínen játszott
összes meccs adataival, időrendben visszafelé.

---

## Tech stack

- **Vanilla HTML5 / CSS3 / JavaScript (ES6+)**
- **Leaflet.js** (CDN) – interaktív térkép
- **CartoDB Dark Matter** tile – sötét alaptérkép
- Semmi build tool, semmi npm – közvetlenül böngészőből megnyitható

---

## Fájlstruktúra

```
fradi-terkep/
├── index.html       → HTML váz, fejléc, számlálók, szűrő gombok  [GÁBOR]
├── style.css        → Teljes stílus: sötét téma, Fradi színek     [GÁBOR]
├── matches.js       → Összes meccsadat tömbként                   [GÁBOR]
└── map.js           → Leaflet térkép, markerek, szűrés, popup     [VINCE]
```

---

## Dizájn specifikáció

### Színpaletta
```
Háttér:          #1a1a2e  (mélysötét)
Fradi zöld:      #007A33
Fradi fehér:     #FFFFFF
Szöveg:          #e0e0e0
Kártya háttér:   #16213e
BL gyűrű:        #FFD700  (sárga)
EL gyűrű:        #FF6B35  (narancssárga)
ECL gyűrű:       #9B59B6  (lila)
Vegyes gyűrű:    #FFFFFF  (fehér)
```

### Oldalelrendezés (felülről lefelé)

```
┌─────────────────────────────────────────────────────────────┐
│  [Fradi logó]  Ferencváros Európán át · 2010–2026           │  ← Hero fejléc (~80px)
│                   [X meccs] [X ország] [X város]            │  ← Számlálók
├─────────────────────────────────────────────────────────────┤
│  [ ÖSSZES ]  [ BL ]  [ EL ]  [ ECL ]                        │  ← Szűrő sáv
├─────────────────────────────────────────────────────────────┤
│                                                             │
│                    LEAFLET TÉRKÉP                           │  ← ~70-75vh
│                                                             │
└─────────────────────────────────────────────────────────────┘
```

### Marker logika

| Eset | Marker kinézete |
|---|---|
| Csak BL meccsek | Fradi zöld kör + **sárga** gyűrű |
| Csak EL meccsek | Fradi zöld kör + **narancssárga** gyűrű |
| Csak ECL meccsek | Fradi zöld kör + **lila** gyűrű |
| Vegyes sorozatok | Fradi zöld kör + **fehér** gyűrű |
| Budapest (hazai) | Fradi zöld kör + **fehér** gyűrű |

**Méret** (a városban játszott összes meccs száma alapján):
- 1 meccs → 10px sugár
- 2–3 meccs → 14px sugár
- 4+ meccs → 18px sugár

**Szűrő aktív állapot:**
- Érintett markerek → teljes opacitás
- Nem érintett markerek → 25% opacitás, de láthatók maradnak

### Popup struktúra

```
📍 Zágráb, Horvátország
────────────────────────────────────
2020.09.16 · BL · Q3 · 1. mérkőzés
Ferencváros – Dinamo Zagreb  2–1

2019.08.06 · BL · Q3 · Odavágó
Dinamo Zagreb – Ferencváros  1–1
────────────────────────────────────
2 meccs · 1 gy · 1 d · 0 v
```

Sorrendezés: **legújabb felül**, legrégebbi alul.
Elválasztó: vékony vonal minden meccs között.
Alul: összesítő sor (meccsszám, győzelem/döntetlen/vereség).

---

## Adatstruktúra (`matches.js`)

Minden meccs egy objektum a `MATCHES` tömbben:

```javascript
const MATCHES = [
  {
    city: "Zágráb",
    country: "Horvátország",
    lat: 45.8150,
    lng: 15.9819,
    competition: "BL",          // "BL" | "EL" | "ECL"
    round: "Q3",                // pl. "Q1", "Q2", "Q3", "PO", "Csoport", "R16", "Ligaszakasz"
    leg: "1. mérkőzés",         // "Odavágó" | "Visszavágó" | "1. mérkőzés" | "2. mérkőzés" | stb.
    date: "2020-09-16",         // ISO formátum: YYYY-MM-DD
    home_team: "Ferencváros",   // mindig "Ferencváros" ha hazai
    away_team: "Dinamo Zagreb",
    home_score: 2,
    away_score: 1,
    season: "2020/21"
  },
  // ...
];
```

**Fontos:** ha egy meccs Budapest helyszínű (hazai), a `city` értéke `"Budapest"`,
`lat: 47.4556`, `lng: 19.0919` (Groupama Aréna), kivéve ahol a tempofradi.hu
Puskás Arénát jelöl (2020/21 BL csoportkör: Juventus, Barcelona meccsek).

---

## Adatgyűjtési módszertan (Gábornak)

Ez a rész dokumentálja, hogyan állítottuk össze a meccslistát, hogy reprodukálható
és ellenőrizhető legyen.

### Elsődleges forrás: tempofradi.hu

A **tempofradi.hu** az egyetlen mérvadó forrás. Ez egy részletes magyar Fradi-
adattár, amely szezononkénti bontásban tartalmazza az összes tétmeccs adatát
(dátum, helyszín, eredmény, csapatok, edző, gólszerzők). Az adatokat innen
kell átvenni, más forrásból csak keresztellenőrzésre szabad használni.

**Releváns oldalak a tempofradi.hu-n:**

```
https://tempofradi.hu/a-ferencvaros-bl-bek-merkozesei
  → BL/BEK meccsek összesítő listája dátummal, helyszínnel, eredménnyel

https://tempofradi.hu/a-ferencvaros-uefa-merkozesei
  → UEFA Kupa / Európa Liga meccsek összesítő listája

https://tempofradi.hu/a-20XX-XX-evi-bajnoki-szezon-merkozesei
  → Szezononkénti teljes meccsnapló (pl. a-2019-20-evi-bajnoki-szezon-merkozesei)
  → Ez tartalmazza a legtöbb adatot: pontos dátum, helyszín (város neve), eredmény

https://tempofradi.hu/202X-[hónap]-[meccs-cím]
  → Egyedi meccsoldal, ha valamin kétségek vannak (pl. pontos stadionnév)
```

### Keresztellenőrzés másodlagos forrásokkal

Ha egy adat (főleg régebbi, 2011–2018 közötti meccsek) bizonytalan a tempofradin,
ellenőrizd le az alábbi sorrendben:

1. **Wikipedia** – `Ferencvárosi TC in European football` (angol) és
   `A Ferencvárosi TC [év]-[év]-es szezonja` (magyar) oldalak
2. **Soccerway** – pontos dátumok, mérkőzésoldalak
3. **UEFA.com** – hivatalos meccs-archívum

**Szabály: ha a tempofradi és egy másik forrás eltér, a tempofradi az igazság.**

### Ismert finomságok és buktatók

Az alábbi adatok a kutatás során derültek ki, és eltérnek a "közkeletű" elképzeléstől:

| Mit gondolnánk | Valójában (tempofradi alapján) |
|---|---|
| Partizani Tirana → Tirana | **Elbasan** (a Partizani stadionja felújítás alatt volt, 2016) |
| Go Ahead Eagles → Deventer | **Emmen** (ideiglenes hazai pálya, 2015) |
| Maccabi Tel Aviv → Tel Aviv | **Netanya** (a Maccabi itt játszott hazai BL-meccseket, 2018) |
| Tobol → Asztana/Nur-Sultan | **Kosztanaj** (a Tobol hazai városa, 2022) |
| TNS (The New Saints) → Wales | **Oswestry, Anglia** (walesi határon lévő angol város, 2024) |
| 2020/21 BL hazai meccsek → Groupama | **Puskás Aréna** (Juventus, Barcelona – kapacitás miatt, 2020) |
| 2022/23 EL R16 visszavágó → Groupama | **Puskás Aréna** (Leverkusen – 50 675 néző, 2023) |
| 2019/12/12 Ludogorets–Fradi EL | **1–1** (nem 3–1, tempofradi megerősítette) |
| Espanyol helyszín → Cornellà | **Barcelona** (tempofradi így jelöli) |

### Lépésről lépésre: hogyan töltsd ki a matches.js-t

1. Nyisd meg a tempofradi.hu szezonos összefoglalóját
   (`a-20XX-XX-evi-bajnoki-szezon-merkozesei`)
2. Keress rá az "EL", "BL", "ECL", "selejtező", "csoportkör" szavakra az oldalon
3. Minden tételt másolj be a `MATCHES` tömbbe a fenti adatstruktúra szerint
4. Koordinátákat Google Maps-ről vagy nominatim.openstreetmap.org-ról szerezd be
5. Ha egy városban már van bejegyzés, ne hozz létre új markert – a koordináta
   és a város neve legyen azonos az összes odatartozó meccsnél (a `map.js`
   csoportosítja majd)
6. Minden bevitel után ellenőrizd a tempofradi eredeti szövegével

---

## Implementációs checklist

### GÁBOR feladatai

**`matches.js` – Adatfájl**
- [ ] Létrehozza a fájlt az `const MATCHES = [...]` struktúrával
- [ ] Beviszi a 2011/12-es szezon adatait (Ulisses, Ålesund)
- [ ] Beviszi a 2014/15-es adatokat (Sliema, Rijeka)
- [ ] Beviszi a 2015/16-os adatokat (Go Ahead Eagles → **Emmen**, Željezničár → **Sarajevo**)
- [ ] Beviszi a 2016/17-es adatokat (Partizani → **Elbasan**)
- [ ] Beviszi a 2017/18-as adatokat (Jelgava, Midtjylland)
- [ ] Beviszi a 2018/19-es adatokat (Maccabi → **Netanya**)
- [ ] Beviszi a 2019/20-as BL selejtező adatait (Ludogorets, Valletta, Dinamo Zagreb)
- [ ] Beviszi a 2019/20-as EL szezon adatait (Suduva/Marijampolė, Espanyol/Barcelona, CSKA/Moszkva, Ludogorets/Razgrad – utolsó meccs eredménye **1-1**)
- [ ] Beviszi a 2020/21-es BL adatokat (Djurgårdens, Celtic/Glasgow, Dinamo Zagreb, Molde, Barcelona/Camp Nou, Dinamo Kyiv, Juventus/**Puskás Aréna**, Barcelona/**Puskás Aréna**, Kyiv)
- [ ] Beviszi a 2021/22-es adatokat (Prishtina, Žalgiris/Vilnius, Slavia/Prága, Young Boys/Bern, Leverkusen, Real Betis/Sevilla, Celtic/Glasgow)
- [ ] Beviszi a 2022/23-as adatokat (Tobol/**Kosztanaj**, Slovan/Pozsony, Qarabağ/Baku, Shamrock/Dublin, Trabzon, Monaco, Belgrád/Crvena Zvezda, Leverkusen R16/**Puskás Aréna**)
- [ ] Beviszi a 2023/24-es adatokat (Klaksvík, Shamrock/Dublin, Hamrun/**Ta'Qali**, Žalgiris/Vilnius, Čukarički/Leskovac, Fiorentina/Firenze, Genk, Olympiacos/Pireus)
- [ ] Beviszi a 2024/25-es adatokat (TNS/**Oswestry**, Midtjylland/Herning, Borac/Banja Luka, Anderlecht/Brüsszel, Tottenham/London, Nice, Dinamo Kyiv, Malmö, PAOK/Thessaloniki, Eintracht/Frankfurt, AZ/Alkmaar, Viktoria Plzeň)
- [ ] Beviszi a 2025/26-os adatokat (Noah/Yereván, Ludogorets/Razgrad, Qarabağ/Baku, Plzeň, Genk, Salzburg, Ludogorets/Budapest, Fenerbahçe/Isztanbul, Rangers/Glasgow, Panathinaikos, Nottingham, Ludogorets KO PO, Braga)
- [ ] Budapest koordinátái: Groupama Aréna `lat: 47.4556, lng: 19.0919`
- [ ] Budapest koordinátái: Puskás Aréna `lat: 47.5013, lng: 19.0514`
- [ ] Ellenőrzi minden bejegyzést a tempofradi.hu-val szemben
- [ ] Exportálja: `export default MATCHES;` vagy `window.MATCHES = MATCHES;`

**`index.html` – HTML váz**
- [ ] Alap HTML5 boilerplate, UTF-8, viewport meta
- [ ] Leaflet CDN link (CSS + JS)
- [ ] Hero fejléc: Fradi logó placeholder + cím
- [ ] 3 db számlálókártya (`id="stat-matches"`, `id="stat-countries"`, `id="stat-cities"`)
- [ ] Szűrő gombok: `data-filter="all|BL|EL|ECL"` attribútummal
- [ ] Térkép konténer: `<div id="map"></div>`
- [ ] Script tagek helyes sorrendben: `matches.js` → `map.js`

**`style.css` – Stílusok**
- [ ] CSS reset / box-sizing
- [ ] CSS változók a színpalettával (`:root` blokkban)
- [ ] Body: sötét háttér, fehér szöveg, teljes magasság
- [ ] Hero fejléc stílusa (magasság, flex, logó méret, cím betűméret)
- [ ] Számlálókártyák stílusa (kártya háttér, szám kiemelése zöldben)
- [ ] Szűrő gombok stílusa (aktív/inaktív állapot, hover)
- [ ] `#map` magassága: `calc(100vh - [fejléc+szűrő magassága])`
- [ ] Leaflet popup egyedi stílusa (sötét háttér, fehér szöveg, zöld cím)
- [ ] Reszponzivitás: mobilon a számlálók egymás alá kerülnek

---

### VINCE feladatai

**`map.js` – Térkép logika**
- [ ] Leaflet térkép inicializálása CartoDB Dark Matter tile-lal
- [ ] `MATCHES` tömb városonkénti csoportosítása (azonos `city` → egy marker)
- [ ] Marker méret kalkuláció (meccsszám alapján: 10/14/18px)
- [ ] Marker szín logika: sorozat(ok) alapján gyűrű szín meghatározása
  - Ha csak BL → sárga gyűrű
  - Ha csak EL → narancssárga gyűrű
  - Ha csak ECL → lila gyűrű
  - Ha vegyes → fehér gyűrű
- [ ] SVG vagy Canvas alapú egyedi Leaflet marker (DivIcon)
- [ ] Popup HTML generátor (meccsek időrendben visszafelé, elválasztóval, összesítővel)
- [ ] Szűrő logika: gomb kattintásra markerek opacity váltása
- [ ] Számlálók feltöltése JS-ből (meccsszám, országok, leglátogatottabb város)
- [ ] Budapest: Groupama Aréna és Puskás Aréna külön kezelése (mindkettő megjelenik)

---

## Git workflow a csapatmunkához

```bash
# Gábor branche
git checkout -b gabor/adatok

# Vince branche
git checkout -b vince/terkep

# Mergek main-re
git checkout main
git merge gabor/adatok
git merge vince/terkep
```

**Fő szabály: senki nem commitol közvetlenül a `main` branchre.**

Ajánlott commit üzenet formátum:
```
[gabor] matches.js: 2011-2015 szezonok hozzáadva
[vince] map.js: marker logika kész, szűrés nélkül
[gabor] style.css: szűrő gombok aktív állapota
```

---

## Hogyan teszteld a projektet

```bash
# Semmi telepítés nem kell – csak nyisd meg böngészőben:
open index.html

# Ha CORS hibát dob (matches.js importáláskor), indíts lokális szervert:
python3 -m http.server 8080
# majd: http://localhost:8080
```

---

## Definition of Done

A projekt akkor kész, ha:
- [ ] A térkép betölt és minden marker megjelenik
- [ ] Popupok helyesen jelenítik meg az adatokat időrendben
- [ ] A 4 szűrő gomb működik
- [ ] A számlálók helyes értékeket mutatnak
- [ ] Mobilon is használható
- [ ] Egy `index.html` megnyitásával azonnal fut, telepítés nélkül
