const BASE = ["#FrancaisFacile", "#ApprendreLeFrancais", "#FLE"];

const BY_TYPE = {
  anecdote: ["#Etymologie", "#HistoireDesMots", "#SaviezVous"],
  expression: ["#ExpressionFrancaise", "#Idiome", "#Francophonie"],
  fauxami: ["#FauxAmis", "#PiegeDeLangue"],
  homophone: ["#Homophones", "#Orthographe", "#DictéeFrançaise"],
  intraduisible: ["#MotIntraduisible", "#FrenchTouch"],
  record: ["#RecordInsolite", "#CultureGenerale"],
  vraifaux: ["#VraiOuFaux", "#Quiz"],
  devinette: ["#Devinette", "#Virelangue"],
  piege: ["#GrammaireFrancaise", "#ErreurFrequente"],
};

const BY_REGION = {
  Québec: ["#FrançaisQuébécois"],
  Belgique: ["#FrançaisDeBelgique"],
  Suisse: ["#FrançaisDeSuisse"],
  Afrique: ["#FrancophonieAfricaine"],
  France: ["#FrançaisDeFrance"],
};

export function buildHashtags(item) {
  const tags = new Set([...BASE, ...(BY_TYPE[item.type] || [])]);
  if (item.region && BY_REGION[item.region]) {
    BY_REGION[item.region].forEach((t) => tags.add(t));
  }
  return Array.from(tags).slice(0, 8);
}
