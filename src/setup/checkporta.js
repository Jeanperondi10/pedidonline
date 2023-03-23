const net = require('net');

module.exports.checkPort = function(port, cb) {
    const server = net.createServer();
  
    server.once('error', (err) => {
      if (err.code === 'EADDRINUSE') {
        // porta está sendo usada
        cb(false);
      } else {
        // outro erro
        cb(false);
      }
    });
  
    server.once('listening', () => {
      // porta está disponível
      server.close();
      cb(true);
    });
  
    server.listen(port);
  };