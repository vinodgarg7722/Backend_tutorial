const http = require('http');



const Server = http.createServer((req , res) =>{

    // Req object 
    console.log("URL is => ",req.url);
    console.log();
    console.log("Methods is => " ,req.method);
    console.log();
    console.log("Headers are =>",req.headers);

    // process.exit()

    //Res Object
    // res.setHeader('Content-Type','json');

    if (req.url === '/'){ 

    res.setHeader('Content-Type','text/html');

    res.write('<html>')
    res.write('<head><title>Routing Request</title></head>')
    res.write('<body><h1>Handling Response object - Home Page</h1></body>')
    res.write('</html>')

    res.end()

    return;
    

    }else if(req.url === '/products'){

    res.setHeader('Content-Type','text/html');

    res.write('<html>')
    res.write('<head><title>Routing Request</title></head>')
    res.write('<body><h1>Handling Response object - Products page</h1></body>')
    res.write('</html>')
    
    res.end()

    return

    }


    res.setHeader('Content-Type','text/html');

    res.write('<html>')
    res.write('<head><title>Routing Request</title></head>')
    res.write('<body><h1>Handling Response object - default page</h1></body>')
    res.write('</html>')

    res.end()
    return;
    
    
})

const port = 3000 
Server.listen(port , ()=>{
    console.log(`Server running on address http://localhost:${port}`)
})