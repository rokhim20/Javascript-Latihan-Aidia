let kata = 'xoxoxo'
let hurufx = 0;
let hurufo = 0;

    for (i=0; i<kata.length; i++) {
        if(kata[i] === "x") {
            hurufx++
        }
        if(kata[i] === "o") {
            hurufo++
        }
    }
    if(hurufx === hurufo) {
        console.log(true)
    } else {
        console.log(false)
    }

