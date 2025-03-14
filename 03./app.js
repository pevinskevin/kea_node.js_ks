const express = require('express');

const app = express();

const birds = [
	{ id: 1, species: 'Red cardinal', color: 'Red', habitat: 'North America' },
	{ id: 2, species: 'Blue tit', color: 'Blue', habitat: 'North America' },
	{ id: 3, species: 'Sparrow', color: 'Brown', habitat: 'Northern Europe' },
	{ id: 4, species: 'Crow', color: 'Black', habitat: 'Europe' },
	{
		id: 5,
		species: 'Common pigeon',
		color: 'Multi-colored',
		habitat: 'Globally',
	},
];
let nextId = 6;

app.use(express.json());

app.get('/', (req, res) => {
	res.redirect('/birds');
});

// GET ALL
app.get('/birds', (req, res) => {
	res.send({ data: birds });
});

// GET SINGLE
app.get('/birds/:id', (req, res) => {
	const birdId = Number(req.params.id);
	const bird = birds.find((bird) => bird.id === birdId);

	res.send({ data: bird });
});

// POST
app.post('/birds', (req, res) => {
	const newBird = req.body;
	newBird.id = nextId++;
	birds.push(newBird);
	res.status(201).send(newBird);
});

// PUT
app.put('/birds/:id', (req, res) => {
	const birdIndex = birds.findIndex(
		(bird) => bird.id === Number(req.params.id)
	);
	if (birdIndex === -1)
		res.status(404).send({ error: `Bird with id ${birdId} does not exist.` });

	const updatedBird = req.body;
	updatedBird.id = req.params.id;

	// Replace old bird with new.
	birds[birdIndex] = updatedBird;
	res.status(201).send(birds[Number(req.params.id) - 1]);
});

// PATCH
app.patch('/birds/:id', (req, res) => {
	// My solution
	/*
    const birdId = req.params.id;
	const birdIndex = birds.findIndex(
		(bird) => bird.id === Number(req.params.id)
	);

	if (birdIndex === -1)
		res.status(404).send({ error: `Bird with id ${birdId} does not exist.` });
	// Get bird
	const bird = birds[birdIndex];

	// Patch bird property if it isn't undefined in the request body.
	if (req.body.species !== undefined) bird.species = req.body.species;
	if (req.body.color !== undefined) bird.color = req.body.color;
	if (req.body.habitat !== undefined) bird.habitat = req.body.habitat;
	res.status(200).send(birds[birdIndex]);
    */

	// Anders' solution
	const birdId = Number(req.params.id);
	const birdIndex = birds.findIndex((bird) => bird.id === birdId);

	if (birdIndex === -1)
		res.status(404).send(`Bird with ID ${birdId} doesn't exist.`);
	else {
		const existingBird = birds[birdIndex];
		const newBird = { ...existingBird, ...req.body, id: req.params.id };
		birds[birdIndex] = newBird;
		res.status(200).send(newBird);
	}
});

// DELETE
app.delete('/birds/:id', (req, res) => {
	const birdId = Number(req.params.id);
	const birdIndex = birds.findIndex((birds) => birds.id === birdId);
	if (birdIndex === -1)
		res.status(404).send({ error: `Bird with id ${birdId} does not exist.` });
	const deletedBird = birds.splice(birdIndex, 1);
	res.send(deletedBird);
});

// PORT listening
app.listen(8080, () => {
	console.log('Server is running.');
});
