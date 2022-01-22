let kata = false ;

if(typeof kata === 'string') {
    kata = `username ${kata}`
    console.log(kata)
} 
else if(kata == 0 || !kata) {
    console.log('invalid data')
}
 else if (typeof kata === 'number') {
    kata = `age ${kata}`
    console.log(kata)
} else if (typeof kata === 'boolean')  {
    switch (kata){
        case kata = true:
        console.log('Thank you for agreeing');
        break;
        default:
        console.log('Cannot procees without agreement');
        break;
    }
    
} 