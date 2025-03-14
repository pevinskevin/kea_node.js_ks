import express from 'express';
const app = express();
import path from 'path';

app.use(express.static('public'));

import { getMatches } from './util/matches.js';

import { frontpagePage, matchesPage } from './util/pages.js';

app.get('/', (req, res) => {
	// It's better to have this globally scoped, to save memory, since you don't want to create a new frontpage everytime you load it.
	// const frontpage = fs.readFileSync('./public/frontpage/frontpage.html');
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
