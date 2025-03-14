import express from 'express';
const app = express();
import path from 'path';
import fs from 'fs';

app.use(express.static('public'));

import { getMatches } from './util/matches.js';

const header = fs.readFileSync('./public/components/header/header.html');
const footer = fs.readFileSync('./public/components/footer/footer.html');

console.log(header);
console.log(footer);

const frontpage = fs.readFileSync('./public/frontpage/frontpage.html').toString(); // toString() is added, so that when you print it, you get the string rather than the bit array thing.
const matches = fs.readFileSync('./public/matches/matches.html').toString(); // toString() is added, so that when you print it, you get the string rather than the bit array thing.

const frontpagePage = header + frontpage + footer;
const matchesPage = header + matches + footer;

console.log(frontpagePage);

app.get('/', (req, res) => {
	// It's better to have this globally scoped, to save memory, since you don't want to create a new frontpage everytime you load it.
	// const frontpage = fs.readFileSync('./public/frontpage/frontpage.html');
	console.log(frontpage);
	res.send(frontpagePage);
	// res.sendFile(path.resolve('./public/frontpage/frontpage.html'));
});

app.get('/matches', (req, res) => {
	res.send(matchesPage);
	// res.sendFile(path.resolve('./public/matches/matches.html'));
});

app.get('/api/matches', async (req, res) => {
	const matches = await getMatches();
	res.send({ data: matches });
});

console.log(process.env.PORT);

const PORT = Number(process.env.PORT) || 8080;
const server = app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`, server.address().port);
});
