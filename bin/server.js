import app from '../app';
import http from 'http';

const server = http.createServer(app);

const normalizePort = (val) => {
  let port = parseInt(val, 10);

  if (isNaN(port))
    return val;
    
  if (port >=0)
    return port;
    
  return false;
};

const onError = (error) => {
  if (error.syscall !== 'listen') {
    throw error;
  }  
  switch (error.code) {
  case 'EACCES':
    process.exit(1);
    break;
  case 'EADDRINUSE':
    process.exit(1);
    break;
  default:
    throw error;
  }
};

const onListening = () => {
  // console.log(`Server Running On Port ${process.env.PORT}`);
};

const port = normalizePort(process.env.PORT || 3000);

app.set('port', port);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
