import React from "react";
const columns = [
  {name: "NOME", uid: "name"},
  {name: "FUNÇÃO", uid: "functionsProviders"},
  {name: "STATUS", uid: "status"},
  {name: "AÇÕES", uid: "actions"},
];

const users = [
  {
    "id": 1,
    "name": "User 85",
    "role": "Serralheiro",
    "cpf": "624.645.476-28",
    "status": "vocation",
    "age": "20",
    "avatar": "https://i.pravatar.cc/150?u=0.3394090629954589",
    "timeSheet": "R$ 2297,00"
  },
  {
    "id": 2,
    "name": "User 33",
    "role": "Serralheiro",
    "cpf": "906.613.061-41",
    "status": "paused",
    "age": "57",
    "avatar": "https://i.pravatar.cc/150?u=0.28494104744950866",
    "timeSheet": "R$ 2653,00"
  },
  {
    "id": 3,
    "name": "User 15",
    "role": "Adm",
    "cpf": "422.172.694-86",
    "status": "vocation",
    "age": "33",
    "avatar": "https://i.pravatar.cc/150?u=0.10459002124177719",
    "timeSheet": "R$ 5594,00"
  },
  {
    "id": 4,
    "name": "User 32",
    "role": "Adm",
    "cpf": "732.891.193-93",
    "status": "vocation",
    "age": "58",
    "avatar": "https://i.pravatar.cc/150?u=0.2111982122553988",
    "timeSheet": "R$ 5267,00"
  },
  {
    "id": 5,
    "name": "User 48",
    "role": "Serralheiro",
    "cpf": "867.868.256-15",
    "status": "paused",
    "age": "51",
    "avatar": "https://i.pravatar.cc/150?u=0.21330601842038344",
    "timeSheet": "R$ 4970,00"
  },
  {
    "id": 6,
    "name": "User 83",
    "role": "Adm",
    "cpf": "382.168.720-30",
    "status": "paused",
    "age": "25",
    "avatar": "https://i.pravatar.cc/150?u=0.5880348905578465",
    "timeSheet": "R$ 4881,00"
  },
  {
    "id": 7,
    "name": "User 94",
    "role": "Adm",
    "cpf": "479.883.717-02",
    "status": "vocation",
    "age": "24",
    "avatar": "https://i.pravatar.cc/150?u=0.13426041393850308",
    "timeSheet": "R$ 5029,00"
  },
  {
    "id": 8,
    "name": "User 49",
    "role": "Adm",
    "cpf": "586.708.657-43",
    "status": "active",
    "age": "56",
    "avatar": "https://i.pravatar.cc/150?u=0.724926833944826",
    "timeSheet": "R$ 2774,00"
  },
  {
    "id": 9,
    "name": "User 65",
    "role": "Adm",
    "cpf": "517.920.592-70",
    "status": "paused",
    "age": "32",
    "avatar": "https://i.pravatar.cc/150?u=0.5592817876193519",
    "timeSheet": "R$ 5791,00"
  },
  {
    "id": 10,
    "name": "User 29",
    "role": "Pintura",
    "cpf": "266.095.047-22",
    "status": "vocation",
    "age": "37",
    "avatar": "https://i.pravatar.cc/150?u=0.3948337944757221",
    "timeSheet": "R$ 2390,00"
  },
  {
    "id": 11,
    "name": "User 78",
    "role": "Serralheiro",
    "cpf": "327.811.024-50",
    "status": "paused",
    "age": "50",
    "avatar": "https://i.pravatar.cc/150?u=0.7591964608643127",
    "timeSheet": "R$ 4972,00"
  },
  {
    "id": 12,
    "name": "User 45",
    "role": "Serralheiro",
    "cpf": "860.086.927-67",
    "status": "active",
    "age": "33",
    "avatar": "https://i.pravatar.cc/150?u=0.9162486655758735",
    "timeSheet": "R$ 4833,00"
  },
  {
    "id": 13,
    "name": "User 35",
    "role": "Serralheiro",
    "cpf": "329.182.535-46",
    "status": "paused",
    "age": "30",
    "avatar": "https://i.pravatar.cc/150?u=0.2857883454375931",
    "timeSheet": "R$ 3517,00"
  },
  {
    "id": 14,
    "name": "User 8",
    "role": "Adm",
    "cpf": "173.993.732-95",
    "status": "active",
    "age": "26",
    "avatar": "https://i.pravatar.cc/150?u=0.6770678594817399",
    "timeSheet": "R$ 1518,00"
  },
  {
    "id": 15,
    "name": "User 41",
    "role": "Serralheiro",
    "cpf": "846.316.467-96",
    "status": "paused",
    "age": "54",
    "avatar": "https://i.pravatar.cc/150?u=0.0661225823271765",
    "timeSheet": "R$ 5265,00"
  },
  {
    "id": 16,
    "name": "User 61",
    "role": "Pintura",
    "cpf": "686.289.751-19",
    "status": "vocation",
    "age": "26",
    "avatar": "https://i.pravatar.cc/150?u=0.8208759056770154",
    "timeSheet": "R$ 3451,00"
  },
  {
    "id": 17,
    "name": "User 36",
    "role": "Pintura",
    "cpf": "176.540.227-74",
    "status": "vocation",
    "age": "35",
    "avatar": "https://i.pravatar.cc/150?u=0.5867113004503595",
    "timeSheet": "R$ 5411,00"
  },
  {
    "id": 18,
    "name": "User 56",
    "role": "Pintura",
    "cpf": "967.591.700-72",
    "status": "active",
    "age": "27",
    "avatar": "https://i.pravatar.cc/150?u=0.7484373491794807",
    "timeSheet": "R$ 5941,00"
  },
  {
    "id": 19,
    "name": "User 47",
    "role": "Pintura",
    "cpf": "555.705.309-86",
    "status": "active",
    "age": "56",
    "avatar": "https://i.pravatar.cc/150?u=0.6148152668049782",
    "timeSheet": "R$ 4273,00"
  },
  {
    "id": 20,
    "name": "User 88",
    "role": "Serralheiro",
    "cpf": "435.984.012-31",
    "status": "active",
    "age": "48",
    "avatar": "https://i.pravatar.cc/150?u=0.441103521939884",
    "timeSheet": "R$ 2780,00"
  },
  {
    "id": 21,
    "name": "User 71",
    "role": "Adm",
    "cpf": "758.199.460-65",
    "status": "active",
    "age": "41",
    "avatar": "https://i.pravatar.cc/150?u=0.8554929613481128",
    "timeSheet": "R$ 4506,00"
  },
  {
    "id": 22,
    "name": "User 80",
    "role": "Pintura",
    "cpf": "465.245.528-20",
    "status": "active",
    "age": "30",
    "avatar": "https://i.pravatar.cc/150?u=0.49534584964894757",
    "timeSheet": "R$ 2089,00"
  },
  {
    "id": 23,
    "name": "User 38",
    "role": "Pintura",
    "cpf": "604.553.155-27",
    "status": "paused",
    "age": "52",
    "avatar": "https://i.pravatar.cc/150?u=0.9967418602810143",
    "timeSheet": "R$ 3568,00"
  },
  {
    "id": 24,
    "name": "User 83",
    "role": "Adm",
    "cpf": "218.161.862-72",
    "status": "paused",
    "age": "30",
    "avatar": "https://i.pravatar.cc/150?u=0.6056254755606256",
    "timeSheet": "R$ 2700,00"
  },
  {
    "id": 25,
    "name": "User 58",
    "role": "Serralheiro",
    "cpf": "326.483.110-39",
    "status": "active",
    "age": "53",
    "avatar": "https://i.pravatar.cc/150?u=0.5963381952084499",
    "timeSheet": "R$ 1248,00"
  },
  {
    "id": 26,
    "name": "User 98",
    "role": "Adm",
    "cpf": "292.424.403-62",
    "status": "active",
    "age": "29",
    "avatar": "https://i.pravatar.cc/150?u=0.8680458708569558",
    "timeSheet": "R$ 2113,00"
  },
  {
    "id": 27,
    "name": "User 42",
    "role": "Serralheiro",
    "cpf": "585.559.939-12",
    "status": "active",
    "age": "29",
    "avatar": "https://i.pravatar.cc/150?u=0.44619231771539325",
    "timeSheet": "R$ 4405,00"
  },
  {
    "id": 28,
    "name": "User 35",
    "role": "Adm",
    "cpf": "854.894.317-24",
    "status": "paused",
    "age": "28",
    "avatar": "https://i.pravatar.cc/150?u=0.39950470288259976",
    "timeSheet": "R$ 3322,00"
  },
  {
    "id": 29,
    "name": "User 27",
    "role": "Serralheiro",
    "cpf": "981.266.660-73",
    "status": "paused",
    "age": "45",
    "avatar": "https://i.pravatar.cc/150?u=0.9188443544744278",
    "timeSheet": "R$ 2367,00"
  },
  {
    "id": 30,
    "name": "User 37",
    "role": "Adm",
    "cpf": "704.359.367-53",
    "status": "vocation",
    "age": "45",
    "avatar": "https://i.pravatar.cc/150?u=0.3875729076132941",
    "timeSheet": "R$ 3901,00"
  },
  {
    "id": 31,
    "name": "User 17",
    "role": "Adm",
    "cpf": "293.481.191-22",
    "status": "paused",
    "age": "37",
    "avatar": "https://i.pravatar.cc/150?u=0.07303765143028418",
    "timeSheet": "R$ 1007,00"
  },
  {
    "id": 32,
    "name": "User 60",
    "role": "Adm",
    "cpf": "822.315.051-65",
    "status": "vocation",
    "age": "45",
    "avatar": "https://i.pravatar.cc/150?u=0.8129580652237496",
    "timeSheet": "R$ 4552,00"
  },
  {
    "id": 33,
    "name": "User 61",
    "role": "Serralheiro",
    "cpf": "280.120.814-36",
    "status": "vocation",
    "age": "44",
    "avatar": "https://i.pravatar.cc/150?u=0.41141367472526835",
    "timeSheet": "R$ 4764,00"
  },
  {
    "id": 34,
    "name": "User 19",
    "role": "Serralheiro",
    "cpf": "716.357.127-42",
    "status": "paused",
    "age": "41",
    "avatar": "https://i.pravatar.cc/150?u=0.36562558850933424",
    "timeSheet": "R$ 1064,00"
  },
  {
    "id": 35,
    "name": "User 38",
    "role": "Pintura",
    "cpf": "803.756.749-99",
    "status": "paused",
    "age": "53",
    "avatar": "https://i.pravatar.cc/150?u=0.802553828213358",
    "timeSheet": "R$ 3556,00"
  },
  {
    "id": 36,
    "name": "User 97",
    "role": "Adm",
    "cpf": "349.087.299-74",
    "status": "vocation",
    "age": "19",
    "avatar": "https://i.pravatar.cc/150?u=0.07378933604529547",
    "timeSheet": "R$ 5051,00"
  },
  {
    "id": 37,
    "name": "User 35",
    "role": "Adm",
    "cpf": "988.426.076-98",
    "status": "active",
    "age": "58",
    "avatar": "https://i.pravatar.cc/150?u=0.39509877595158827",
    "timeSheet": "R$ 1566,00"
  },
  {
    "id": 38,
    "name": "User 77",
    "role": "Pintura",
    "cpf": "374.841.717-73",
    "status": "vocation",
    "age": "34",
    "avatar": "https://i.pravatar.cc/150?u=0.201514362974611",
    "timeSheet": "R$ 4137,00"
  },
  {
    "id": 39,
    "name": "User 52",
    "role": "Adm",
    "cpf": "301.841.176-65",
    "status": "paused",
    "age": "32",
    "avatar": "https://i.pravatar.cc/150?u=0.4314451584405332",
    "timeSheet": "R$ 5830,00"
  },
  {
    "id": 40,
    "name": "User 72",
    "role": "Pintura",
    "cpf": "234.934.119-46",
    "status": "paused",
    "age": "18",
    "avatar": "https://i.pravatar.cc/150?u=0.8516049945265016",
    "timeSheet": "R$ 4607,00"
  },
  {
    "id": 41,
    "name": "User 55",
    "role": "Pintura",
    "cpf": "264.382.187-55",
    "status": "paused",
    "age": "41",
    "avatar": "https://i.pravatar.cc/150?u=0.5960969418770976",
    "timeSheet": "R$ 1172,00"
  },
  {
    "id": 42,
    "name": "User 60",
    "role": "Adm",
    "cpf": "126.727.134-44",
    "status": "paused",
    "age": "29",
    "avatar": "https://i.pravatar.cc/150?u=0.03731320732885335",
    "timeSheet": "R$ 2194,00"
  },
  {
    "id": 43,
    "name": "User 9",
    "role": "Adm",
    "cpf": "419.889.462-87",
    "status": "paused",
    "age": "35",
    "avatar": "https://i.pravatar.cc/150?u=0.19569025104641513",
    "timeSheet": "R$ 1460,00"
  },
  {
    "id": 44,
    "name": "User 85",
    "role": "Pintura",
    "cpf": "324.878.449-33",
    "status": "paused",
    "age": "27",
    "avatar": "https://i.pravatar.cc/150?u=0.8478709987917281",
    "timeSheet": "R$ 2048,00"
  },
  {
    "id": 45,
    "name": "User 98",
    "role": "Pintura",
    "cpf": "314.797.654-46",
    "status": "paused",
    "age": "56",
    "avatar": "https://i.pravatar.cc/150?u=0.48406446269050374",
    "timeSheet": "R$ 5307,00"
  },
  {
    "id": 46,
    "name": "User 11",
    "role": "Pintura",
    "cpf": "294.862.764-42",
    "status": "vocation",
    "age": "20",
    "avatar": "https://i.pravatar.cc/150?u=0.8697639755190374",
    "timeSheet": "R$ 5597,00"
  },
  {
    "id": 47,
    "name": "User 41",
    "role": "Serralheiro",
    "cpf": "493.886.271-74",
    "status": "paused",
    "age": "21",
    "avatar": "https://i.pravatar.cc/150?u=0.8078163319993472",
    "timeSheet": "R$ 3991,00"
  },
  {
    "id": 48,
    "name": "User 35",
    "role": "Serralheiro",
    "cpf": "565.180.294-81",
    "status": "vocation",
    "age": "44",
    "avatar": "https://i.pravatar.cc/150?u=0.45915568478245317",
    "timeSheet": "R$ 2549,00"
  },
  {
    "id": 49,
    "name": "User 99",
    "role": "Pintura",
    "cpf": "613.564.036-51",
    "status": "paused",
    "age": "42",
    "avatar": "https://i.pravatar.cc/150?u=0.8276983788712955",
    "timeSheet": "R$ 5308,00"
  },
  {
    "id": 50,
    "name": "User 17",
    "role": "Pintura",
    "cpf": "699.900.130-58",
    "status": "vocation",
    "age": "20",
    "avatar": "https://i.pravatar.cc/150?u=0.00532016992762907",
    "timeSheet": "R$ 5682,00"
  },
  {
    "id": 51,
    "name": "User 64",
    "role": "Adm",
    "cpf": "981.345.039-82",
    "status": "paused",
    "age": "29",
    "avatar": "https://i.pravatar.cc/150?u=0.6572456993932814",
    "timeSheet": "R$ 5166,00"
  },
  {
    "id": 52,
    "name": "User 41",
    "role": "Adm",
    "cpf": "377.903.842-74",
    "status": "active",
    "age": "36",
    "avatar": "https://i.pravatar.cc/150?u=0.43637776947507545",
    "timeSheet": "R$ 2369,00"
  },
  {
    "id": 53,
    "name": "User 37",
    "role": "Serralheiro",
    "cpf": "120.216.247-05",
    "status": "vocation",
    "age": "22",
    "avatar": "https://i.pravatar.cc/150?u=0.6298929834826312",
    "timeSheet": "R$ 2023,00"
  },
  {
    "id": 54,
    "name": "User 68",
    "role": "Pintura",
    "cpf": "233.852.902-93",
    "status": "paused",
    "age": "32",
    "avatar": "https://i.pravatar.cc/150?u=0.885836586183816",
    "timeSheet": "R$ 5129,00"
  },
  {
    "id": 55,
    "name": "User 75",
    "role": "Adm",
    "cpf": "894.238.654-58",
    "status": "vocation",
    "age": "37",
    "avatar": "https://i.pravatar.cc/150?u=0.32839392719073435",
    "timeSheet": "R$ 3757,00"
  },
  {
    "id": 56,
    "name": "User 26",
    "role": "Serralheiro",
    "cpf": "776.299.852-97",
    "status": "active",
    "age": "59",
    "avatar": "https://i.pravatar.cc/150?u=0.9964020673647398",
    "timeSheet": "R$ 3439,00"
  },
  {
    "id": 57,
    "name": "User 67",
    "role": "Adm",
    "cpf": "841.028.043-80",
    "status": "vocation",
    "age": "34",
    "avatar": "https://i.pravatar.cc/150?u=0.9195423552355428",
    "timeSheet": "R$ 3543,00"
  },
  {
    "id": 58,
    "name": "User 92",
    "role": "Adm",
    "cpf": "132.567.324-73",
    "status": "paused",
    "age": "41",
    "avatar": "https://i.pravatar.cc/150?u=0.23009432152819342",
    "timeSheet": "R$ 4215,00"
  },
  {
    "id": 59,
    "name": "User 18",
    "role": "Adm",
    "cpf": "751.211.590-23",
    "status": "paused",
    "age": "44",
    "avatar": "https://i.pravatar.cc/150?u=0.5116532575092831",
    "timeSheet": "R$ 5896,00"
  },
  {
    "id": 60,
    "name": "User 27",
    "role": "Pintura",
    "cpf": "820.894.787-87",
    "status": "active",
    "age": "58",
    "avatar": "https://i.pravatar.cc/150?u=0.07779501681833811",
    "timeSheet": "R$ 5525,00"
  },
  {
    "id": 61,
    "name": "User 93",
    "role": "Adm",
    "cpf": "766.600.689-88",
    "status": "vocation",
    "age": "54",
    "avatar": "https://i.pravatar.cc/150?u=0.20566857364316316",
    "timeSheet": "R$ 4464,00"
  },
  {
    "id": 62,
    "name": "User 92",
    "role": "Pintura",
    "cpf": "384.521.489-47",
    "status": "active",
    "age": "53",
    "avatar": "https://i.pravatar.cc/150?u=0.5938211718128923",
    "timeSheet": "R$ 4932,00"
  },
  {
    "id": 63,
    "name": "User 88",
    "role": "Serralheiro",
    "cpf": "825.436.296-86",
    "status": "vocation",
    "age": "21",
    "avatar": "https://i.pravatar.cc/150?u=0.9107356104871778",
    "timeSheet": "R$ 2778,00"
  },
  {
    "id": 64,
    "name": "User 56",
    "role": "Pintura",
    "cpf": "415.485.547-70",
    "status": "vocation",
    "age": "19",
    "avatar": "https://i.pravatar.cc/150?u=0.25929052039895617",
    "timeSheet": "R$ 3964,00"
  },
  {
    "id": 65,
    "name": "User 12",
    "role": "Serralheiro",
    "cpf": "152.430.981-56",
    "status": "paused",
    "age": "33",
    "avatar": "https://i.pravatar.cc/150?u=0.02359149038889341",
    "timeSheet": "R$ 3314,00"
  },
  {
    "id": 66,
    "name": "User 32",
    "role": "Pintura",
    "cpf": "473.783.724-12",
    "status": "vocation",
    "age": "58",
    "avatar": "https://i.pravatar.cc/150?u=0.0012715027893066555",
    "timeSheet": "R$ 4755,00"
  },
  {
    "id": 67,
    "name": "User 84",
    "role": "Serralheiro",
    "cpf": "919.622.356-13",
    "status": "vocation",
    "age": "32",
    "avatar": "https://i.pravatar.cc/150?u=0.4737416032143953",
    "timeSheet": "R$ 4682,00"
  },
  {
    "id": 68,
    "name": "User 87",
    "role": "Adm",
    "cpf": "398.937.439-80",
    "status": "active",
    "age": "18",
    "avatar": "https://i.pravatar.cc/150?u=0.931379423983157",
    "timeSheet": "R$ 3509,00"
  },
  {
    "id": 69,
    "name": "User 59",
    "role": "Adm",
    "cpf": "846.714.563-16",
    "status": "active",
    "age": "37",
    "avatar": "https://i.pravatar.cc/150?u=0.163594277163013",
    "timeSheet": "R$ 4469,00"
  },
  {
    "id": 70,
    "name": "User 85",
    "role": "Pintura",
    "cpf": "825.114.800-96",
    "status": "paused",
    "age": "42",
    "avatar": "https://i.pravatar.cc/150?u=0.10050558038345914",
    "timeSheet": "R$ 3079,00"
  },
  {
    "id": 71,
    "name": "User 63",
    "role": "Adm",
    "cpf": "342.006.974-22",
    "status": "vocation",
    "age": "19",
    "avatar": "https://i.pravatar.cc/150?u=0.08335540598869762",
    "timeSheet": "R$ 3806,00"
  },
  {
    "id": 72,
    "name": "User 64",
    "role": "Serralheiro",
    "cpf": "815.930.104-77",
    "status": "vocation",
    "age": "31",
    "avatar": "https://i.pravatar.cc/150?u=0.7834060599310337",
    "timeSheet": "R$ 5193,00"
  },
  {
    "id": 73,
    "name": "User 10",
    "role": "Pintura",
    "cpf": "276.919.885-43",
    "status": "vocation",
    "age": "32",
    "avatar": "https://i.pravatar.cc/150?u=0.0898496799327444",
    "timeSheet": "R$ 2877,00"
  },
  {
    "id": 74,
    "name": "User 41",
    "role": "Pintura",
    "cpf": "312.370.939-48",
    "status": "active",
    "age": "20",
    "avatar": "https://i.pravatar.cc/150?u=0.887731772325608",
    "timeSheet": "R$ 4592,00"
  },
  {
    "id": 75,
    "name": "User 53",
    "role": "Pintura",
    "cpf": "673.990.429-52",
    "status": "paused",
    "age": "51",
    "avatar": "https://i.pravatar.cc/150?u=0.657608146204463",
    "timeSheet": "R$ 5945,00"
  },
  {
    "id": 76,
    "name": "User 63",
    "role": "Serralheiro",
    "cpf": "629.169.909-17",
    "status": "paused",
    "age": "22",
    "avatar": "https://i.pravatar.cc/150?u=0.8422202647861894",
    "timeSheet": "R$ 4079,00"
  },
  {
    "id": 77,
    "name": "User 24",
    "role": "Pintura",
    "cpf": "296.831.196-34",
    "status": "paused",
    "age": "25",
    "avatar": "https://i.pravatar.cc/150?u=0.5103330383386193",
    "timeSheet": "R$ 5633,00"
  },
  {
    "id": 78,
    "name": "User 27",
    "role": "Adm",
    "cpf": "928.502.621-19",
    "status": "paused",
    "age": "28",
    "avatar": "https://i.pravatar.cc/150?u=0.3697752398634526",
    "timeSheet": "R$ 4243,00"
  },
  {
    "id": 79,
    "name": "User 80",
    "role": "Serralheiro",
    "cpf": "720.966.386-34",
    "status": "paused",
    "age": "21",
    "avatar": "https://i.pravatar.cc/150?u=0.11912662477238989",
    "timeSheet": "R$ 3374,00"
  },
  {
    "id": 80,
    "name": "User 85",
    "role": "Adm",
    "cpf": "791.690.160-48",
    "status": "active",
    "age": "58",
    "avatar": "https://i.pravatar.cc/150?u=0.6477834521475749",
    "timeSheet": "R$ 2443,00"
  },
  {
    "id": 81,
    "name": "User 66",
    "role": "Adm",
    "cpf": "764.718.098-75",
    "status": "vocation",
    "age": "49",
    "avatar": "https://i.pravatar.cc/150?u=0.013377364251299095",
    "timeSheet": "R$ 3917,00"
  },
  {
    "id": 82,
    "name": "User 96",
    "role": "Adm",
    "cpf": "232.474.166-88",
    "status": "paused",
    "age": "24",
    "avatar": "https://i.pravatar.cc/150?u=0.6152554519118565",
    "timeSheet": "R$ 2876,00"
  },
  {
    "id": 83,
    "name": "User 35",
    "role": "Adm",
    "cpf": "452.388.027-92",
    "status": "paused",
    "age": "58",
    "avatar": "https://i.pravatar.cc/150?u=0.21497937958464264",
    "timeSheet": "R$ 5210,00"
  },
  {
    "id": 84,
    "name": "User 70",
    "role": "Serralheiro",
    "cpf": "655.266.321-88",
    "status": "vocation",
    "age": "53",
    "avatar": "https://i.pravatar.cc/150?u=0.5755043889436928",
    "timeSheet": "R$ 5343,00"
  },
  {
    "id": 85,
    "name": "User 81",
    "role": "Serralheiro",
    "cpf": "366.549.743-45",
    "status": "paused",
    "age": "55",
    "avatar": "https://i.pravatar.cc/150?u=0.9305388210974954",
    "timeSheet": "R$ 3674,00"
  },
  {
    "id": 86,
    "name": "User 22",
    "role": "Adm",
    "cpf": "767.623.824-31",
    "status": "active",
    "age": "57",
    "avatar": "https://i.pravatar.cc/150?u=0.27202081336828243",
    "timeSheet": "R$ 1872,00"
  },
  {
    "id": 87,
    "name": "User 34",
    "role": "Adm",
    "cpf": "564.182.611-44",
    "status": "vocation",
    "age": "50",
    "avatar": "https://i.pravatar.cc/150?u=0.9748870091451447",
    "timeSheet": "R$ 3440,00"
  },
  {
    "id": 88,
    "name": "User 30",
    "role": "Serralheiro",
    "cpf": "525.851.438-82",
    "status": "active",
    "age": "30",
    "avatar": "https://i.pravatar.cc/150?u=0.0015240066238946248",
    "timeSheet": "R$ 4124,00"
  },
  {
    "id": 89,
    "name": "User 85",
    "role": "Pintura",
    "cpf": "220.002.376-10",
    "status": "active",
    "age": "42",
    "avatar": "https://i.pravatar.cc/150?u=0.2518472491937418",
    "timeSheet": "R$ 5340,00"
  },
  {
    "id": 90,
    "name": "User 40",
    "role": "Serralheiro",
    "cpf": "220.672.519-84",
    "status": "active",
    "age": "24",
    "avatar": "https://i.pravatar.cc/150?u=0.45052126574080753",
    "timeSheet": "R$ 4101,00"
  },
  {
    "id": 91,
    "name": "User 80",
    "role": "Pintura",
    "cpf": "612.205.567-66",
    "status": "paused",
    "age": "40",
    "avatar": "https://i.pravatar.cc/150?u=0.007404902489245968",
    "timeSheet": "R$ 3192,00"
  },
  {
    "id": 92,
    "name": "User 67",
    "role": "Pintura",
    "cpf": "438.185.917-43",
    "status": "paused",
    "age": "39",
    "avatar": "https://i.pravatar.cc/150?u=0.970573777319389",
    "timeSheet": "R$ 3926,00"
  },
  {
    "id": 93,
    "name": "User 93",
    "role": "Pintura",
    "cpf": "551.895.209-92",
    "status": "paused",
    "age": "24",
    "avatar": "https://i.pravatar.cc/150?u=0.7969246407916188",
    "timeSheet": "R$ 2733,00"
  },
  {
    "id": 94,
    "name": "User 91",
    "role": "Adm",
    "cpf": "342.535.729-40",
    "status": "paused",
    "age": "19",
    "avatar": "https://i.pravatar.cc/150?u=0.10755104071087751",
    "timeSheet": "R$ 1817,00"
  },
  {
    "id": 95,
    "name": "User 32",
    "role": "Adm",
    "cpf": "528.156.487-73",
    "status": "active",
    "age": "45",
    "avatar": "https://i.pravatar.cc/150?u=0.911700784424263",
    "timeSheet": "R$ 1946,00"
  },
  {
    "id": 96,
    "name": "User 46",
    "role": "Adm",
    "cpf": "685.695.783-22",
    "status": "active",
    "age": "34",
    "avatar": "https://i.pravatar.cc/150?u=0.21524875281489297",
    "timeSheet": "R$ 5172,00"
  },
  {
    "id": 97,
    "name": "User 93",
    "role": "Pintura",
    "cpf": "250.936.826-45",
    "status": "active",
    "age": "19",
    "avatar": "https://i.pravatar.cc/150?u=0.42022829367553793",
    "timeSheet": "R$ 2101,00"
  },
  {
    "id": 98,
    "name": "User 86",
    "role": "Adm",
    "cpf": "176.162.263-08",
    "status": "paused",
    "age": "41",
    "avatar": "https://i.pravatar.cc/150?u=0.9824301116447325",
    "timeSheet": "R$ 3167,00"
  },
  {
    "id": 99,
    "name": "User 85",
    "role": "Serralheiro",
    "cpf": "141.669.920-31",
    "status": "paused",
    "age": "51",
    "avatar": "https://i.pravatar.cc/150?u=0.47156439237178005",
    "timeSheet": "R$ 2189,00"
  },
  {
    "id": 100,
    "name": "User 53",
    "role": "Adm",
    "cpf": "334.051.200-22",
    "status": "vocation",
    "age": "53",
    "avatar": "https://i.pravatar.cc/150?u=0.6681027205440087",
    "timeSheet": "R$ 4046,00"
  }
];

export {columns, users};
