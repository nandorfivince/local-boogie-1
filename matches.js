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


  // ── 2020/21 · Bajnokok Ligája – selejtező ────────────────────────────────

  // Q1 – Djurgårdens IF (Svédország)
  {
    city: "Budapest",
    country: "Magyarország",
    lat: 47.4556,
    lng: 19.0919,
    competition: "BL",
    round: "Q1",
    leg: "1. mérkőzés",
    date: "2020-08-19",
    home_team: "Ferencváros",
    away_team: "Djurgårdens IF",
    home_score: 2,
    away_score: 0,
    season: "2020/21"
  },

  // Q2 – Celtic FC (Skócia)
  {
    city: "Glasgow",
    country: "Skócia",
    lat: 55.8490,
    lng: -4.2050,
    competition: "BL",
    round: "Q2",
    leg: "1. mérkőzés",
    date: "2020-08-26",
    home_team: "Celtic FC",
    away_team: "Ferencváros",
    home_score: 1,
    away_score: 2,
    season: "2020/21"
  },

  // Q3 – Dinamo Zagreb (Horvátország)
  {
    city: "Budapest",
    country: "Magyarország",
    lat: 47.4556,
    lng: 19.0919,
    competition: "BL",
    round: "Q3",
    leg: "1. mérkőzés",
    date: "2020-09-16",
    home_team: "Ferencváros",
    away_team: "Dinamo Zagreb",
    home_score: 2,
    away_score: 1,
    season: "2020/21"
  },

  // PO – Molde FK (Norvégia)
  {
    city: "Molde",
    country: "Norvégia",
    lat: 62.7373,
    lng: 7.1588,
    competition: "BL",
    round: "PO",
    leg: "Odavágó",
    date: "2020-09-23",
    home_team: "Molde FK",
    away_team: "Ferencváros",
    home_score: 3,
    away_score: 3,
    season: "2020/21"
  },
  {
    city: "Budapest",
    country: "Magyarország",
    lat: 47.4556,
    lng: 19.0919,
    competition: "BL",
    round: "PO",
    leg: "Visszavágó",
    date: "2020-09-29",
    home_team: "Ferencváros",
    away_team: "Molde FK",
    home_score: 0,
    away_score: 0,
    season: "2020/21"
  },

  // ── 2020/21 · Bajnokok Ligája – csoportkör (G csoport) ───────────────────

  {
    city: "Barcelona",
    country: "Spanyolország",
    lat: 41.3809,
    lng: 2.1228,
    competition: "BL",
    round: "Csoport",
    leg: "1. mérkőzés",
    date: "2020-10-20",
    home_team: "FC Barcelona",
    away_team: "Ferencváros",
    home_score: 5,
    away_score: 1,
    season: "2020/21"
  },
  // Dinamo Kyiv hazai meccs – Groupama Aréna
  {
    city: "Budapest",
    country: "Magyarország",
    lat: 47.4556,
    lng: 19.0919,
    competition: "BL",
    round: "Csoport",
    leg: "2. mérkőzés",
    date: "2020-10-28",
    home_team: "Ferencváros",
    away_team: "Dinamo Kyiv",
    home_score: 2,
    away_score: 2,
    season: "2020/21"
  },
  // Juventus hazai meccs – Puskás Aréna (kapacitás miatt)
  {
    city: "Budapest",
    country: "Magyarország",
    lat: 47.5013,
    lng: 19.0514,
    competition: "BL",
    round: "Csoport",
    leg: "3. mérkőzés",
    date: "2020-11-04",
    home_team: "Ferencváros",
    away_team: "Juventus",
    home_score: 1,
    away_score: 4,
    season: "2020/21"
  },
  {
    city: "Torino",
    country: "Olaszország",
    lat: 45.1096,
    lng: 7.6413,
    competition: "BL",
    round: "Csoport",
    leg: "4. mérkőzés",
    date: "2020-11-24",
    home_team: "Juventus",
    away_team: "Ferencváros",
    home_score: 2,
    away_score: 1,
    season: "2020/21"
  },
  // Barcelona hazai meccs – Puskás Aréna (kapacitás miatt)
  {
    city: "Budapest",
    country: "Magyarország",
    lat: 47.5013,
    lng: 19.0514,
    competition: "BL",
    round: "Csoport",
    leg: "5. mérkőzés",
    date: "2020-12-02",
    home_team: "Ferencváros",
    away_team: "FC Barcelona",
    home_score: 0,
    away_score: 3,
    season: "2020/21"
  },
  {
    city: "Kijev",
    country: "Ukrajna",
    lat: 50.4337,
    lng: 30.5197,
    competition: "BL",
    round: "Csoport",
    leg: "6. mérkőzés",
    date: "2020-12-08",
    home_team: "Dinamo Kyiv",
    away_team: "Ferencváros",
    home_score: 1,
    away_score: 0,
    season: "2020/21"
  },


  // ── 2021/22 · Bajnokok Ligája – selejtező ────────────────────────────────

  // Q1 – FC Prishtina (Koszovó)
  {
    city: "Budapest",
    country: "Magyarország",
    lat: 47.4556,
    lng: 19.0919,
    competition: "BL",
    round: "Q1",
    leg: "Odavágó",
    date: "2021-07-06",
    home_team: "Ferencváros",
    away_team: "FC Prishtina",
    home_score: 3,
    away_score: 0,
    season: "2021/22"
  },
  {
    city: "Prishtina",
    country: "Koszovó",
    lat: 42.6629,
    lng: 21.1655,
    competition: "BL",
    round: "Q1",
    leg: "Visszavágó",
    date: "2021-07-13",
    home_team: "FC Prishtina",
    away_team: "Ferencváros",
    home_score: 1,
    away_score: 3,
    season: "2021/22"
  },

  // Q2 – Žalgiris Vilnius (Litvánia)
  {
    city: "Budapest",
    country: "Magyarország",
    lat: 47.4556,
    lng: 19.0919,
    competition: "BL",
    round: "Q2",
    leg: "Odavágó",
    date: "2021-07-20",
    home_team: "Ferencváros",
    away_team: "Žalgiris Vilnius",
    home_score: 2,
    away_score: 0,
    season: "2021/22"
  },
  {
    city: "Vilnius",
    country: "Litvánia",
    lat: 54.7227,
    lng: 25.3342,
    competition: "BL",
    round: "Q2",
    leg: "Visszavágó",
    date: "2021-07-27",
    home_team: "Žalgiris Vilnius",
    away_team: "Ferencváros",
    home_score: 1,
    away_score: 3,
    season: "2021/22"
  },

  // Q3 – SK Slavia Praha (Csehország)
  {
    city: "Budapest",
    country: "Magyarország",
    lat: 47.4556,
    lng: 19.0919,
    competition: "BL",
    round: "Q3",
    leg: "Odavágó",
    date: "2021-08-04",
    home_team: "Ferencváros",
    away_team: "SK Slavia Praha",
    home_score: 2,
    away_score: 0,
    season: "2021/22"
  },
  {
    city: "Prága",
    country: "Csehország",
    lat: 50.0678,
    lng: 14.4812,
    competition: "BL",
    round: "Q3",
    leg: "Visszavágó",
    date: "2021-08-10",
    home_team: "SK Slavia Praha",
    away_team: "Ferencváros",
    home_score: 1,
    away_score: 0,
    season: "2021/22"
  },

  // PO – BSC Young Boys (Svájc)
  {
    city: "Bern",
    country: "Svájc",
    lat: 46.9631,
    lng: 7.4645,
    competition: "BL",
    round: "PO",
    leg: "Odavágó",
    date: "2021-08-18",
    home_team: "BSC Young Boys",
    away_team: "Ferencváros",
    home_score: 3,
    away_score: 2,
    season: "2021/22"
  },
  {
    city: "Budapest",
    country: "Magyarország",
    lat: 47.4556,
    lng: 19.0919,
    competition: "BL",
    round: "PO",
    leg: "Visszavágó",
    date: "2021-08-24",
    home_team: "Ferencváros",
    away_team: "BSC Young Boys",
    home_score: 2,
    away_score: 3,
    season: "2021/22"
  },

  // ── 2021/22 · Europa League – csoportkör (H csoport) ─────────────────────

  {
    city: "Leverkusen",
    country: "Németország",
    lat: 51.0388,
    lng: 6.9875,
    competition: "EL",
    round: "Csoport",
    leg: "1. mérkőzés",
    date: "2021-09-16",
    home_team: "Bayer Leverkusen",
    away_team: "Ferencváros",
    home_score: 2,
    away_score: 1,
    season: "2021/22"
  },
  {
    city: "Budapest",
    country: "Magyarország",
    lat: 47.4556,
    lng: 19.0919,
    competition: "EL",
    round: "Csoport",
    leg: "2. mérkőzés",
    date: "2021-09-30",
    home_team: "Ferencváros",
    away_team: "Real Betis",
    home_score: 1,
    away_score: 3,
    season: "2021/22"
  },
  {
    city: "Glasgow",
    country: "Skócia",
    lat: 55.8490,
    lng: -4.2050,
    competition: "EL",
    round: "Csoport",
    leg: "3. mérkőzés",
    date: "2021-10-19",
    home_team: "Celtic FC",
    away_team: "Ferencváros",
    home_score: 2,
    away_score: 0,
    season: "2021/22"
  },
  {
    city: "Budapest",
    country: "Magyarország",
    lat: 47.4556,
    lng: 19.0919,
    competition: "EL",
    round: "Csoport",
    leg: "4. mérkőzés",
    date: "2021-11-04",
    home_team: "Ferencváros",
    away_team: "Celtic FC",
    home_score: 2,
    away_score: 3,
    season: "2021/22"
  },
  {
    city: "Sevilla",
    country: "Spanyolország",
    lat: 37.3566,
    lng: -5.9828,
    competition: "EL",
    round: "Csoport",
    leg: "5. mérkőzés",
    date: "2021-11-25",
    home_team: "Real Betis",
    away_team: "Ferencváros",
    home_score: 2,
    away_score: 0,
    season: "2021/22"
  },
  {
    city: "Budapest",
    country: "Magyarország",
    lat: 47.4556,
    lng: 19.0919,
    competition: "EL",
    round: "Csoport",
    leg: "6. mérkőzés",
    date: "2021-12-09",
    home_team: "Ferencváros",
    away_team: "Bayer Leverkusen",
    home_score: 1,
    away_score: 0,
    season: "2021/22"
  },


  // ── 2022/23 · Bajnokok Ligája – selejtező ────────────────────────────────

  // Q1 – Tobol Kosztanaj (Kazahsztán) – hazai pályájuk Kosztanaj, nem Asztana
  {
    city: "Kosztanaj",
    country: "Kazahsztán",
    lat: 53.2141,
    lng: 63.6247,
    competition: "BL",
    round: "Q1",
    leg: "Odavágó",
    date: "2022-07-06",
    home_team: "Tobol Kosztanaj",
    away_team: "Ferencváros",
    home_score: 0,
    away_score: 0,
    season: "2022/23"
  },
  {
    city: "Budapest",
    country: "Magyarország",
    lat: 47.4556,
    lng: 19.0919,
    competition: "BL",
    round: "Q1",
    leg: "Visszavágó",
    date: "2022-07-13",
    home_team: "Ferencváros",
    away_team: "Tobol Kosztanaj",
    home_score: 5,
    away_score: 1,
    season: "2022/23"
  },

  // Q2 – Slovan Bratislava (Szlovákia)
  {
    city: "Budapest",
    country: "Magyarország",
    lat: 47.4556,
    lng: 19.0919,
    competition: "BL",
    round: "Q2",
    leg: "Odavágó",
    date: "2022-07-20",
    home_team: "Ferencváros",
    away_team: "Slovan Bratislava",
    home_score: 1,
    away_score: 2,
    season: "2022/23"
  },
  {
    city: "Pozsony",
    country: "Szlovákia",
    lat: 48.1693,
    lng: 17.1283,
    competition: "BL",
    round: "Q2",
    leg: "Visszavágó",
    date: "2022-07-27",
    home_team: "Slovan Bratislava",
    away_team: "Ferencváros",
    home_score: 1,
    away_score: 4,
    season: "2022/23"
  },

  // Q3 – Qarabağ FK (Azerbajdzsán)
  {
    city: "Baku",
    country: "Azerbajdzsán",
    lat: 40.4093,
    lng: 49.8671,
    competition: "BL",
    round: "Q3",
    leg: "Odavágó",
    date: "2022-08-03",
    home_team: "Qarabağ FK",
    away_team: "Ferencváros",
    home_score: 1,
    away_score: 1,
    season: "2022/23"
  },
  {
    city: "Budapest",
    country: "Magyarország",
    lat: 47.4556,
    lng: 19.0919,
    competition: "BL",
    round: "Q3",
    leg: "Visszavágó",
    date: "2022-08-09",
    home_team: "Ferencváros",
    away_team: "Qarabağ FK",
    home_score: 1,
    away_score: 3,
    season: "2022/23"
  },

  // ── 2022/23 · Europa League – selejtező ──────────────────────────────────

  // PO – Shamrock Rovers (Írország)
  {
    city: "Budapest",
    country: "Magyarország",
    lat: 47.4556,
    lng: 19.0919,
    competition: "EL",
    round: "PO",
    leg: "Odavágó",
    date: "2022-08-18",
    home_team: "Ferencváros",
    away_team: "Shamrock Rovers",
    home_score: 4,
    away_score: 0,
    season: "2022/23"
  },
  {
    city: "Dublin",
    country: "Írország",
    lat: 53.2856,
    lng: -6.3701,
    competition: "EL",
    round: "PO",
    leg: "Visszavágó",
    date: "2022-08-25",
    home_team: "Shamrock Rovers",
    away_team: "Ferencváros",
    home_score: 1,
    away_score: 0,
    season: "2022/23"
  },

  // ── 2022/23 · Europa League – csoportkör (H csoport) ─────────────────────

  {
    city: "Budapest",
    country: "Magyarország",
    lat: 47.4556,
    lng: 19.0919,
    competition: "EL",
    round: "Csoport",
    leg: "1. mérkőzés",
    date: "2022-09-08",
    home_team: "Ferencváros",
    away_team: "Trabzonspor",
    home_score: 3,
    away_score: 2,
    season: "2022/23"
  },
  {
    city: "Monaco",
    country: "Monaco",
    lat: 43.7229,
    lng: 7.4153,
    competition: "EL",
    round: "Csoport",
    leg: "2. mérkőzés",
    date: "2022-09-15",
    home_team: "AS Monaco",
    away_team: "Ferencváros",
    home_score: 0,
    away_score: 1,
    season: "2022/23"
  },
  {
    city: "Belgrád",
    country: "Szerbia",
    lat: 44.8125,
    lng: 20.4612,
    competition: "EL",
    round: "Csoport",
    leg: "3. mérkőzés",
    date: "2022-10-06",
    home_team: "Crvena Zvezda",
    away_team: "Ferencváros",
    home_score: 4,
    away_score: 1,
    season: "2022/23"
  },
  {
    city: "Budapest",
    country: "Magyarország",
    lat: 47.4556,
    lng: 19.0919,
    competition: "EL",
    round: "Csoport",
    leg: "4. mérkőzés",
    date: "2022-10-13",
    home_team: "Ferencváros",
    away_team: "Crvena Zvezda",
    home_score: 2,
    away_score: 1,
    season: "2022/23"
  },
  {
    city: "Budapest",
    country: "Magyarország",
    lat: 47.4556,
    lng: 19.0919,
    competition: "EL",
    round: "Csoport",
    leg: "5. mérkőzés",
    date: "2022-10-27",
    home_team: "Ferencváros",
    away_team: "AS Monaco",
    home_score: 1,
    away_score: 1,
    season: "2022/23"
  },
  {
    city: "Trabzon",
    country: "Törökország",
    lat: 41.0015,
    lng: 39.7178,
    competition: "EL",
    round: "Csoport",
    leg: "6. mérkőzés",
    date: "2022-11-03",
    home_team: "Trabzonspor",
    away_team: "Ferencváros",
    home_score: 1,
    away_score: 0,
    season: "2022/23"
  },

  // ── 2022/23 · Europa League – R16 ────────────────────────────────────────

  // R16 – Bayer Leverkusen (Németország)
  {
    city: "Leverkusen",
    country: "Németország",
    lat: 51.0388,
    lng: 6.9875,
    competition: "EL",
    round: "R16",
    leg: "Odavágó",
    date: "2023-03-09",
    home_team: "Bayer Leverkusen",
    away_team: "Ferencváros",
    home_score: 2,
    away_score: 0,
    season: "2022/23"
  },
  // Visszavágó – Puskás Aréna (50 675 néző)
  {
    city: "Budapest",
    country: "Magyarország",
    lat: 47.5013,
    lng: 19.0514,
    competition: "EL",
    round: "R16",
    leg: "Visszavágó",
    date: "2023-03-16",
    home_team: "Ferencváros",
    away_team: "Bayer Leverkusen",
    home_score: 0,
    away_score: 2,
    season: "2022/23"
  },

  // ── 2023/24 · Bajnokok Ligája selejtező ─────────────────────────────────

  // Q1 – KÍ Klaksvík (Feröer-szigetek)
  {
    city: "Klaksvík",
    country: "Feröer-szigetek",
    lat: 62.2266,
    lng: -6.5890,
    competition: "BL",
    round: "Q1",
    leg: "Odavágó",
    date: "2023-07-11",
    home_team: "KÍ Klaksvík",
    away_team: "Ferencváros",
    home_score: 0,
    away_score: 0,
    season: "2023/24"
  },
  {
    city: "Budapest",
    country: "Magyarország",
    lat: 47.4556,
    lng: 19.0919,
    competition: "BL",
    round: "Q1",
    leg: "Visszavágó",
    date: "2023-07-19",
    home_team: "Ferencváros",
    away_team: "KÍ Klaksvík",
    home_score: 0,
    away_score: 3,
    season: "2023/24"
  },

  // ── 2023/24 · Konferencia Liga selejtező ────────────────────────────────

  // Q2 – Shamrock Rovers (Írország)
  {
    city: "Budapest",
    country: "Magyarország",
    lat: 47.4556,
    lng: 19.0919,
    competition: "ECL",
    round: "Q2",
    leg: "Odavágó",
    date: "2023-07-27",
    home_team: "Ferencváros",
    away_team: "Shamrock Rovers",
    home_score: 4,
    away_score: 0,
    season: "2023/24"
  },
  {
    city: "Dublin",
    country: "Írország",
    lat: 53.2856,
    lng: -6.3701,
    competition: "ECL",
    round: "Q2",
    leg: "Visszavágó",
    date: "2023-08-03",
    home_team: "Shamrock Rovers",
    away_team: "Ferencváros",
    home_score: 0,
    away_score: 2,
    season: "2023/24"
  },

  // Q3 – Hamrun Spartans (Málta) – Ta'Qali stadion
  {
    city: "Ta'Qali",
    country: "Málta",
    lat: 35.8885,
    lng: 14.3264,
    competition: "ECL",
    round: "Q3",
    leg: "Odavágó",
    date: "2023-08-10",
    home_team: "Hamrun Spartans",
    away_team: "Ferencváros",
    home_score: 1,
    away_score: 6,
    season: "2023/24"
  },
  {
    city: "Budapest",
    country: "Magyarország",
    lat: 47.4556,
    lng: 19.0919,
    competition: "ECL",
    round: "Q3",
    leg: "Visszavágó",
    date: "2023-08-17",
    home_team: "Ferencváros",
    away_team: "Hamrun Spartans",
    home_score: 2,
    away_score: 1,
    season: "2023/24"
  },

  // PO – Žalgiris Vilnius (Litvánia)
  {
    city: "Vilnius",
    country: "Litvánia",
    lat: 54.7227,
    lng: 25.3342,
    competition: "ECL",
    round: "PO",
    leg: "Odavágó",
    date: "2023-08-24",
    home_team: "Žalgiris Vilnius",
    away_team: "Ferencváros",
    home_score: 0,
    away_score: 4,
    season: "2023/24"
  },
  {
    city: "Budapest",
    country: "Magyarország",
    lat: 47.4556,
    lng: 19.0919,
    competition: "ECL",
    round: "PO",
    leg: "Visszavágó",
    date: "2023-08-31",
    home_team: "Ferencváros",
    away_team: "Žalgiris Vilnius",
    home_score: 3,
    away_score: 0,
    season: "2023/24"
  },

  // ── 2023/24 · Konferencia Liga csoportkör ───────────────────────────────

  {
    city: "Budapest",
    country: "Magyarország",
    lat: 47.4556,
    lng: 19.0919,
    competition: "ECL",
    round: "Csoport",
    leg: "1. mérkőzés",
    date: "2023-09-21",
    home_team: "Ferencváros",
    away_team: "Čukarički",
    home_score: 3,
    away_score: 1,
    season: "2023/24"
  },
  {
    city: "Firenze",
    country: "Olaszország",
    lat: 43.7808,
    lng: 11.2489,
    competition: "ECL",
    round: "Csoport",
    leg: "2. mérkőzés",
    date: "2023-10-05",
    home_team: "Fiorentina",
    away_team: "Ferencváros",
    home_score: 2,
    away_score: 2,
    season: "2023/24"
  },
  {
    city: "Genk",
    country: "Belgium",
    lat: 50.9726,
    lng: 5.5332,
    competition: "ECL",
    round: "Csoport",
    leg: "3. mérkőzés",
    date: "2023-10-26",
    home_team: "KRC Genk",
    away_team: "Ferencváros",
    home_score: 0,
    away_score: 0,
    season: "2023/24"
  },
  {
    city: "Budapest",
    country: "Magyarország",
    lat: 47.4556,
    lng: 19.0919,
    competition: "ECL",
    round: "Csoport",
    leg: "4. mérkőzés",
    date: "2023-11-09",
    home_team: "Ferencváros",
    away_team: "KRC Genk",
    home_score: 1,
    away_score: 1,
    season: "2023/24"
  },
  {
    city: "Leskovac",
    country: "Szerbia",
    lat: 42.9981,
    lng: 21.9461,
    competition: "ECL",
    round: "Csoport",
    leg: "5. mérkőzés",
    date: "2023-11-30",
    home_team: "Čukarički",
    away_team: "Ferencváros",
    home_score: 1,
    away_score: 2,
    season: "2023/24"
  },
  {
    city: "Budapest",
    country: "Magyarország",
    lat: 47.4556,
    lng: 19.0919,
    competition: "ECL",
    round: "Csoport",
    leg: "6. mérkőzés",
    date: "2023-12-14",
    home_team: "Ferencváros",
    away_team: "Fiorentina",
    home_score: 1,
    away_score: 1,
    season: "2023/24"
  },

  // ── 2023/24 · Konferencia Liga KO Play-off ──────────────────────────────

  // KO PO – Olympiacos (Görögország)
  {
    city: "Pireusz",
    country: "Görögország",
    lat: 37.9416,
    lng: 23.6703,
    competition: "ECL",
    round: "KO PO",
    leg: "Odavágó",
    date: "2024-02-15",
    home_team: "Olympiacos",
    away_team: "Ferencváros",
    home_score: 1,
    away_score: 0,
    season: "2023/24"
  },
  {
    city: "Budapest",
    country: "Magyarország",
    lat: 47.4556,
    lng: 19.0919,
    competition: "ECL",
    round: "KO PO",
    leg: "Visszavágó",
    date: "2024-02-22",
    home_team: "Ferencváros",
    away_team: "Olympiacos",
    home_score: 0,
    away_score: 1,
    season: "2023/24"
  },

  // ── 2024/25 · Bajnokok Ligája selejtező ─────────────────────────────────

  // Q2 – The New Saints (Wales) – Oswestryben játszottak
  {
    city: "Budapest",
    country: "Magyarország",
    lat: 47.4556,
    lng: 19.0919,
    competition: "BL",
    round: "Q2",
    leg: "1. mérkőzés",
    date: "2024-07-23",
    home_team: "Ferencváros",
    away_team: "The New Saints",
    home_score: 5,
    away_score: 0,
    season: "2024/25"
  },
  {
    city: "Oswestry",
    country: "Anglia",
    lat: 52.8608,
    lng: -3.0536,
    competition: "BL",
    round: "Q2",
    leg: "2. mérkőzés",
    date: "2024-07-30",
    home_team: "The New Saints",
    away_team: "Ferencváros",
    home_score: 1,
    away_score: 2,
    season: "2024/25"
  },

  // Q3 – FC Midtjylland (Dánia)
  {
    city: "Herning",
    country: "Dánia",
    lat: 56.1394,
    lng: 8.9764,
    competition: "BL",
    round: "Q3",
    leg: "1. mérkőzés",
    date: "2024-08-06",
    home_team: "Midtjylland",
    away_team: "Ferencváros",
    home_score: 2,
    away_score: 0,
    season: "2024/25"
  },
  {
    city: "Budapest",
    country: "Magyarország",
    lat: 47.4556,
    lng: 19.0919,
    competition: "BL",
    round: "Q3",
    leg: "2. mérkőzés",
    date: "2024-08-13",
    home_team: "Ferencváros",
    away_team: "Midtjylland",
    home_score: 1,
    away_score: 1,
    season: "2024/25"
  },

  // ── 2024/25 · Európa Liga Play-off (selejtező) ─────────────────────────

  // PO – Borac Banja Luka (Bosznia-Hercegovina)
  {
    city: "Budapest",
    country: "Magyarország",
    lat: 47.4556,
    lng: 19.0919,
    competition: "EL",
    round: "PO",
    leg: "1. mérkőzés",
    date: "2024-08-22",
    home_team: "Ferencváros",
    away_team: "Borac Banja Luka",
    home_score: 0,
    away_score: 0,
    season: "2024/25"
  },
  {
    city: "Banja Luka",
    country: "Bosznia-Hercegovina",
    lat: 44.7722,
    lng: 17.1910,
    competition: "EL",
    round: "PO",
    leg: "2. mérkőzés",
    date: "2024-08-29",
    home_team: "Borac Banja Luka",
    away_team: "Ferencváros",
    home_score: 1,
    away_score: 1,
    season: "2024/25"
  },

  // ── 2024/25 · Európa Liga ligaszakasz ───────────────────────────────────

  {
    city: "Brüsszel",
    country: "Belgium",
    lat: 50.8341,
    lng: 4.2984,
    competition: "EL",
    round: "Ligaszakasz",
    leg: "1. forduló",
    date: "2024-09-25",
    home_team: "Anderlecht",
    away_team: "Ferencváros",
    home_score: 2,
    away_score: 1,
    season: "2024/25"
  },
  {
    city: "Budapest",
    country: "Magyarország",
    lat: 47.4556,
    lng: 19.0919,
    competition: "EL",
    round: "Ligaszakasz",
    leg: "2. forduló",
    date: "2024-10-03",
    home_team: "Ferencváros",
    away_team: "Tottenham",
    home_score: 1,
    away_score: 2,
    season: "2024/25"
  },
  {
    city: "Budapest",
    country: "Magyarország",
    lat: 47.4556,
    lng: 19.0919,
    competition: "EL",
    round: "Ligaszakasz",
    leg: "3. forduló",
    date: "2024-10-24",
    home_team: "Ferencváros",
    away_team: "Nice",
    home_score: 1,
    away_score: 0,
    season: "2024/25"
  },
  // Dinamo Kijev „hazai" meccse Hamburgban (semleges pálya, háború miatt)
  {
    city: "Hamburg",
    country: "Németország",
    lat: 53.5871,
    lng: 9.8994,
    competition: "EL",
    round: "Ligaszakasz",
    leg: "4. forduló",
    date: "2024-11-07",
    home_team: "Dinamo Kijev",
    away_team: "Ferencváros",
    home_score: 0,
    away_score: 4,
    season: "2024/25"
  },
  {
    city: "Budapest",
    country: "Magyarország",
    lat: 47.4556,
    lng: 19.0919,
    competition: "EL",
    round: "Ligaszakasz",
    leg: "5. forduló",
    date: "2024-11-28",
    home_team: "Ferencváros",
    away_team: "Malmö FF",
    home_score: 4,
    away_score: 1,
    season: "2024/25"
  },
  {
    city: "Thesszaloniki",
    country: "Görögország",
    lat: 40.6132,
    lng: 22.9725,
    competition: "EL",
    round: "Ligaszakasz",
    leg: "6. forduló",
    date: "2024-12-12",
    home_team: "PAOK",
    away_team: "Ferencváros",
    home_score: 5,
    away_score: 0,
    season: "2024/25"
  },
  {
    city: "Frankfurt",
    country: "Németország",
    lat: 50.0685,
    lng: 8.6455,
    competition: "EL",
    round: "Ligaszakasz",
    leg: "7. forduló",
    date: "2025-01-23",
    home_team: "Eintracht Frankfurt",
    away_team: "Ferencváros",
    home_score: 2,
    away_score: 0,
    season: "2024/25"
  },
  {
    city: "Budapest",
    country: "Magyarország",
    lat: 47.4556,
    lng: 19.0919,
    competition: "EL",
    round: "Ligaszakasz",
    leg: "8. forduló",
    date: "2025-01-30",
    home_team: "Ferencváros",
    away_team: "AZ Alkmaar",
    home_score: 4,
    away_score: 3,
    season: "2024/25"
  },

  // ── 2024/25 · Európa Liga KO Play-off ──────────────────────────────────

  // KO PO – Viktoria Plzeň (Csehország)
  {
    city: "Budapest",
    country: "Magyarország",
    lat: 47.4556,
    lng: 19.0919,
    competition: "EL",
    round: "KO PO",
    leg: "1. mérkőzés",
    date: "2025-02-13",
    home_team: "Ferencváros",
    away_team: "Viktoria Plzeň",
    home_score: 1,
    away_score: 0,
    season: "2024/25"
  },
  {
    city: "Plzeň",
    country: "Csehország",
    lat: 49.7474,
    lng: 13.3776,
    competition: "EL",
    round: "KO PO",
    leg: "2. mérkőzés",
    date: "2025-02-20",
    home_team: "Viktoria Plzeň",
    away_team: "Ferencváros",
    home_score: 3,
    away_score: 0,
    season: "2024/25"
  },

  // ── 2025/26 · Bajnokok Ligája selejtező ─────────────────────────────────

  // Q2 – FC Noah (Örményország) – Abovjanban játszottak
  {
    city: "Aboviyan",
    country: "Örményország",
    lat: 40.2696,
    lng: 44.6245,
    competition: "BL",
    round: "Q2",
    leg: "Odavágó",
    date: "2025-07-22",
    home_team: "FC Noah",
    away_team: "Ferencváros",
    home_score: 1,
    away_score: 2,
    season: "2025/26"
  },
  {
    city: "Budapest",
    country: "Magyarország",
    lat: 47.4556,
    lng: 19.0919,
    competition: "BL",
    round: "Q2",
    leg: "Visszavágó",
    date: "2025-07-30",
    home_team: "Ferencváros",
    away_team: "FC Noah",
    home_score: 4,
    away_score: 3,
    season: "2025/26"
  },

  // Q3 – Ludogorec (Bulgária)
  {
    city: "Razgrad",
    country: "Bulgária",
    lat: 43.5275,
    lng: 26.5240,
    competition: "BL",
    round: "Q3",
    leg: "Odavágó",
    date: "2025-08-06",
    home_team: "Ludogorec",
    away_team: "Ferencváros",
    home_score: 0,
    away_score: 0,
    season: "2025/26"
  },
  {
    city: "Budapest",
    country: "Magyarország",
    lat: 47.4556,
    lng: 19.0919,
    competition: "BL",
    round: "Q3",
    leg: "Visszavágó",
    date: "2025-08-12",
    home_team: "Ferencváros",
    away_team: "Ludogorec",
    home_score: 3,
    away_score: 0,
    season: "2025/26"
  },

  // PO – Qarabağ (Azerbajdzsán)
  {
    city: "Budapest",
    country: "Magyarország",
    lat: 47.4556,
    lng: 19.0919,
    competition: "BL",
    round: "PO",
    leg: "Odavágó",
    date: "2025-08-19",
    home_team: "Ferencváros",
    away_team: "Qarabağ",
    home_score: 1,
    away_score: 3,
    season: "2025/26"
  },
  {
    city: "Baku",
    country: "Azerbajdzsán",
    lat: 40.4093,
    lng: 49.8671,
    competition: "BL",
    round: "PO",
    leg: "Visszavágó",
    date: "2025-08-27",
    home_team: "Qarabağ",
    away_team: "Ferencváros",
    home_score: 2,
    away_score: 3,
    season: "2025/26"
  },

  // ── 2025/26 · Európa Liga ligaszakasz ───────────────────────────────────

  {
    city: "Budapest",
    country: "Magyarország",
    lat: 47.4556,
    lng: 19.0919,
    competition: "EL",
    round: "Ligaszakasz",
    leg: "1. forduló",
    date: "2025-09-25",
    home_team: "Ferencváros",
    away_team: "Viktoria Plzeň",
    home_score: 1,
    away_score: 1,
    season: "2025/26"
  },
  {
    city: "Genk",
    country: "Belgium",
    lat: 50.9726,
    lng: 5.5332,
    competition: "EL",
    round: "Ligaszakasz",
    leg: "2. forduló",
    date: "2025-10-02",
    home_team: "KRC Genk",
    away_team: "Ferencváros",
    home_score: 0,
    away_score: 1,
    season: "2025/26"
  },
  {
    city: "Salzburg",
    country: "Ausztria",
    lat: 47.8162,
    lng: 13.0465,
    competition: "EL",
    round: "Ligaszakasz",
    leg: "3. forduló",
    date: "2025-10-23",
    home_team: "RB Salzburg",
    away_team: "Ferencváros",
    home_score: 2,
    away_score: 3,
    season: "2025/26"
  },
  {
    city: "Budapest",
    country: "Magyarország",
    lat: 47.4556,
    lng: 19.0919,
    competition: "EL",
    round: "Ligaszakasz",
    leg: "4. forduló",
    date: "2025-11-06",
    home_team: "Ferencváros",
    away_team: "Ludogorec",
    home_score: 3,
    away_score: 1,
    season: "2025/26"
  },
  {
    city: "Isztambul",
    country: "Törökország",
    lat: 41.0082,
    lng: 28.9784,
    competition: "EL",
    round: "Ligaszakasz",
    leg: "5. forduló",
    date: "2025-11-27",
    home_team: "Fenerbahçe",
    away_team: "Ferencváros",
    home_score: 1,
    away_score: 1,
    season: "2025/26"
  },
  {
    city: "Budapest",
    country: "Magyarország",
    lat: 47.4556,
    lng: 19.0919,
    competition: "EL",
    round: "Ligaszakasz",
    leg: "6. forduló",
    date: "2025-12-11",
    home_team: "Ferencváros",
    away_team: "Glasgow Rangers",
    home_score: 2,
    away_score: 1,
    season: "2025/26"
  },
  {
    city: "Budapest",
    country: "Magyarország",
    lat: 47.4556,
    lng: 19.0919,
    competition: "EL",
    round: "Ligaszakasz",
    leg: "7. forduló",
    date: "2026-01-22",
    home_team: "Ferencváros",
    away_team: "Panathinaikosz",
    home_score: 1,
    away_score: 1,
    season: "2025/26"
  },
  {
    city: "Nottingham",
    country: "Anglia",
    lat: 52.9540,
    lng: -1.1326,
    competition: "EL",
    round: "Ligaszakasz",
    leg: "8. forduló",
    date: "2026-01-29",
    home_team: "Nottingham Forest",
    away_team: "Ferencváros",
    home_score: 4,
    away_score: 0,
    season: "2025/26"
  },

  // ── 2025/26 · Európa Liga KO Play-off ──────────────────────────────────

  // KO PO – Ludogorec (Bulgária)
  {
    city: "Razgrad",
    country: "Bulgária",
    lat: 43.5275,
    lng: 26.5240,
    competition: "EL",
    round: "KO PO",
    leg: "Odavágó",
    date: "2026-02-19",
    home_team: "Ludogorec",
    away_team: "Ferencváros",
    home_score: 2,
    away_score: 1,
    season: "2025/26"
  },
  {
    city: "Budapest",
    country: "Magyarország",
    lat: 47.4556,
    lng: 19.0919,
    competition: "EL",
    round: "KO PO",
    leg: "Visszavágó",
    date: "2026-02-26",
    home_team: "Ferencváros",
    away_team: "Ludogorec",
    home_score: 2,
    away_score: 0,
    season: "2025/26"
  },

  // ── 2025/26 · Európa Liga nyolcaddöntő ─────────────────────────────────

  // R16 – SC Braga (Portugália)
  {
    city: "Budapest",
    country: "Magyarország",
    lat: 47.4556,
    lng: 19.0919,
    competition: "EL",
    round: "R16",
    leg: "Odavágó",
    date: "2026-03-12",
    home_team: "Ferencváros",
    away_team: "SC Braga",
    home_score: 2,
    away_score: 0,
    season: "2025/26"
  },
  {
    city: "Braga",
    country: "Portugália",
    lat: 41.5454,
    lng: -8.4265,
    competition: "EL",
    round: "R16",
    leg: "Visszavágó",
    date: "2026-03-18",
    home_team: "SC Braga",
    away_team: "Ferencváros",
    home_score: 4,
    away_score: 0,
    season: "2025/26"
  },

];

window.MATCHES = MATCHES;
