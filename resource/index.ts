import { Server } from 'http';

const server: Server = new Server();

server.on('request', (req, res): void => {
  res.end('Hello!');
});

server.listen(8080, '0.0.0.0');