//Core Modules
const path = require("path");

//Local Modules
const rootDir = require("../utils/pathUtil")

// External Module
const express = require('express')
const userRouter  = express.Router();

userRouter.get("/",(req,res,next)=>{
    // res.send(
    //     `<h1>Welcome to airbnb</h1>
    //     <a href="/host/add-home">Add Home</a>
    //     `
    // )

    // res.sendFile(path.join(__dirname,'../','views','home.html'))
    
    res.sendFile(path.join(rootDir,'views','home.html'))
})

module.exports= userRouter;