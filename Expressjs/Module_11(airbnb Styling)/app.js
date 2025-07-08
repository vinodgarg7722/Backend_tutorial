const path = require('path');


//External Module
const express = require('express');

//Local Module
const userRouter = require("./routes/userRouter");
const hostRouter = require('./routes/hostRouter');
const rootDir = require('./utils/pathUtil')

const app = express();

app.use(express.urlencoded());
app.use(userRouter);
app.use(hostRouter);
app.use(express.static(path.join(rootDir,'public')))



app.use((req,res,next) => {

    // res.sendFile(path.join(__dirname,'views','404.html'))
    
    res.sendFile(path.join(rootDir,'views','404.html'))
        
    // res.status(404).send("<h2>404 Your page is not found on airbnb</h2>")
})

const PORT = 3005;
app.listen(PORT, () => {
  console.log(`Server running on address http://localhost:${PORT}`);
});



