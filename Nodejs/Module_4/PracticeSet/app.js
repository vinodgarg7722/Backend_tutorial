  const http = require('http');
  const userHandler = require('./user'); // ✅ Correct import


  const server = http.createServer(userHandler)

  
server.listen(3000, () => {
      console.log('Server is running on http://localhost:3000');
  });
  