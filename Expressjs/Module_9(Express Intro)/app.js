// // Core Module
// const http = require('http');

// // External Module
// const express = require('express')

// //Local Module
// const requestHandler = require('./user');

// const app = express()

// app.use((req,res,next)=>{
// console.log("came in first middleware",req.url,req.method)
// next();
// })

// app.use((req,res,next)=>{
// console.log("came in second middleware",req.url,req.method)
// res.send("<p>Welcome to home page </p>")
// })

// const server = http.createServer(app);



// const PORT = 3005;
// server.listen(PORT, () => {
//   console.log(`Server running on address http://localhost:${PORT}`);
// });









// By Express

// Core Module
// const http = require('http');

// External Module
const express = require('express')

//Local Module
const requestHandler = require('./user');

const app = express()

app.use("/",(req,res,next)=>{
console.log("came in first middleware",req.url,req.method)
res.send("<p>Came from First Middleware</p>")
next();
})

app.use("/submit-details",(req,res,next)=>{
console.log("came in second middleware",req.url,req.method)
res.send("<p>Welcome to home page </p>")
})

app.use("/",(req,res,next)=>{
console.log("came in another middleware",req.url,req.method)
res.send("<p>Came from another Middleware</p>")
})



// const server = http.createServer(app);



const PORT = 3005;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});