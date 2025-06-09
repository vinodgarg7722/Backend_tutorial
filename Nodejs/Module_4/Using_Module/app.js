  const http = require('http');
  
  const reqHandler = require('./user')

  const server = http.createServer(reqHandler)

  
server.listen(3000, () => {
      console.log('Server is running on http://localhost:3000');
  });
  