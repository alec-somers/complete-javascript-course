const scoreDolphins = 98;
const scoreKoalas = 97;

if (scoreDolphins > scoreKoalas) {
  console.log("Dolphins win the trophy");
} else if (scoreKoalas > scoreDolphins) {
  console.log("Koalas win the trophy");
} else if (scoreKoalas === scoreDolphins) {
  console.log("Both win the trophy");
}
