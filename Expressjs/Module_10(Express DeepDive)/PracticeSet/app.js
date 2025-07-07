// External Module
const express = require('express')

//Local Modules
const rootDir = require("./utils/pathUtil")
const homeRouter = require('./routes/homeRouter')
const contactRouter = require('./routes/contactRouter');


//Core Module
const path = require('path')



const app = express()

app.use(express.urlencoded());

app.use(homeRouter)
app.use(contactRouter)

app.use((req,res,next)=>{
     res.sendFile(path.join(rootDir,'views','404.html'))
})






const PORT = 3005;
app.listen(PORT, () => {
    console.log(`Server running on address http://localhost:${PORT}`);
});
