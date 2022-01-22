# Data Type Challenge

### NOTES

- Jalankan command `npm install` terlebih dahulu di terminal pada folder project ini.
- Pada skeleton terdapat folder `__tests__`, folder ini beserta file-file di dalamnya tidak boleh diubah sama sekali.
- Cara menjalankan test untuk memastikan solusi kamu sudah benar, jalankan command `npm test`

### RESTRICTION

- Hanya boleh menggunakan built-in function typeof, isNaN(), dan built-in untuk menkonversi tipe data, seperti toString(), Number(), dll

### HINTS

- Variable `kata` __tidak boleh diganti dengan variabel lain__ dan penggunaannya sesuai dengan [Directions](#directions) yang disebutkan di bawah.

---

## Objectives

- Mampu menggunakan template literals
- Mampu menggunakan `typeof` untuk sebuah kasus masalah yang diberikan
- Mampu dan mengerti penggunaan `conditional branch`
- Mampu menggunakan truthy falsy didalam pengecekan kondisi
- Mampu mengkondisikan posisi sebuah `conditional` dari sebuah permasalahan

## Directions

Diberikan sebuah variabel `kata`.

Buatlah program yang mengecek kondisi tipe data dari value di dalam variabel `kata`.

- Jika data merupakan sebuah string, maka tampilkan 'username ' + kata (gunakan template literals)
- Jika data merupakan sebuah number, maka tampilkan 'age: ' + data (gunakan template literals)
- Jika data merupakan sebuah boolean, cek nilainya:
    - Jika true maka tampilkan 'thank you for agreeing'
    - Jika false maka tampilkan 'cannot proceed without agreement'
- Jika nilai/value dari data adalah angka 0 atau empty string atau undefined atau null atau NaN maka tampilkan 'Invalid data'

```js
Contoh 1:
let kata = 'Stefani'

maka output adalah 'username Stefani'

Contoh 2:
let kata = 25

maka output adalah 'age 25'

Contoh 3:
let kata = 0

maka output adalah 'Invalid data'

Contoh 4:
let kata = '0'

maka output adalah 'username 0'

Contoh 5:
let kata = false

maka output adalah 'cannot proceed without agreement'
```
