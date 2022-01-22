var timeconvert = function (number) {
    var menit =Math.floor(number/60);
    var detik = number%60 ;
    console.log(menit + ": " + detik);
}

timeconvert(88);