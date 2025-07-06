const runtime = () =>{
    console.log("I am inside Run time error")

    // console.log(x); // ReferenceError: x is not defined
    
    // let num = 98 ;
    // num(); //TypeError: num is not a function

    //Invalid JSON parse(SyntaxError)
    // let jsonstring = "{name : 'john'}"; //Invalid JSON (Single quotes)
    // JSON.parse(jsonstring)

    // file not found error(fs module)
    // const fs = require('fs')
    // fs.readFileSync('nonexistenceFile.txt') // Throw error : ENDENT (file not found)




}


module.exports = runtime;