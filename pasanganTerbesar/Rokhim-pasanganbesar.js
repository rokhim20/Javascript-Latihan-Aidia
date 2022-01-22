var angka = 79918293 //99
let StringToNum = angka.toString()
let minNum = 0
let maxNum = 0

for(let i=0; i < StringToNum.length; i++) {
    minNum = StringToNum[i] + StringToNum[i + 1]
    if (minNum > maxNum){
        maxNum = minNum
    }
}

console.log(maxNum)
