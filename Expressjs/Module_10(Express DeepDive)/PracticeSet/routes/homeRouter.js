//Core Module
const path = require('path')

//External Module
const express = require('express.js')

//Local Module
const rootDir = require("../utils/pathUtil")

const homeRoute = express.Router();

homeRoute.get("/", (req, res, next) => {
    console.log("Handling / For GET", req.url, req.method);

    res.sendFile(path.join(rootDir,'views','home.html'))

   
})

module.exports = homeRouter;