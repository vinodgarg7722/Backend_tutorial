// External Module
const express = require('express')
const bodyParser = require('body-parser')



const app = express()

// app.use((req, res, next) => {
//     console.log("First Dummy Middleware", req.url, req.method);
//     next();
// })


// app.use((req, res, next) => {
//     console.log("Second Dummy Middleware", req.url, req.method);
//     next();
// })

// app.use((req, res, next) => {
//     console.log("Thirs(3rd) Middleware",req.url,req.method);
//     res.send("<h1>Welcome to complete coding</h1>")
//     next();
// })


app.get("/", (req, res, next) => {
    console.log("Handling / For GET", req.url, req.method);
    res.send(`<h1>Welcome to complete coding</h1>`)
    next();
})

app.get("/contact-us", (req, res, next) => {
    console.log("Handling /contact-us For GET", req.url, req.method);
    res.send(
        `<h1>Please give your details here</h1>
    <form action="/contact-us" method="post">
       <input type="text" name="name" placeholder="Enter your name">
       <input type="email" name="email" placeholder="Enter your email">
       <input type="submit">
    </form>
    `)
    next();
})



app.post("/contact-us",(req,res,next)=>{
    console.log("First handling", req.url, req.method,req.body);
    next();
    

});
app.use(bodyParser.urlencoded())

app.post("/contact-us",(req,res,next)=>{
    console.log("Handling /contact-us For GET", req.url, req.method,req.body);
    res.send(`<h1>We will contact you shortly</h1>`)
})





const PORT = 3005;
app.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
});
