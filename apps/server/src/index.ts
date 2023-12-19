import http from 'http';

async function init() {
    const httpServer = http.createServer();
    const PORT = process.env.PORT ?process.env.port: 8000;

    httpServer.listen(PORT, () => {
        console.log(`Server is listening on port ${PORT}`);
    });
}

init();