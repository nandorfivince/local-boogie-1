// Dummy tesztadatok fejlesztéshez — Gábor majd felülírja a valódi adatokkal
const MATCHES = [
  // BL meccsek — Zágráb (2 meccs, egy városban)
  {
    city: "Zágráb",
    country: "Horvátország",
    lat: 45.8150,
    lng: 15.9819,
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
  // EL meccs — Barcelona
  {
    city: "Barcelona",
    country: "Spanyolország",
    lat: 41.3874,
    lng: 2.1686,
    competition: "EL",
    round: "Csoport",
    leg: "1. mérkőzés",
    date: "2019-10-24",
    home_team: "Espanyol",
    away_team: "Ferencváros",
    home_score: 1,
    away_score: 1,
    season: "2019/20"
  },
  // ECL meccs — Firenze
  {
    city: "Firenze",
    country: "Olaszország",
    lat: 43.7696,
    lng: 11.2558,
    competition: "ECL",
    round: "Csoport",
    leg: "1. mérkőzés",
    date: "2023-10-05",
    home_team: "Fiorentina",
    away_team: "Ferencváros",
    home_score: 2,
    away_score: 3,
    season: "2023/24"
  },
  // Vegyes város — Glasgow (BL + ECL)
  {
    city: "Glasgow",
    country: "Skócia",
    lat: 55.8497,
    lng: -4.2539,
    competition: "BL",
    round: "Q2",
    leg: "Visszavágó",
    date: "2020-08-26",
    home_team: "Celtic",
    away_team: "Ferencváros",
    home_score: 1,
    away_score: 2,
    season: "2020/21"
  },
  {
    city: "Glasgow",
    country: "Skócia",
    lat: 55.8497,
    lng: -4.2539,
    competition: "EL",
    round: "Csoport",
    leg: "1. mérkőzés",
    date: "2021-10-19",
    home_team: "Celtic",
    away_team: "Ferencváros",
    home_score: 2,
    away_score: 0,
    season: "2021/22"
  },
  // Budapest — Groupama Aréna
  {
    city: "Budapest",
    country: "Magyarország",
    lat: 47.4556,
    lng: 19.0919,
    competition: "BL",
    round: "Csoport",
    leg: "1. mérkőzés",
    date: "2020-11-04",
    home_team: "Ferencváros",
    away_team: "Dinamo Kyiv",
    home_score: 2,
    away_score: 2,
    season: "2020/21"
  },
  // Budapest — Puskás Aréna
  {
    city: "Budapest",
    country: "Magyarország",
    lat: 47.5013,
    lng: 19.0514,
    competition: "BL",
    round: "Csoport",
    leg: "1. mérkőzés",
    date: "2020-12-02",
    home_team: "Ferencváros",
    away_team: "Barcelona",
    home_score: 0,
    away_score: 3,
    season: "2020/21"
  }
];
