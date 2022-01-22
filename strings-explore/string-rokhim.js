// Jawaban Soal 1
var word = 'JavaScript';
var second = 'is';
var third = 'awesome';
var fourth = 'and';
var fifth = 'I';
var sixth = 'love';
var seventh = 'it';

console.log('Jawaban Soal 1');
console.log(word + ' ' + second + ' ' + third + ' ' + fourth + ' ' + fifth + ' ' + sixth + ' ' + seventh +'\n');


// Jawaban Soal 2
var word2 = 'wow JavaScript is so cool';
var FirstWord = word2[0] + word2[1] + word2[2];
var SecondWord = word2[4] + word2[5] + word2[6] + word2[7] + word2[8] + word2[9] + word2[10] + word2[11] + word2[12] + word2[13];
var ThirdWord = word2[15] + word2[16];
var FourthWord = word2[18] + word2[19];
var FifthWord = word2[21] + word2[22] + word2[23] + word2[24];

console.log('Jawaban Soal 2');
console.log('First Word: ' + FirstWord);
console.log('Second Word: ' + SecondWord);
console.log('Third Word: ' + ThirdWord);
console.log('Fourth Word: ' + FourthWord);
console.log('Fifth Word: ' + FifthWord + '\n');


//Jawaban Soal 3
var word3 = 'wow JavaScript is so cool';
var FirstWord3 = word3.substring(0,3);
var SecondWord3 = word3.substring(4, 14);
var ThirdWord3 = word3.substring(15,17);
var FourthWord3 = word3.substring(18, 20);
var FifthWord3 = word3.substring(21,25);

console.log('Jawaban Soal 3');
console.log('First Word: ' +FirstWord3);
console.log('Second Word: ' +SecondWord3);
console.log('Third Word: ' +ThirdWord3);
console.log('Fourth Word: ' +FourthWord3);
console.log('Fifth Word: ' +FifthWord3 + '\n');


// Jawaban Soal 4
var FirsWordLength = FirstWord3.length;
var SecondWordLength = SecondWord3.length;
var ThirdWordLength = ThirdWord3.length;
var FourthWordLength = FourthWord3.length;
var FifthWordLength = FifthWord3.length;

console.log('Jawaban Soal 4');
console.log('First Word: ' +FirstWord3 + ', With length: ' +FirsWordLength);
console.log('Second Word: ' +SecondWord3 + ', With length: ' +SecondWordLength);
console.log('Third Word: ' +ThirdWord3 + ', With length: ' +ThirdWordLength);
console.log('Fourth Word: ' +FourthWord3 + ', With length: ' +FourthWordLength);
console.log('Fifth Word: ' +FifthWord3 + ', With length: ' +FifthWordLength);

