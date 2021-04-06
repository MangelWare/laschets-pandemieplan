const express = require("express");
const app = express();

app.use(express.static("static"));

app.get("/makePlan", (req, res) => {
  res.send(makePlan());
});

function makePlan() {
  var res = "";
  var options;

  //Part 1
  var part1 = "";
  const part1Options = [
    ["Was wir jetzt brauchen, ist ein[en|e] "],
    ["ein", "zwei", "drei", "vier", "fünf", "sechs"],
    [
      "tägige[n|] ",
      "wöchige[n|] ",
      "monatige[n|] ",
      "fache[n|] ",
      "malige[n|] ",
      "hebige[n|] ",
    ],
    [
      "harte[n|] ",
      "softe[n|] ",
      "optionale[n|] ",
      "intransparente[n|] ",
      "alternativlose[n|] ",
      "unumkehrbare[n|] ",
    ],
    ["Wellenbrecher-", "Brücken-", "Treppen-", "Wende-", "Impf-", "Ehren-"],
  ];
  part1Options.forEach((options) => {
    part1 += options[getRandomInt(options.length)];
  });
  const stops = [
    { text: "Lockdown ", sexus: "m" },
    { text: "Stopp ", sexus: "m" },
    { text: "Maßnahme ", sexus: "f" },
    { text: "Kampagne ", sexus: "f" },
    { text: "Sprint ", sexus: "m" },
    { text: "Matrix ", sexus: "f" },
  ];
  let stop = stops[getRandomInt(stops.length)];
  part1 += stop.text;
  part1 = escapeSexus(part1, stop.sexus);
  res += part1;

  let part2 = "";
  const part2Options = [
    ["bis "],
    [
      "zum Sommer ",
      "auf Weiteres ",
      "zur Bundestagswahl ",
      "2030 ",
      "nach den Abiturprüfungen ",
      "in die Puppen ",
    ],
    ["zur "],
    [
      "sofortigen ",
      "nachhaltigen ",
      "allmählichen ",
      "unausweichlichen ",
      "wirtschaftsschonenden ",
      "willkührlichen ",
    ],
    [
      "Senkung ",
      "Steigerung ",
      "Beendigung ",
      "Halbierung ",
      "Vernichtung ",
      "Beschönigung ",
    ],
    ["der "],
    [
      "Infektionszahlen.",
      "privaten Treffen.",
      "Wirtschaftsleistung.",
      "privaten Treffen.",
      "Wirtschaftsleistung.",
      "Wahlprognosen.",
      "dritten Welle.",
      "Bundeskanzlerin.",
    ],
  ];
  part2Options.forEach((options) => {
    part2 += options[getRandomInt(options.length)];
  });
  res += part2;

  return res;
}

function getRandomInt(max) {
  return Math.min(Math.floor(Math.random() * max), max - 1);
}

function escapeSexus(text, sexus) {
  const sexusRegex = /\[([^\|]*)\|([^\]]*)\]/g;
  switch (sexus) {
    case "m":
      return text.replace(sexusRegex, "$1");
    case "f":
      return text.replace(sexusRegex, "$2");
  }
  throw new Error("Unknown sexus!");
}

app.listen(8080);
