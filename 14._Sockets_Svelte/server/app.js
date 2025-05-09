import express from 'express';
const app = express();

import http from 'http';

const server = http.createServer(app);

import { Server } from 'socket.io';

const io = new Server(server);

io.on('connection', (socket) => {
	console.log('A client connected', socket.id);

	socket.on('client-sends-color', (data) => {
		console.log('A client sent the color', data);

		// emits to all sockets, including itself.
		io.emit('server-sends-color', data);

		// emits to all sockets, except itself
		// socket.broadcast.emit('server-sends-color', data);

		// emits to its own socket.
		// socket.emit('server-sends-color', data);
	});

	socket.on('disconect', () => {
		console.log('A client has disconnected', socket.id);
	});
});

const PORT = process.env.PORT || 8080;
server.listen(PORT, (req, res) => {
	console.log(`Server is running on port ${PORT}.`);
});
