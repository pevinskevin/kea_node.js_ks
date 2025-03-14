'use strict';

const express = require('express');
const app = express();

const fingerbone = { name: 'phalange', id: '1' };

const fingerboneArray = [fingerbone];

app.use(express.json());

app.get('/fingerbones', (req, res) => {
	res.send(fingerboneArray);
});

app.get('/fingerbones/{id}', (req, res) => {
	res.send(fingerboneArray[id - 1]);
});

app.post('/fingerbones', (req, res) => {
	res.send('Fingerbone created');
});

app.put('/fingerbones/{id}', (req, res) => {
	res.send('Hello, world!');
});

app.patch('/fingerbones/{id}', (req, res) => {
	res.send('');
});

app.delete('/fingerbones/{id}', (req, res) => {
	res.send('Fingerbone with {id} deleted.');
});

app.get('/proxy', (req, res) => {
	fetch('https://www.google.com')
		.then((response) => response.text())
		.then((data) => {
			res.send(data);
		});
});

app.listen(8081, () => {
	console.log('Server is running.');
});
