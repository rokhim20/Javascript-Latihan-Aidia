/*
PSEUDOCODE:

STORE angka WITH ROUND UP OF WITH RANDOM NUMBER BETWEEN 1 AND 5
STORE JumlahKupon

SWITCH angka
    CASE 1
        SET JumlahKupon WITH "Coba lagi ya"
        BREAK
    CASE 2
        SET JumlahKupon WITH "Selamat kamu mendapatkan kupon sebanyak 5"
        BREAK
    CASE 3
        SET JumlahKupon WITH "Selamat kamu mendapatkan kupon sebanyak 15"
        BREAK
    CASE 4
        SET JumlahKupon WITH "Selamat kamu mendapatkan kupon sebanyak 50"
        BREAK
    DEFAULT
        SET JumlahKupon WITH "WOW, kamu menang jackpot! Selamat!!"
        BREAK
END SWITCH

DISPLAY "Anda mendapat kupon sebanyak: " CONCAT WITH angka
DISPLAY JumlahKupon

*/

let angka = Math.ceil(Math.random() * 5);
let JumlahKupon

switch (angka) {
    case 1:
        JumlahKupon = 'Coba lagi ya';
        break;
    case 2:
        JumlahKupon = 'Selamat kamu mendapatkan kupon sebanyak 5';
        break;
    case 3:
        JumlahKupon = 'Selamat kamu mendapatkan kupon sebanyak 15';
        break;
    case 4:
        JumlahKupon = 'Selamat kamu mendapatkan kupon sebanyak 50';
        break;
    default:
        JumlahKupon = 'WOW, kamu menang jackpot! Selamat!!';
        break;

}
console.log('Anda mendapat kupon sebanyak: ' +angka);
console.log(JumlahKupon);