/* const scoreDolphis = (96 + 108 + 89) / 3;
const scoreKoalas = (88 + 91 + 118) / 3;
console.log(scoreDolphis, scoreKoalas);

if (scoreDolphis > scoreKoalas) {
  console.log('Dolphis win the trophy');
} else if (scoreKoalas > scoreDolphis) {
  console.log('Koalas win the trophy');
} else if (scoreDolphis === scoreKoalas) {
  console.log('Both win the trophy!');
} */

const scoreDolphis = (97+ 117 + 81) / 3;
const scoreKoalas = (109 + 95 + 86) / 3;
console.log(scoreDolphis, scoreKoalas);

if (scoreDolphis > scoreKoalas && scoreKoalas >=100) {
  console.log('Dolphins win the trophy');
} else if ( scoreKoalas > scoreDolphis && scoreKoalas >= 100) {
  console.log('Koalas win the trophy');
} else if (scoreDolphis === scoreKoalas && scoreDolphis >= 100 && scoreKoalas) {
  console.log('Both win the trophy');
} else {
  console.log('No one win the trophy');
}