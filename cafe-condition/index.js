let line = []

function ganjilGenap(plat) {
  // your code here
}

function antrian(line, person) {
  // your code here
}

function panggilAntrian(line) {
  // your code here
}

function tumpukan(line, title) {
  // your code here
}

console.log(ganjilGenap('2341;3429;864;1309;1276')) //plat genap sebanyak 2 dan plat ganjil sebanyak 3
console.log(ganjilGenap('2347;3429;1305')) //plat ganjil sebanyak 3 dan plat genap tidak ditemukan
console.log(ganjilGenap('864;1308;1276;1432')) //plat genap sebanyak 4 dan plat ganjil tidak ditemukan
console.log(ganjilGenap('')) //plat tidak ditemukan
console.log(ganjilGenap()) //invalid data

module.exports = {
  antrian,
  panggilAntrian,
  tumpukan,
  ganjilGenap
}
