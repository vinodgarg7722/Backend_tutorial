const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {

    console.log("URL is =>", req.url);
    console.log("Method is =>", req.method);
    console.log("Headers are =>", req.headers);
     

    if(req.url === "/Home"){
        res.write('<h1>Welcome to Home</h1>')
        return res.end()
    }else if(req.url === "/Men"){
        res.write('<h1>Welcome to Men</h1>')
        return res.end()
    }else if(req.url === "/Women"){
        res.write('<h1>Welcome to Women</h1>')
        return res.end()
    }else if(req.url === "/Kids"){
        res.write('<h1>Welcome to Kids</h1>')
        return res.end()
    }else if(req.url === "/Cart"){
        res.write('<h1>Welcome to Cart</h1>')
        return res.end()
    }                

    res.write(`
        <html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Myntra</title>
</head>
<body>
    <head>
        <nav>
            <ul>
                <li><a href="/Home">Home</a></li>
                <li><a href="/Men">Men</a></li>
                <li><a href="/Women">Women</a></li>
                <li><a href="/Kids">Kids</a></li>
                <li><a href="/Cart">Cart</a></li>
            </ul>
        </nav>
    </head>
</body>
</html>
        
        `)

    res.end()

})

server.listen(3001, () => {
    console.log('server running on address http://localhost:3001')
})