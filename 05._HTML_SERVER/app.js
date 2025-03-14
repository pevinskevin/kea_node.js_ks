// const express = require('express');

import express from 'express';
import path from 'path';

import partiesLibraryESModules from './util/partiesLibraryES.js';

const app = express();
const port = 8080;

let visitorCount = 0;

// const partiesLibrary = require('./util/partiesLibrary.js');

// Makes routes/endpoints for all of your static files.
app.use(express.static('public')); // Anything not declared in the public directory is considered private for the client.
// That also means that any scripts/files outside of public isn't call-able/useable by HTML etc.

// console.log(partiesLibrary)

app.get('/', (req, res) => {
	// path.resolve will resolve the pathing issue.
	res.sendFile(path.resolve('./public/frontpage/frontpage.html'));
});

// task create a route /visitorcounts that returns the visitor count

app.get('/visitorcount', (req, res) => {
	res.send({ data: ++visitorCount });
});

app.get('/partypage', (req, res) => {
	res.sendFile(path.resolve('./public/partypage/partypage.html'));
});

app.get('/redirect', (req, res) => {
	// Server side redirection
	res.redirect('/favoritethings');
});

app.listen(port, (req, res) => {
	console.log(`Server is running on ${port}`);
});
