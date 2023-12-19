import http from 'http';
import SocketService  from './service/socket';

async function init() {
    const socketService = new SocketService();
    const httpServer = http.createServer();
    const PORT = process.env.PORT ?process.env.port: 8000;

    socketService.io.attach(httpServer);
    httpServer.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
    });
    socketService.initListeners();
}

init();