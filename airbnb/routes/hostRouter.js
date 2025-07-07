//Core Modules
const path = require("path");

//External Modules
const express = require('express')
const hostRouter  = express.Router();

//Local Modules
const rootDir = require("../utils/pathUtil")


hostRouter.get("/host/add-home",(req,res,next) => {
    
    res.sendFile(path.join(__dirname,'../','views','addHome.html'))
    
    // res.send(`
    //     <h1>Register your Home here:</h1>
    //     <form action="/host/add-home" method="POST">
    //     <input type="text" name="houseName" placeholder="Enter the name of your house" />
    //     <input type="submit" />
    //     </form>
    //     `)
})


hostRouter.post("/host/add-home",(req,res,next) => {
    console.log(req.body)
    
    // res.sendFile(path.join(__dirname,'../','views','homeAdded.html'))
    
    res.sendFile(path.join(rootDir,'views','homeAdded.html'))
    
    // res.send(`
    //     <h1>Home Registered Successfully</h1>
    //     <a href="/add-home">Go to Home</a>
        
    //     `)
})



module.exports= hostRouter;