console.log("Hello vinod garg is incredible")

console.log("hello this is intro")

const fs = require('fs');
fs.writeFile("output.txt","Writing File",(err)=>{
    if (err) console.log("Error occured");
    else console.log('File Written Successfully')
})