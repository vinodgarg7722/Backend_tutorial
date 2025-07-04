const http = require('http');
const { userHandler } = require('./handler'); // Import from handler.js

const server = http.createServer(userHandler);

server.listen(3000, () => {
    console.log('Server is running on http://localhost:3000');
});
