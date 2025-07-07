//Core Module
const path = require('path')

//External Module
const express = require('express.js')

//Local Module
const rootDir = require("../utils/pathUtil")

const contactRouter = express.Router();

contactRouter.get("/contact-us", (req, res, next) => {
    res.sendFile(path.join(rootDir,'views','contact-us.html'))
})

contactRouter.post("/contact-us", (req, res, next) => {
    console.log(req.body)
    res.sendFile(path.join(rootDir,'views','contact-sucess.html'))
})



module.exports = contactRouter;