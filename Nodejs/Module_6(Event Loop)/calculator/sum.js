const sumRequestHandler = (req, res) => {

    console.log("1. In sum Request Handler", req.url);

    const body = [];
    let result;

    req.on('data', (chunk) => {
        body.push(chunk);

        console.log("2. chunk came")
    })

    req.on('end', () => {
        console.log("3. End event came ")
        const bodystr = Buffer.concat(body).toString();
        const params = new URLSearchParams(bodystr);
        const bodyobj = Object.fromEntries(params);
        // const result = bodyobj.first+ bodyobj.second; // string therfore parse
        result = Number(bodyobj.first) + Number(bodyobj.second);
        console.log(result)
    });
    console.log("4. sending the response")
    res.setHeader('Content-Type', 'text/html');
    res.write(`
        <html>
        <head><title>Practice Set</title></head>

        <body>

        <h1>Your Sum is ${result}</h1><br>
        <a href = "/">Go To Home</a>

        </body>
        </html>
        `);

    return res.end();




}

exports.sumRequestHandler = sumRequestHandler;