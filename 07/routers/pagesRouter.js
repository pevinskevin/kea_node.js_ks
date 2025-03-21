import { Router } from 'express';

const router = Router();


import { frontpagePage, matchesPage, contactPage } from "../util/pages.js";

router.get('/', (req, res) => {
	// It's better to have this globally scoped, to save memory, since you don't want to create a new frontpage everytime you load it.
	// const frontpage = fs.readFileSync('./public/frontpage/frontpage.html');
	res.send(frontpagePage);
	// res.sendFile(path.resolve('./public/frontpage/frontpage.html'));
});

router.get('/matches', (req, res) => {
	res.send(matchesPage);
	// res.sendFile(path.resolve('./public/matches/matches.html'));
});

router.get('/contact', (req, res) =>{
	res.send(contactPage);
})

export default router;
