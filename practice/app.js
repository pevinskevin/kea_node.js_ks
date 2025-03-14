'use strict';

const express = require('express');
const app = express();
const port = 8080;

const obj = {};

app.get('/', (req, res) => {
	res.send('Hello');
});

app.post('/send', (req, res) => {});

app.listen(port, {});
