const http = require('http');

const server = http.createServer((req, res) => {
    console.log("URL is =>", req.url);
    console.log("Method is =>", req.method);
    console.log("Headers are =>", req.headers);

    res.setHeader('Content-Type', 'text/html');

    if (req.url === '/') {
        res.write('<html>');
        res.write('<head><title>user input</title></head>');
        res.write('<body>');
        res.write('<h1>Home Page</h1><br><br>');

        res.write('<h3>Enter your Details</h3>');

        res.write('<form method="POST" action="/submit-details">');

        res.write('<input type="text" name="username" placeholder="Enter your name" required><br><br>');
        
        res.write('<label for="gender">Gender:</label><br>');
        res.write('<input type="radio" id="male" name="gender" value="male">');
        res.write('<label for="male">Male</label><br>');

        res.write('<input type="radio" id="female" name="gender" value="female">');
        res.write('<label for="female">Female</label><br><br>');

        res.write('<button type="submit">Submit</button>');
        res.write('</form>');

        res.write('</body>');
        res.write('</html>');
        return res.end();
    } else if (req.url === '/products') {
        res.write('<html>');
        res.write('<head><title>Routing Request</title></head>');
        res.write('<body><h1>Products Page</h1></body>');
        res.write('</html>');
        return res.end();
    }

    // Default fallback
    res.write('<html>');
    res.write('<head><title>Routing Request</title></head>');
    res.write('<body><h1>page not exist - but detail submit</h1></body>');
    res.write('</html>');
    return res.end();
});

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
