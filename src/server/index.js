import http from 'http';
import koa from 'koa';
import logger from 'koa-logger';
import serve from 'koa-static';
import socketio from 'socket.io';

const port = 3000;

const app = koa();
app.use(logger());
app.use(serve('public'));

const server = http.createServer(app.callback());

const io = socketio(server);

io.on('connection', (socket) => {
    console.log('new socket.io connection');
});

server.listen(port);
console.log(`Listening on port ${port}`);
