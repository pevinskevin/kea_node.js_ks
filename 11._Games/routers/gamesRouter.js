import { Router } from 'express';
import db from '../database/connection.js';

const router = Router();

router.get('/games', async (req, res) => {
	const result = await db.all('SELECT * FROM games');
	console.log(result);
	
	res.send({ data: result });
});

router.post('/games', async (req, res) => {
	if (!req.body.title) {
		res.status(400).send({ errorMessage: 'You are missing the title key in the body' });
	}
	try {
		await db.run(`INSERT INTO games ("title", "short_description",) values (?, ?)`, [req.body.title, req.body.short_description]);
		res.send({ data: result.lastId });
	} catch (error) {
		console.log(error);
		res.status(500).send({ errorMessage: 'Database error: Inserting a game' });
	}

	res.send({});
});

export default router;
