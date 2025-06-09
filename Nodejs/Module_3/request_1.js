// how to exit event loop 
const http = require('http');



const Server = http.createServer((req , res) =>{
    console.log("URL is => ",req.url);
    console.log();
    console.log("Methods is => " ,req.method);
    console.log();
    console.log("Headers are =>",req.headers);

    // process.exit()
    
})

const port = 3000 
Server.listen(port , ()=>{
    console.log(`Server running on address http://localhost:${port}`)
})