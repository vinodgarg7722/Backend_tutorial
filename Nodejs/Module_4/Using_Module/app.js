  const http = require('http');
  
  const reqHandler = require('./user')

  const server = http.createServer(reqHandler)

  const PORT = 3000;
  
server.listen(PORT, () => {
      console.log('Server is running on http://localhost:3000');
  });
  