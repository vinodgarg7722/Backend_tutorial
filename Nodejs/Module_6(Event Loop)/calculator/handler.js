const {sumRequestHandler} = require('./sum');


const userHandler = (req, res) => {
    console.log("URL:", req.url);
    console.log("Method:", req.method);

    if (req.url === '/') {

        res.setHeader('Content-Type', 'text/html');
        res.write(`
        <html>
        <head><title>Practice Set</title></head>

        <body>

        <h1>Welcome to Calculator</h1><br>
        <a href = "/calculator">Go To Calculator</a>

        </body>
        </html>
        `);

        return res.end();


    } else if (req.url.toLowerCase() === "/calculator") {
        res.setHeader('Content-Type', 'text/html');
        res.write(`
        <html>
        <head><title>Practice Set</title></head>

        <body>

        <h1>Here is the Calculator</h1><br>

        <form action = "/calculate-result" method="POST">
        <input type = "text" placeholder="First Num" name = "first" />
        <input type = "text" placeholder="Second Num" name = "second" />
        <input type = "submit" value = "sum">
         </form>

        </body>
        </html>
        `);

        return res.end();
    }else if(req.url.toLowerCase() === "/calculate-result" && req.method === 'POST'){
        return sumRequestHandler(req,res);
    }

    res.setHeader('Content-Type', 'text/html');
    res.write(`
        <html>
        <head><title>Practice Set</title></head>

        <body>

        <h1>404 Page Does not Exist</h1><br>
        <a href = "/">Go To Home</a>

        </body>
        </html>
        `);

    return res.end();


    // res.end('Request received!');
};

exports.userHandler = userHandler;
