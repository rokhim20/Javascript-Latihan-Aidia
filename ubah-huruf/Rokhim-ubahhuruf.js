let kata = 'i love javascript'
let katanya = 'aiueoAIUEO';
let hasilnya = ''

    for (let i=0; i<kata.length; i++) {
        for(let j=0; j<=katanya.length; j++) {
            if (kata[i] === katanya[j]) {
                hasilnya += '$'
                break
            } else if(!katanya[j]) {
                hasilnya += kata[i]
            }
        }
    } 

console.log(hasilnya)

