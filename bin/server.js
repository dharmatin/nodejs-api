import app from "../app";
import http from "http";

const server = http.createServer(app);

const normalizePort = (val) => {
    let port = parseInt(val, 10);

    if (isNaN(port))
        return val;
    
    if (port >=0)
        return port;
    
    return false;
}

const onError = (error) => {
    if (error.syscall !== 'listen') {
        throw error;
    }
    let bind = typeof port === 'string' ? 'Pipe ' + port : 'Port ' + port;
    
    switch (error.code) {
        case 'EACCES':
            console.error(bind + ' requires elevated privileges');
            process.exit(1);
        break;
        case 'EADDRINUSE':
            console.error(bind + ' is already in use');
            process.exit(1);
        break;
        default:
            throw error;
    }
}

const onListening = () => {
    var addr = server.address();
    var bind = typeof addr === 'string' ? 'pipe ' + addr : 'port ' + addr.port;
    console.log(`Server Running On Port ${process.env.PORT}`);
}

const port = normalizePort(process.env.PORT || 3000);

app.set("port", port);
server.listen(port);
server.on('error', onError);
server.on('listening', onListening);
