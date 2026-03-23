const MATCHES = [

  // ── 2011/12 · Europa League ──────────────────────────────────────────────

  // Q1 – Ulisses FC (Örményország)
  {
    city: "Budapest",
    country: "Magyarország",
    lat: 47.4556,
    lng: 19.0919,
    competition: "EL",
    round: "Q1",
    leg: "Odavágó",
    date: "2011-06-30",
    home_team: "Ferencváros",
    away_team: "Ulisses FC",
    home_score: 3,
    away_score: 0,
    season: "2011/12"
  },
  {
    city: "Jereván",
    country: "Örményország",
    lat: 40.1872,
    lng: 44.5152,
    competition: "EL",
    round: "Q1",
    leg: "Visszavágó",
    date: "2011-07-07",
    home_team: "Ulisses FC",
    away_team: "Ferencváros",
    home_score: 0,
    away_score: 2,
    season: "2011/12"
  },

  // Q2 – Ålesund FK (Norvégia)
  {
    city: "Budapest",
    country: "Magyarország",
    lat: 47.4556,
    lng: 19.0919,
    competition: "EL",
    round: "Q2",
    leg: "Odavágó",
    date: "2011-07-14",
    home_team: "Ferencváros",
    away_team: "Ålesund FK",
    home_score: 2,
    away_score: 1,
    season: "2011/12"
  },
  {
    city: "Ålesund",
    country: "Norvégia",
    lat: 62.4723,
    lng: 6.1549,
    competition: "EL",
    round: "Q2",
    leg: "Visszavágó",
    date: "2011-07-21",
    home_team: "Ålesund FK",
    away_team: "Ferencváros",
    home_score: 3,
    away_score: 1,
    season: "2011/12"
  },


  // ── 2014/15 · Europa League ──────────────────────────────────────────────

  // Q1 – Sliema Wanderers (Málta)
  {
    city: "Ta'Qali",
    country: "Málta",
    lat: 35.8885,
    lng: 14.3264,
    competition: "EL",
    round: "Q1",
    leg: "Odavágó",
    date: "2014-07-01",
    home_team: "Sliema Wanderers",
    away_team: "Ferencváros",
    home_score: 1,
    away_score: 1,
    season: "2014/15"
  },
  {
    city: "Budapest",
    country: "Magyarország",
    lat: 47.4556,
    lng: 19.0919,
    competition: "EL",
    round: "Q1",
    leg: "Visszavágó",
    date: "2014-07-10",
    home_team: "Ferencváros",
    away_team: "Sliema Wanderers",
    home_score: 2,
    away_score: 1,
    season: "2014/15"
  },

  // Q2 – HNK Rijeka (Horvátország)
  {
    city: "Rijeka",
    country: "Horvátország",
    lat: 45.3271,
    lng: 14.4421,
    competition: "EL",
    round: "Q2",
    leg: "Odavágó",
    date: "2014-07-17",
    home_team: "HNK Rijeka",
    away_team: "Ferencváros",
    home_score: 1,
    away_score: 0,
    season: "2014/15"
  },
  {
    city: "Budapest",
    country: "Magyarország",
    lat: 47.4556,
    lng: 19.0919,
    competition: "EL",
    round: "Q2",
    leg: "Visszavágó",
    date: "2014-07-24",
    home_team: "Ferencváros",
    away_team: "HNK Rijeka",
    home_score: 1,
    away_score: 2,
    season: "2014/15"
  },


  // ── 2015/16 · Europa League ──────────────────────────────────────────────

  // Q1 – Go Ahead Eagles (Hollandia) – hazai pályájuk Emmen volt, nem Deventer
  {
    city: "Emmen",
    country: "Hollandia",
    lat: 52.7819,
    lng: 6.8945,
    competition: "EL",
    round: "Q1",
    leg: "Odavágó",
    date: "2015-07-02",
    home_team: "Go Ahead Eagles",
    away_team: "Ferencváros",
    home_score: 1,
    away_score: 1,
    season: "2015/16"
  },
  {
    city: "Budapest",
    country: "Magyarország",
    lat: 47.4556,
    lng: 19.0919,
    competition: "EL",
    round: "Q1",
    leg: "Visszavágó",
    date: "2015-07-09",
    home_team: "Ferencváros",
    away_team: "Go Ahead Eagles",
    home_score: 4,
    away_score: 1,
    season: "2015/16"
  },

  // Q2 – Željezničar (Bosznia-Hercegovina)
  {
    city: "Budapest",
    country: "Magyarország",
    lat: 47.4556,
    lng: 19.0919,
    competition: "EL",
    round: "Q2",
    leg: "Odavágó",
    date: "2015-07-16",
    home_team: "Ferencváros",
    away_team: "Željezničar",
    home_score: 0,
    away_score: 1,
    season: "2015/16"
  },
  {
    city: "Szarajevó",
    country: "Bosznia-Hercegovina",
    lat: 43.8163,
    lng: 18.3948,
    competition: "EL",
    round: "Q2",
    leg: "Visszavágó",
    date: "2015-07-23",
    home_team: "Željezničar",
    away_team: "Ferencváros",
    home_score: 2,
    away_score: 0,
    season: "2015/16"
  },


  // ── 2016/17 · Bajnokok Ligája ────────────────────────────────────────────

  // Q1 – Partizani Tirana (Albánia) – hazai pályájuk Elbasan volt, nem Tirana
  {
    city: "Elbasan",
    country: "Albánia",
    lat: 41.1125,
    lng: 20.0822,
    competition: "BL",
    round: "Q1",
    leg: "Odavágó",
    date: "2016-07-13",
    home_team: "Partizani Tirana",
    away_team: "Ferencváros",
    home_score: 1,
    away_score: 1,
    season: "2016/17"
  },
  {
    city: "Budapest",
    country: "Magyarország",
    lat: 47.4556,
    lng: 19.0919,
    competition: "BL",
    round: "Q1",
    leg: "Visszavágó",
    date: "2016-07-20",
    home_team: "Ferencváros",
    away_team: "Partizani Tirana",
    home_score: 1,
    away_score: 1,
    season: "2016/17"
  },


  // ── 2017/18 · Europa League ──────────────────────────────────────────────

  // Q1 – FK Jelgava (Lettország)
  {
    city: "Budapest",
    country: "Magyarország",
    lat: 47.4556,
    lng: 19.0919,
    competition: "EL",
    round: "Q1",
    leg: "Odavágó",
    date: "2017-06-29",
    home_team: "Ferencváros",
    away_team: "FK Jelgava",
    home_score: 2,
    away_score: 0,
    season: "2017/18"
  },
  {
    city: "Jelgava",
    country: "Lettország",
    lat: 56.6511,
    lng: 23.7213,
    competition: "EL",
    round: "Q1",
    leg: "Visszavágó",
    date: "2017-07-06",
    home_team: "FK Jelgava",
    away_team: "Ferencváros",
    home_score: 0,
    away_score: 1,
    season: "2017/18"
  },

  // Q2 – FC Midtjylland (Dánia)
  {
    city: "Budapest",
    country: "Magyarország",
    lat: 47.4556,
    lng: 19.0919,
    competition: "EL",
    round: "Q2",
    leg: "Odavágó",
    date: "2017-07-13",
    home_team: "Ferencváros",
    away_team: "FC Midtjylland",
    home_score: 2,
    away_score: 4,
    season: "2017/18"
  },
  {
    city: "Herning",
    country: "Dánia",
    lat: 56.1396,
    lng: 8.9740,
    competition: "EL",
    round: "Q2",
    leg: "Visszavágó",
    date: "2017-07-20",
    home_team: "FC Midtjylland",
    away_team: "Ferencváros",
    home_score: 3,
    away_score: 1,
    season: "2017/18"
  },


  // ── 2018/19 · Europa League ──────────────────────────────────────────────

  // Q1 – Maccabi Tel Aviv (Izrael) – hazai meccsüket Netanyában játszották
  {
    city: "Budapest",
    country: "Magyarország",
    lat: 47.4556,
    lng: 19.0919,
    competition: "EL",
    round: "Q1",
    leg: "Odavágó",
    date: "2018-07-12",
    home_team: "Ferencváros",
    away_team: "Maccabi Tel Aviv",
    home_score: 1,
    away_score: 1,
    season: "2018/19"
  },
  {
    city: "Netanya",
    country: "Izrael",
    lat: 32.3215,
    lng: 34.8532,
    competition: "EL",
    round: "Q1",
    leg: "Visszavágó",
    date: "2018-07-19",
    home_team: "Maccabi Tel Aviv",
    away_team: "Ferencváros",
    home_score: 1,
    away_score: 0,
    season: "2018/19"
  },


  // ── 2019/20 · Bajnokok Ligája – selejtező ────────────────────────────────

  // Q1 – Ludogorets Razgrad (Bulgária)
  {
    city: "Budapest",
    country: "Magyarország",
    lat: 47.4556,
    lng: 19.0919,
    competition: "BL",
    round: "Q1",
    leg: "Odavágó",
    date: "2019-07-10",
    home_team: "Ferencváros",
    away_team: "Ludogorets Razgrad",
    home_score: 2,
    away_score: 1,
    season: "2019/20"
  },
  {
    city: "Razgrad",
    country: "Bulgária",
    lat: 43.5275,
    lng: 26.5240,
    competition: "BL",
    round: "Q1",
    leg: "Visszavágó",
    date: "2019-07-17",
    home_team: "Ludogorets Razgrad",
    away_team: "Ferencváros",
    home_score: 2,
    away_score: 3,
    season: "2019/20"
  },

  // Q2 – Valletta FC (Málta)
  {
    city: "Budapest",
    country: "Magyarország",
    lat: 47.4556,
    lng: 19.0919,
    competition: "BL",
    round: "Q2",
    leg: "Odavágó",
    date: "2019-07-24",
    home_team: "Ferencváros",
    away_team: "Valletta FC",
    home_score: 3,
    away_score: 1,
    season: "2019/20"
  },
  {
    city: "Ta'Qali",
    country: "Málta",
    lat: 35.8885,
    lng: 14.3264,
    competition: "BL",
    round: "Q2",
    leg: "Visszavágó",
    date: "2019-07-30",
    home_team: "Valletta FC",
    away_team: "Ferencváros",
    home_score: 1,
    away_score: 1,
    season: "2019/20"
  },

  // Q3 – Dinamo Zagreb (Horvátország)
  {
    city: "Zágráb",
    country: "Horvátország",
    lat: 45.8150,
    lng: 15.9819,
    competition: "BL",
    round: "Q3",
    leg: "Odavágó",
    date: "2019-08-06",
    home_team: "Dinamo Zagreb",
    away_team: "Ferencváros",
    home_score: 1,
    away_score: 1,
    season: "2019/20"
  },
  {
    city: "Budapest",
    country: "Magyarország",
    lat: 47.4556,
    lng: 19.0919,
    competition: "BL",
    round: "Q3",
    leg: "Visszavágó",
    date: "2019-08-13",
    home_team: "Ferencváros",
    away_team: "Dinamo Zagreb",
    home_score: 0,
    away_score: 4,
    season: "2019/20"
  },

  // ── 2019/20 · Europa League – selejtező ──────────────────────────────────

  // PO – FK Šuduva (Litvánia)
  {
    city: "Marijampolė",
    country: "Litvánia",
    lat: 54.5594,
    lng: 23.3545,
    competition: "EL",
    round: "PO",
    leg: "Odavágó",
    date: "2019-08-22",
    home_team: "FK Šuduva",
    away_team: "Ferencváros",
    home_score: 0,
    away_score: 0,
    season: "2019/20"
  },
  {
    city: "Budapest",
    country: "Magyarország",
    lat: 47.4556,
    lng: 19.0919,
    competition: "EL",
    round: "PO",
    leg: "Visszavágó",
    date: "2019-08-29",
    home_team: "Ferencváros",
    away_team: "FK Šuduva",
    home_score: 4,
    away_score: 2,
    season: "2019/20"
  },

  // ── 2019/20 · Europa League – csoportkör (F csoport) ─────────────────────

  {
    city: "Barcelona",
    country: "Spanyolország",
    lat: 41.3809,
    lng: 2.1228,
    competition: "EL",
    round: "Csoport",
    leg: "1. mérkőzés",
    date: "2019-09-19",
    home_team: "Espanyol",
    away_team: "Ferencváros",
    home_score: 1,
    away_score: 1,
    season: "2019/20"
  },
  {
    city: "Budapest",
    country: "Magyarország",
    lat: 47.4556,
    lng: 19.0919,
    competition: "EL",
    round: "Csoport",
    leg: "2. mérkőzés",
    date: "2019-10-03",
    home_team: "Ferencváros",
    away_team: "Ludogorets Razgrad",
    home_score: 0,
    away_score: 3,
    season: "2019/20"
  },
  {
    city: "Moszkva",
    country: "Oroszország",
    lat: 55.7558,
    lng: 37.6173,
    competition: "EL",
    round: "Csoport",
    leg: "3. mérkőzés",
    date: "2019-10-24",
    home_team: "CSKA Moszkva",
    away_team: "Ferencváros",
    home_score: 0,
    away_score: 1,
    season: "2019/20"
  },
  {
    city: "Budapest",
    country: "Magyarország",
    lat: 47.4556,
    lng: 19.0919,
    competition: "EL",
    round: "Csoport",
    leg: "4. mérkőzés",
    date: "2019-11-07",
    home_team: "Ferencváros",
    away_team: "CSKA Moszkva",
    home_score: 0,
    away_score: 0,
    season: "2019/20"
  },
  {
    city: "Budapest",
    country: "Magyarország",
    lat: 47.4556,
    lng: 19.0919,
    competition: "EL",
    round: "Csoport",
    leg: "5. mérkőzés",
    date: "2019-11-28",
    home_team: "Ferencváros",
    away_team: "Espanyol",
    home_score: 2,
    away_score: 2,
    season: "2019/20"
  },
  {
    city: "Razgrad",
    country: "Bulgária",
    lat: 43.5275,
    lng: 26.5240,
    competition: "EL",
    round: "Csoport",
    leg: "6. mérkőzés",
    date: "2019-12-12",
    home_team: "Ludogorets Razgrad",
    away_team: "Ferencváros",
    home_score: 1,
    away_score: 1,
    season: "2019/20"
  },

];

window.MATCHES = MATCHES;
