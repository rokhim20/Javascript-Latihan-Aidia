function reverseword(string) {
    let kata = ""
    
    for(let i=string.length-1; i>=0; i--) { 
      kata += string[i]
    }
    
    return kata
  }
  console.log(reverseword('Javascript'));