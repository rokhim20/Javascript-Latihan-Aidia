// Soal 1
console.log('SOAL 1')

for (let number =1; number <= 100; number++) {
    if(number%2 === 0){
        console.log(number + ' - Genap');
    } else{
        console.log(number + ' - Ganjil');
    }
}

// Soal 2
console.log('\nSOAL 2')

for (let number=50; number <=200; number+=5) {
    if(number%3 === 0){
        console.log(number + " - Faktor 3");
    } else {
        console.log(number + " - Tidak Bisa Dibagi 3")
    }
        
} 

// Soal 3
console.log('\nSOAL 3')

for (let number = 100; number <= 200; number += 7){
    if(number%8 === 0){
        console.log(number)
    }
}
 