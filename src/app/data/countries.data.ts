import { CountryCode } from "../interfaces/iso-3166.interface"

export interface Country {
  code: CountryCode

  name: string
  capital: string
  flag: string

  population: number
}

export const CountriesList: Country[] = [
  {
    code: "AF",
    name: "Afghanistan",
    flag: "af.svg",
    capital: "Kabul",
    population: 32890171,
  },
  {
    code: "AL",
    name: "Albania",
    flag: "al.svg",
    capital: "Tirana",
    population: 2829741,
  },
  {
    code: "DZ",
    name: "Algeria",
    flag: "dz.svg",
    capital: "Algiers",
    population: 45400000,
  },
  {
    code: "AS",
    name: "American Samoa",
    flag: "as.svg",
    capital: "Pago Pago",
    population: 49710,
  },
  {
    code: "AD",
    name: "Andorra",
    flag: "ad.svg",
    capital: "Andorra la Vella",
    population: 79535,
  },
  {
    code: "AO",
    name: "Angola",
    flag: "ao.svg",
    capital: "Luanda",
    population: 32097671,
  },
  {
    code: "AI",
    name: "Anguilla",
    flag: "ai.svg",
    capital: "The Valley",
    population: 15000,
  },
  {
    code: "AG",
    name: "Antigua and Barbuda",
    flag: "ag.svg",
    capital: "Saint John's",
    population: 99337,
  },
  {
    code: "AR",
    name: "Argentina",
    flag: "ar.svg",
    capital: "Buenos Aires",
    population: 45808747,
  },
  {
    code: "AM",
    name: "Armenia",
    flag: "am.svg",
    capital: "Yerevan",
    population: 2963900,
  },
  {
    code: "AW",
    name: "Aruba",
    flag: "aw.svg",
    capital: "Oranjestad",
    population: 111050,
  },
  {
    code: "AU",
    name: "Australia",
    flag: "au.svg",
    capital: "Canberra",
    population: 25996591,
  },
  {
    code: "AT",
    name: "Austria",
    flag: "at.svg",
    capital: "Vienna",
    population: 9027999,
  },
  {
    code: "AZ",
    name: "Azerbaijan",
    flag: "az.svg",
    capital: "Baku",
    population: 10164464,
  },
  {
    code: "AX",
    name: "Aland Islands",
    flag: "ax.svg",
    capital: "Mariehamn",
    population: 30344,
  },
  {
    code: "BS",
    name: "Bahamas",
    flag: "bs.svg",
    capital: "Nassau",
    population: 393450,
  },
  {
    code: "BH",
    name: "Bahrain",
    flag: "bh.svg",
    capital: "Manama",
    population: 1501635,
  },
  {
    code: "BD",
    name: "Bangladesh",
    flag: "bd.svg",
    capital: "Dhaka",
    population: 172703940,
  },
  {
    code: "BB",
    name: "Barbados",
    flag: "bb.svg",
    capital: "Bridgetown",
    population: 288000,
  },
  {
    code: "BY",
    name: "Belarus",
    flag: "by.svg",
    capital: "Minsk",
    population: 9349645,
  },
  {
    code: "BE",
    name: "Belgium",
    flag: "be.svg",
    capital: "Brussels",
    population: 11629213,
  },
  {
    code: "BZ",
    name: "Belize",
    flag: "bz.svg",
    capital: "Belmopan",
    population: 430191,
  },
  {
    code: "BJ",
    name: "Benin",
    flag: "bj.svg",
    capital: "Porto-Novo",
    population: 12506347,
  },
  {
    code: "BM",
    name: "Bermuda",
    flag: "bm.svg",
    capital: "Hamilton",
    population: 64055,
  },
  {
    code: "BT",
    name: "Bhutan",
    flag: "bt.svg",
    capital: "Thimphu",
    population: 763200,
  },
  {
    code: "BO",
    name: "Bolivia",
    flag: "bo.svg",
    capital: "Sucre",
    population: 11797257,
  },
  {
    code: "BA",
    name: "Bosnia and Herzegovina",
    flag: "ba.svg",
    capital: "Sarajevo",
    population: 3320954,
  },
  {
    code: "BW",
    name: "Botswana",
    flag: "bw.svg",
    capital: "Gaborone",
    population: 2410338,
  },
  {
    code: "BR",
    name: "Brazil",
    flag: "br.svg",
    capital: "Brasilia",
    population: 214621424,
  },
  {
    code: "BN",
    name: "Brunei",
    flag: "bn.svg",
    capital: "Bandar Seri Begawan",
    population: 429999,
  },
  {
    code: "BG",
    name: "Bulgaria",
    flag: "bg.svg",
    capital: "Sofia",
    population: 6520314,
  },
  {
    code: "BF",
    name: "Burkina Faso",
    flag: "bf.svg",
    capital: "Ouagadougou",
    population: 21510181,
  },
  {
    code: "BI",
    name: "Burundi",
    flag: "bi.svg",
    capital: "Bujumbura",
    population: 12574571,
  },
  {
    code: "CV",
    name: "Cabo Verde",
    flag: "cv.svg",
    capital: "Praia",
    population: 563198,
  },
  {
    code: "KH",
    name: "Cambodia",
    flag: "kh.svg",
    capital: "Phnom Penh",
    population: 15552211,
  },
  {
    code: "CM",
    name: "Cameroon",
    flag: "cm.svg",
    capital: "Yaounde",
    population: 24348251,
  },
  {
    code: "CA",
    name: "Canada",
    flag: "ca.svg",
    capital: "Ottawa",
    population: 38682171,
  },
  {
    code: "KY",
    name: "Cayman Islands",
    flag: "ky.svg",
    capital: "George Town",
    population: 65786,
  },
  {
    code: "CF",
    name: "Central African Republic",
    flag: "cf.svg",
    capital: "Bangui",
    population: 5633412,
  },
  {
    code: "TD",
    name: "Chad",
    flag: "td.svg",
    capital: "N'Djamena",
    population: 16818391,
  },
  {
    code: "CL",
    name: "Chile",
    flag: "cl.svg",
    capital: "Santiago",
    population: 19678363,
  },
  {
    code: "CN",
    name: "China",
    flag: "cn.svg",
    capital: "Beijing",
    population: 1412600000,
  },
  {
    code: "CX",
    name: "Christmas Island",
    flag: "cx.svg",
    capital: "Flying Fish Cove",
    population: 1966,
  },
  {
    code: "CC",
    name: "Cocos Islands",
    flag: "cc.svg",
    capital: "West Island",
    population: 573,
  },
  {
    code: "CO",
    name: "Colombia",
    flag: "co.svg",
    capital: "Bogota",
    population: 51049498,
  },
  {
    code: "KM",
    name: "Comoros",
    flag: "km.svg",
    capital: "Moroni",
    population: 758316,
  },
  {
    code: "CD",
    name: "Congo (Democratic)",
    flag: "cd.svg",
    capital: "Kinshasa",
    population: 92378000,
  },
  {
    code: "CG",
    name: "Congo",
    flag: "cg.svg",
    capital: "Brazzaville",
    population: 5657000,
  },
  {
    code: "CK",
    name: "Cook Islands",
    flag: "ck.svg",
    capital: "Avarua",
    population: 15342,
  },
  {
    code: "CR",
    name: "Costa Rica",
    flag: "cr.svg",
    capital: "San Jose",
    population: 5163038,
  },
  {
    code: "HR",
    name: "Croatia",
    flag: "hr.svg",
    capital: "Zagreb",
    population: 3888529,
  },
  {
    code: "CU",
    name: "Cuba",
    flag: "cu.svg",
    capital: "Havana",
    population: 11181595,
  },
  {
    code: "CW",
    name: "Curacao",
    flag: "cw.svg",
    capital: "Willemstad",
    population: 153671,
  },
  {
    code: "CY",
    name: "Cyprus",
    flag: "cy.svg",
    capital: "Nicosia",
    population: 888005,
  },
  {
    code: "CZ",
    name: "Czechia",
    flag: "cz.svg",
    capital: "Prague",
    population: 10516707,
  },
  {
    code: "CI",
    name: "Cote d'Ivoire",
    flag: "ci.svg",
    capital: "Yamoussoukro",
    population: 27087732,
  },
  {
    code: "DK",
    name: "Denmark",
    flag: "dk.svg",
    capital: "Copenhagen",
    population: 5883562,
  },
  {
    code: "DJ",
    name: "Djibouti",
    flag: "dj.svg",
    capital: "Djibouti",
    population: 976107,
  },
  {
    code: "DM",
    name: "Dominica",
    flag: "dm.svg",
    capital: "Roseau",
    population: 72000,
  },
  {
    code: "DO",
    name: "Dominican Republic",
    flag: "do.svg",
    capital: "Santo Domingo",
    population: 10535535,
  },
  {
    code: "EC",
    name: "Ecuador",
    flag: "ec.svg",
    capital: "Quito",
    population: 17977244,
  },
  {
    code: "EG",
    name: "Egypt",
    flag: "eg.svg",
    capital: "Cairo",
    population: 103276825,
  },
  {
    code: "SV",
    name: "El Salvador",
    flag: "sv.svg",
    capital: "San Salvador",
    population: 6825935,
  },
  {
    code: "GQ",
    name: "Equatorial Guinea",
    flag: "gq.svg",
    capital: "Malabo",
    population: 1505588,
  },
  {
    code: "ER",
    name: "Eritrea",
    flag: "er.svg",
    capital: "Asmara",
    population: 3601000,
  },
  {
    code: "EE",
    name: "Estonia",
    flag: "ee.svg",
    capital: "Tallinn",
    population: 1330068,
  },
  {
    code: "SZ",
    name: "Eswatini",
    flag: "sz.svg",
    capital: "Lobamba",
    population: 1172000,
  },
  {
    code: "ET",
    name: "Ethiopia",
    flag: "et.svg",
    capital: "Addis Ababa",
    population: 117876000,
  },
  {
    code: "TL",
    name: "East Timor",
    flag: "tl.svg",
    capital: "Dili",
    population: 1317780,
  },
  {
    code: "FK",
    name: "Falkland Islands",
    flag: "fk.svg",
    capital: "Stanley",
    population: 4000,
  },
  {
    code: "FO",
    name: "Faroe Islands",
    flag: "fo.svg",
    capital: "Torshavn",
    population: 53792,
  },
  {
    code: "FJ",
    name: "Fiji",
    flag: "fj.svg",
    capital: "Suva",
    population: 898402,
  },
  {
    code: "FI",
    name: "Finland",
    flag: "fi.svg",
    capital: "Helsinki",
    population: 5550066,
  },
  {
    code: "FR",
    name: "France",
    flag: "fr.svg",
    capital: "Paris",
    population: 67841000,
  },
  {
    code: "GA",
    name: "Gabon",
    flag: "ga.svg",
    capital: "Libreville",
    population: 2233272,
  },
  {
    code: "GM",
    name: "Gambia",
    flag: "gm.svg",
    capital: "Banjul",
    population: 2487000,
  },
  {
    code: "GE",
    name: "Georgia",
    flag: "ge.svg",
    capital: "Tbilisi",
    population: 3728573,
  },
  {
    code: "DE",
    name: "Germany",
    flag: "de.svg",
    capital: "Berlin",
    population: 83222442,
  },
  {
    code: "GH",
    name: "Ghana",
    flag: "gh.svg",
    capital: "Accra",
    population: 30832019,
  },
  {
    code: "GI",
    name: "Gibraltar",
    flag: "gi.svg",
    capital: "Gibraltar",
    population: 34000,
  },
  {
    code: "GR",
    name: "Greece",
    flag: "gr.svg",
    capital: "Athens",
    population: 10678632,
  },
  {
    code: "GL",
    name: "Greenland",
    flag: "gl.svg",
    capital: "Nuuk",
    population: 56562,
  },
  {
    code: "GD",
    name: "Grenada",
    flag: "gd.svg",
    capital: "St. George's",
    population: 113000,
  },
  {
    code: "GU",
    name: "Guam",
    flag: "gu.svg",
    capital: "Hagatna",
    population: 153836,
  },
  {
    code: "GT",
    name: "Guatemala",
    flag: "gt.svg",
    capital: "Guatemala City",
    population: 17109746,
  },
  {
    code: "GG",
    name: "Guernsey",
    flag: "gg.svg",
    capital: "St. Peter Port",
    population: 63124,
  },
  {
    code: "GN",
    name: "Guinea",
    flag: "gn.svg",
    capital: "Conakry",
    population: 12907395,
  },
  {
    code: "GW",
    name: "Guinea-Bissau",
    flag: "gw.svg",
    capital: "Bissau",
    population: 1646077,
  },
  {
    code: "GY",
    name: "Guyana",
    flag: "gy.svg",
    capital: "Georgetown",
    population: 743699,
  },
  {
    code: "HT",
    name: "Haiti",
    flag: "ht.svg",
    capital: "Port-au-Prince",
    population: 11743017,
  },
  {
    code: "VA",
    name: "Holy See",
    flag: "va.svg",
    capital: "Vatican City",
    population: 825,
  },
  {
    code: "HN",
    name: "Honduras",
    flag: "hn.svg",
    capital: "Tegucigalpa",
    population: 9546178,
  },
  {
    code: "HK",
    name: "Hong Kong",
    flag: "hk.svg",
    capital: "City of Victoria",
    population: 7403100,
  },
  {
    code: "HU",
    name: "Hungary",
    flag: "hu.svg",
    capital: "Budapest",
    population: 9689000,
  },
  {
    code: "IS",
    name: "Iceland",
    flag: "is.svg",
    capital: "Reykjavik",
    population: 377280,
  },
  {
    code: "IN",
    name: "India",
    flag: "in.svg",
    capital: "New Delhi",
    population: 1376210800,
  },
  {
    code: "ID",
    name: "Indonesia",
    flag: "id.svg",
    capital: "Jakarta",
    population: 272248500,
  },
  {
    code: "IR",
    name: "Iran",
    flag: "ir.svg",
    capital: "Tehran",
    population: 85431778,
  },
  {
    code: "IQ",
    name: "Iraq",
    flag: "iq.svg",
    capital: "Baghdad",
    population: 41190700,
  },
  {
    code: "IE",
    name: "Ireland",
    flag: "ie.svg",
    capital: "Dublin",
    population: 5011500,
  },
  {
    code: "IM",
    name: "Isle of Man",
    flag: "im.svg",
    capital: "Douglas",
    population: 84069,
  },
  {
    code: "IL",
    name: "Israel",
    flag: "il.svg",
    capital: "Jerusalem",
    population: 9515420,
  },
  {
    code: "IT",
    name: "Italy",
    flag: "it.svg",
    capital: "Rome",
    population: 58929360,
  },
  {
    code: "JM",
    name: "Jamaica",
    flag: "jm.svg",
    capital: "Kingston",
    population: 2734093,
  },
  {
    code: "JP",
    name: "Japan",
    flag: "jp.svg",
    capital: "Tokyo",
    population: 125502000,
  },
  {
    code: "JE",
    name: "Jersey",
    flag: "je.svg",
    capital: "Saint Helier",
    population: 107800,
  },
  {
    code: "JO",
    name: "Jordan",
    flag: "jo.svg",
    capital: "Amman",
    population: 11206876,
  },
  {
    code: "KZ",
    name: "Kazakhstan",
    flag: "kz.svg",
    capital: "Astana",
    population: 19220800,
  },
  {
    code: "KE",
    name: "Kenya",
    flag: "ke.svg",
    capital: "Nairobi",
    population: 47564296,
  },
  {
    code: "KI",
    name: "Kiribati",
    flag: "ki.svg",
    capital: "South Tarawa",
    population: 120740,
  },
  {
    code: "KW",
    name: "Kuwait",
    flag: "kw.svg",
    capital: "Kuwait City",
    population: 4670713,
  },
  {
    code: "KG",
    name: "Kyrgyzstan",
    flag: "kg.svg",
    capital: "Bishkek",
    population: 6700000,
  },
  {
    code: "LA",
    name: "Laos",
    flag: "la.svg",
    capital: "Vientiane",
    population: 7337783,
  },
  {
    code: "LV",
    name: "Latvia",
    flag: "lv.svg",
    capital: "Riga",
    population: 1874900,
  },
  {
    code: "LB",
    name: "Lebanon",
    flag: "lb.svg",
    capital: "Beirut",
    population: 6769000,
  },
  {
    code: "LS",
    name: "Lesotho",
    flag: "ls.svg",
    capital: "Maseru",
    population: 2159000,
  },
  {
    code: "LR",
    name: "Liberia",
    flag: "lr.svg",
    capital: "Monrovia",
    population: 4661010,
  },
  {
    code: "LY",
    name: "Libya",
    flag: "ly.svg",
    capital: "Tripoli",
    population: 6959000,
  },
  {
    code: "LI",
    name: "Liechtenstein",
    flag: "li.svg",
    capital: "Vaduz",
    population: 39315,
  },
  {
    code: "LT",
    name: "Lithuania",
    flag: "lt.svg",
    capital: "Vilnius",
    population: 2794961,
  },
  {
    code: "LU",
    name: "Luxembourg",
    flag: "lu.svg",
    capital: "Luxembourg",
    population: 645397,
  },
  {
    code: "MG",
    name: "Madagascar",
    flag: "mg.svg",
    capital: "Antananarivo",
    population: 26923353,
  },
  {
    code: "MW",
    name: "Malawi",
    flag: "mw.svg",
    capital: "Lilongwe",
    population: 18898441,
  },
  {
    code: "MY",
    name: "Malaysia",
    flag: "my.svg",
    capital: "Kuala Lumpur",
    population: 32714800,
  },
  {
    code: "MV",
    name: "Maldives",
    flag: "mv.svg",
    capital: "Male",
    population: 383135,
  },
  {
    code: "ML",
    name: "Mali",
    flag: "ml.svg",
    capital: "Bamako",
    population: 20856000,
  },
  {
    code: "MT",
    name: "Malta",
    flag: "mt.svg",
    capital: "Valletta",
    population: 514564,
  },
  {
    code: "MH",
    name: "Marshall Islands",
    flag: "mh.svg",
    capital: "Majuro",
    population: 54516,
  },
  {
    code: "MR",
    name: "Mauritania",
    flag: "mr.svg",
    capital: "Nouakchott",
    population: 4271197,
  },
  {
    code: "MU",
    name: "Mauritius",
    flag: "mu.svg",
    capital: "Port Louis",
    population: 1266334,
  },
  {
    code: "MX",
    name: "Mexico",
    flag: "mx.svg",
    capital: "Mexico City",
    population: 127996051,
  },
  {
    code: "FM",
    name: "Micronesia",
    flag: "fm.svg",
    capital: "Palikir",
    population: 105754,
  },
  {
    code: "MD",
    name: "Moldova",
    flag: "md.svg",
    capital: "Chisinau",
    population: 2597100,
  },
  {
    code: "MC",
    name: "Monaco",
    flag: "mc.svg",
    capital: "Monaco",
    population: 39150,
  },
  {
    code: "MN",
    name: "Mongolia",
    flag: "mn.svg",
    capital: "Ulan Bator",
    population: 3436794,
  },
  {
    code: "ME",
    name: "Montenegro",
    flag: "me.svg",
    capital: "Podgorica",
    population: 621306,
  },
  {
    code: "MS",
    name: "Montserrat",
    flag: "ms.svg",
    capital: "Plymouth",
    population: 5000,
  },
  {
    code: "MA",
    name: "Morocco",
    flag: "ma.svg",
    capital: "Rabat",
    population: 36599214,
  },
  {
    code: "MZ",
    name: "Mozambique",
    flag: "mz.svg",
    capital: "Maputo",
    population: 30832244,
  },
  {
    code: "MM",
    name: "Myanmar",
    flag: "mm.svg",
    capital: "Naypyidaw",
    population: 55294979,
  },
  {
    code: "KP",
    name: "North Korea",
    flag: "kp.svg",
    capital: "Pyongyang",
    population: 25660000,
  },
  {
    code: "NA",
    name: "Namibia",
    flag: "na.svg",
    capital: "Windhoek",
    population: 2550226,
  },
  {
    code: "NR",
    name: "Nauru",
    flag: "nr.svg",
    capital: "Yaren",
    population: 11832,
  },
  {
    code: "NP",
    name: "Nepal",
    flag: "np.svg",
    capital: "Kathmandu",
    population: 29192480,
  },
  {
    code: "NL",
    name: "Netherlands",
    flag: "nl.svg",
    capital: "Amsterdam",
    population: 17720531,
  },
  {
    code: "NC",
    name: "New Caledonia",
    flag: "nc.svg",
    capital: "Noumea",
    population: 273674,
  },
  {
    code: "NZ",
    name: "New Zealand",
    flag: "nz.svg",
    capital: "Wellington",
    population: 5138284,
  },
  {
    code: "NI",
    name: "Nicaragua",
    flag: "ni.svg",
    capital: "Managua",
    population: 6595674,
  },
  {
    code: "NE",
    name: "Niger",
    flag: "ne.svg",
    capital: "Niamey",
    population: 24112753,
  },
  {
    code: "NG",
    name: "Nigeria",
    flag: "ng.svg",
    capital: "Abuja",
    population: 211400708,
  },
  {
    code: "NU",
    name: "Niue",
    flag: "nu.svg",
    capital: "Alofi",
    population: 1549,
  },
  {
    code: "NF",
    name: "Norfolk Island",
    flag: "nf.svg",
    capital: "Kingston",
    population: 1734,
  },
  {
    code: "MP",
    name: "Northern Mariana Islands",
    flag: "mp.svg",
    capital: "Saipan",
    population: 1832696,
  },
  {
    code: "NO",
    name: "Norway",
    flag: "no.svg",
    capital: "Oslo",
    population: 5425270,
  },
  {
    code: "MK",
    name: "North Macedonia",
    flag: "mk.svg",
    capital: "Skopje",
    population: 1832696,
  },
  {
    code: "OM",
    name: "Oman",
    flag: "om.svg",
    capital: "Muscat",
    population: 4527446,
  },
  {
    code: "PK",
    name: "Pakistan",
    flag: "pk.svg",
    capital: "Islamabad",
    population: 225199937,
  },
  {
    code: "PW",
    name: "Palau",
    flag: "pw.svg",
    capital: "Ngerulmud",
    population: 17957,
  },
  {
    code: "PS",
    name: "Palestine",
    flag: "ps.svg",
    capital: "Ramallah",
    population: 5227193,
  },
  {
    code: "PA",
    name: "Panama",
    flag: "pa.svg",
    capital: "Panama City",
    population: 4278500,
  },
  {
    code: "PG",
    name: "Papua New Guinea",
    flag: "pg.svg",
    capital: "Port Moresby",
    population: 9122994,
  },
  {
    code: "PY",
    name: "Paraguay",
    flag: "py.svg",
    capital: "Asuncion",
    population: 7353038,
  },
  {
    code: "PE",
    name: "Peru",
    flag: "pe.svg",
    capital: "Lima",
    population: 33035304,
  },
  {
    code: "PH",
    name: "Philippines",
    flag: "ph.svg",
    capital: "Manila",
    population: 111872888,
  },
  {
    code: "PN",
    name: "Pitcairn",
    flag: "pn.svg",
    capital: "Adamstown",
    population: 40,
  },
  {
    code: "PL",
    name: "Poland",
    flag: "pl.svg",
    capital: "Warsaw",
    population: 38057000,
  },
  {
    code: "PT",
    name: "Portugal",
    flag: "pt.svg",
    capital: "Lisbon",
    population: 10347892,
  },
  {
    code: "PR",
    name: "Puerto Rico",
    flag: "pr.svg",
    capital: "San Juan",
    population: 3285874,
  },
  {
    code: "QA",
    name: "Qatar",
    flag: "qa.svg",
    capital: "Doha",
    population: 2799202,
  },
  {
    code: "RO",
    name: "Romania",
    flag: "ro.svg",
    capital: "Bucharest",
    population: 19186201,
  },
  {
    code: "RU",
    name: "Russia",
    flag: "ru.svg",
    capital: "Moscow",
    population: 145478097,
  },
  {
    code: "RW",
    name: "Rwanda",
    flag: "rw.svg",
    capital: "Kigali",
    population: 12955768,
  },
  {
    code: "KR",
    name: "South Korea",
    flag: "kr.svg",
    capital: "Seoul",
    population: 51745000,
  },
  {
    code: "KN",
    name: "Saint Kitts and Nevis",
    flag: "kn.svg",
    capital: "Basseterre",
    population: 54000,
  },
  {
    code: "LC",
    name: "Saint Lucia",
    flag: "lc.svg",
    capital: "Castries",
    population: 178696,
  },
  {
    code: "VC",
    name: "Saint Vincent",
    flag: "vc.svg",
    capital: "Kingstown",
    population: 110696,
  },
  {
    code: "WS",
    name: "Samoa",
    flag: "ws.svg",
    capital: "Apia",
    population: 199853,
  },
  {
    code: "SM",
    name: "San Marino",
    flag: "sm.svg",
    capital: "City of San Marino",
    population: 33705,
  },
  {
    code: "ST",
    name: "Sao Tome",
    flag: "st.svg",
    capital: "Sao Tome",
    population: 214610,
  },
  {
    code: "SA",
    name: "Saudi Arabia",
    flag: "sa.svg",
    capital: "Riyadh",
    population: 35013414,
  },
  {
    code: "SN",
    name: "Senegal",
    flag: "sn.svg",
    capital: "Dakar",
    population: 17223497,
  },
  {
    code: "RS",
    name: "Serbia",
    flag: "rs.svg",
    capital: "Belgrade",
    population: 6871547,
  },
  {
    code: "SC",
    name: "Seychelles",
    flag: "sc.svg",
    capital: "Victoria",
    population: 99202,
  },
  {
    code: "SL",
    name: "Sierra Leone",
    flag: "sl.svg",
    capital: "Freetown",
    population: 8297882,
  },
  {
    code: "SG",
    name: "Singapore",
    flag: "sg.svg",
    capital: "Singapore",
    population: 5453600,
  },
  {
    code: "SX",
    name: "Sint Maarten",
    flag: "sx.svg",
    capital: "Philipsburg",
    population: 42577,
  },
  {
    code: "SK",
    name: "Slovakia",
    flag: "sk.svg",
    capital: "Bratislava",
    population: 5434712,
  },
  {
    code: "SI",
    name: "Slovenia",
    flag: "si.svg",
    capital: "Ljubljana",
    population: 2108977,
  },
  {
    code: "SB",
    name: "Solomon Islands",
    flag: "sb.svg",
    capital: "Honiara",
    population: 728041,
  },
  {
    code: "SO",
    name: "Somalia",
    flag: "so.svg",
    capital: "Mogadishu",
    population: 16360000,
  },
  {
    code: "ZA",
    name: "South Africa",
    flag: "za.svg",
    capital: "Pretoria",
    population: 60142978,
  },
  {
    code: "SS",
    name: "South Sudan",
    flag: "ss.svg",
    capital: "Juba",
    population: 13249924,
  },
  {
    code: "ES",
    name: "Spain",
    flag: "es.svg",
    capital: "Madrid",
    population: 47326687,
  },
  {
    code: "LK",
    name: "Sri Lanka",
    flag: "lk.svg",
    capital: "Colombo",
    population: 22156000,
  },
  {
    code: "SD",
    name: "Sudan",
    flag: "sd.svg",
    capital: "Khartoum",
    population: 44422090,
  },
  {
    code: "SR",
    name: "Suriname",
    flag: "sr.svg",
    capital: "Paramaribo",
    population: 598000,
  },
  {
    code: "SJ",
    name: "Svalbard",
    flag: "sj.svg",
    capital: "Longyearbyen",
    population: 10468482,
  },
  {
    code: "SE",
    name: "Sweden",
    flag: "se.svg",
    capital: "Stockholm",
    population: 8736500,
  },
  {
    code: "CH",
    name: "Switzerland",
    flag: "ch.svg",
    capital: "Bern",
    population: 18276000,
  },
  {
    code: "SY",
    name: "Syria",
    flag: "sy.svg",
    capital: "Damascus",
    population: 18276000,
  },
  {
    code: "TW",
    name: "Taiwan",
    flag: "tw.svg",
    capital: "Taipei",
    population: 23375314,
  },
  {
    code: "TJ",
    name: "Tajikistan",
    flag: "tj.svg",
    capital: "Dushanbe",
    population: 9506000,
  },
  {
    code: "TZ",
    name: "Tanzania",
    flag: "tz.svg",
    capital: "Dodoma",
    population: 59441988,
  },
  {
    code: "TH",
    name: "Thailand",
    flag: "th.svg",
    capital: "Bangkok",
    population: 66786980,
  },
  {
    code: "TG",
    name: "Togo",
    flag: "tg.svg",
    capital: "Lome",
    population: 7886000,
  },
  {
    code: "TK",
    name: "Tokelau",
    flag: "tk.svg",
    capital: "Fakaofo",
    population: 1501,
  },
  {
    code: "TO",
    name: "Tonga",
    flag: "to.svg",
    capital: "Nuku'alofa",
    population: 99532,
  },
  {
    code: "TT",
    name: "Trinidad",
    flag: "tt.svg",
    capital: "Port of Spain",
    population: 1367558,
  },
  {
    code: "TN",
    name: "Tunisia",
    flag: "tn.svg",
    capital: "Tunis",
    population: 11746695,
  },
  {
    code: "TR",
    name: "Turkey",
    flag: "tr.svg",
    capital: "Ankara",
    population: 84680273,
  },
  {
    code: "TM",
    name: "Turkmenistan",
    flag: "tm.svg",
    capital: "Ashgabat",
    population: 6118000,
  },
  {
    code: "TC",
    name: "Turks and Caicos Islands",
    flag: "tc.svg",
    capital: "Cockburn Town",
    population: 44542,
  },
  {
    code: "TV",
    name: "Tuvalu",
    flag: "tv.svg",
    capital: "Funafuti",
    population: 10679,
  },
  {
    code: "UG",
    name: "Uganda",
    flag: "ug.svg",
    capital: "Kampala",
    population: 42885900,
  },
  {
    code: "UA",
    name: "Ukraine",
    flag: "ua.svg",
    capital: "Kyiv",
    population: 41130432,
  },
  {
    code: "AE",
    name: "United Arab Emirates",
    flag: "ae.svg",
    capital: "Abu Dhabi",
    population: 9282410,
  },
  {
    code: "GB",
    name: "United Kingdom",
    flag: "gb.svg",
    capital: "London",
    population: 67081000,
  },
  {
    code: "US",
    name: "USA",
    flag: "us.svg",
    capital: "Washington D.C.",
    population: 332674438,
  },
  {
    code: "UY",
    name: "Uruguay",
    flag: "uy.svg",
    capital: "Montevideo",
    population: 3554915,
  },
  {
    code: "UZ",
    name: "Uzbekistan",
    flag: "uz.svg",
    capital: "Tashkent",
    population: 35535246,
  },
  {
    code: "VU",
    name: "Vanuatu",
    flag: "vu.svg",
    capital: "Port Vila",
    population: 301295,
  },
  {
    code: "VE",
    name: "Venezuela",
    flag: "ve.svg",
    capital: "Caracas",
    population: 28705000,
  },
  {
    code: "VN",
    name: "Viet Nam",
    flag: "vn.svg",
    capital: "Hanoi",
    population: 98505400,
  },
  {
    code: "EH",
    name: "Western Sahara",
    flag: "eh.svg",
    capital: "El Aaiun",
    population: 612000,
  },
  {
    code: "YE",
    name: "Yemen",
    flag: "ye.svg",
    capital: "Sana'a",
    population: 30491000,
  },
  {
    code: "ZM",
    name: "Zambia",
    flag: "zm.svg",
    capital: "Lusaka",
    population: 18400556,
  },
  {
    code: "ZW",
    name: "Zimbabwe",
    flag: "zw.svg",
    capital: "Harare",
    population: 15790716,
  },
]
