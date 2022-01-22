function slice(data = [], start, end) {

    return data.slice(start, end)
    }
    
    console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 2)) // [ 'camel', 'duck', 'elephant' ]
    console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 2, 4)) // [ 'camel', 'duck' ]
    console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 1, 5)) // [ 'bison', 'camel', 'duck', 'elephant' ]
    console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'])) //[ 'ant', 'bison', 'camel', 'duck', 'elephant' ]
    console.log(slice(['ant', 'bison', 'camel', 'duck', 'elephant'], 20)) //[]
  