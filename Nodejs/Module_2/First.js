const http = require('http');

function requestListener(req , res){
    console.log(req);
}

http.createServer(requestListener)


// M2 anonymous function

// const http = require('http');

// http.createServer(function(req , res){
//     console.log(req);
// })


//M3  Arrow function

// const http = require('http');

// http.createServer((req , res) => {
//     console.log(req);
// })


// listen request 

// const http = require('http');

// function requestListener(req , res){
//     console.log(req);
// }

// const Server = http.createServer(requestListener)

// Server.listen(3000)

// listen with callback

// const http = require('http');

// function requestListener(req , res){
//     console.log(req);
// }

// const Server = http.createServer(requestListener)

// Server.listen(3000 , ()=>{
//     console.log("server start successfully")
// })


// how to exit event loop 
const http = require('http');

function requestListener(req , res){
    console.log(req);
    
}

const Server = http.createServer(requestListener)

Server.listen(3000 , ()=>{
    console.log("server start successfully")
})