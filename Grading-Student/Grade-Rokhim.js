let nama = 'Andhika';
let nilai = 100

if (nilai >=80 && nilai <=100) {
    console.log('Nama: ' +nama +'; Score: ' + 'A');
} else if (nilai >=65 && nilai<=79) {
    console.log('Nama: ' +nama +'; Score: ' + 'B');
} else if (nilai >=50 && nilai<=64) {
    console.log('Nama: ' +nama +'; Score: ' + 'C');
} else if (nilai >=35 && nilai <=49) {
    console.log('Nama: ' +nama +'; Score: ' + 'D');
} else if (nilai >=0 && nilai <=34) {
    console.log('Nama: ' +nama +'; Score: ' + 'E');
}
else {
    console.log('Nama: ' +nama +'; Score: ' + 'Nilai Invalid')
}

/*
ALGORITMA:
1) Nama mahasiswa terdaftar dan mempunyai sebuah nilai hasil ujian
2) Dengan ketentuan nilai sebagai berikut:
- Jika Mahasiswa mendapat nilai 80 sampai dengan 100 maka hasilnya "A";
- Jika Mahasiswa mendapat nilai 65 sampai dengan 79 maka hasilnya "B";
- Jika Mahasiswa mendapat nilai 50 sampai dengan 64 maka hasilnya "C";
- Jika Mahasiswa mendapat nilai 35 sampai dengan 49 maka hasilnya "D";
- Jika Mahasiswa mendapat nilai 0 sampai dengan 34 maka hasilnya "E";
- Namun jika nilainya kurang dari 0 atau lebih dari 100 maka nilainya invalid
3) Dari ketentuan tersebut maka Dosen dapat menginput nilai dan keluarlah Nama dan Hasil Nilai Mahasiswa yang telah diinput

*/