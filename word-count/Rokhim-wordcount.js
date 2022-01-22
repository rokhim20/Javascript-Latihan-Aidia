function jumlahkata(string) {
    let total = 0;
    for (let i = 0; i < string.length; i++) {
        if (string[i] ===  ' ') {
            total += 1;
        }
    }
    return total += 1; 
}
console.log(jumlahkata("I believe I can code")); 
