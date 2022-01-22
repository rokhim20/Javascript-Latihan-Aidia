# Logic Challenge - Menghitung Jumlah Kata

### NOTES

- Jalankan command `npm install` terlebih dahulu di terminal pada folder project ini.
- Pada skeleton terdapat folder `__tests__`, folder ini beserta file-file di dalamnya tidak boleh diubah sama sekali.
- Cara menjalankan test untuk memastikan solusi kamu sudah benar, jalankan command `npm test`

### RESTRICTION

- Tidak boleh menggunakan built-in function apapun

### HINTS

- Variable `kalimat` __tidak boleh diganti dengan variabel lain__ dan penggunaannya sesuai dengan [Directions](#directions) yang disebutkan di bawah.
---

## Directions

Diberikan sebuah variabel `kalimat` bertipe string. Buatlah program yang menghitung jumlah kata yang terdapat di dalam kalimat tersebut (dilarang menggunakan built in function split). Syarat terhitungnya sebuah kata adalah minimal terdapat 1 buah huruf (alfabet)

```js
Contoh 1:
let kalimat = 'I have a dream'

maka output yang dihasilkan adalah 4

Contoh 2:
let kalimat = 'I believe I can code'

maka output yang dihasilkan adalah 5

Contoh 3:
let kalimat = 'I'

maka output yang dihasilkan adalah 1

Contoh 4:
let kalimat = '   '

maka output yang dihasilkan adalah 0, karena walaupun length nya > 0, tapi tidak ada satupun huruf di dalamnya
```
