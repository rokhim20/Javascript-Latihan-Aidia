//01 - Antrian
let line = ['Rhaegar']
function antrian(line, person) {
    line.push(person)
    return line
}

console.log(antrian(line, 'Snow'))



// 02 - Panggil Antrian
let line = ['Rhaegar', 'Snow']
function panggilAntrian(line) {
  line.shift();
  return line
}

console.log(panggilAntrian(line)) // ['Snow']



// 03 - Tumpukan
let line = ['Snow']
function tumpukan(line, title) {
  line.unshift(title);
  return line
}

console.log(tumpukan(line, 'Jon')) // ['Jon', 'Snow']



// 04 - Ganjil Genap
function ganjilGenap(plat) {
    if (plat === ''){
        return 'plat tidak ditemukan'
    } else if (!plat){
        return 'invalid data'
    } else if (plat) {
        let hasil = plat.split(";");
        let genap = 0 ;
        let ganjil = 0;

        for (let i=0; i<hasil.length; i++){
            if (hasil[i] % 2 === 0){
             genap++
            
            } else {
             ganjil++
             
            }
            
        }
        return `plat genap sebanyak: ${genap} plat ganjil sebanyak: ${ganjil}`
    }
  }
    console.log(ganjilGenap('2341;3429;864;1309;1276')) //invalid data
