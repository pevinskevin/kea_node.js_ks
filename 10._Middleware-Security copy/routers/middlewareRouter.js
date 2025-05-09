import { Router } from 'express';
const router = Router();

router.get('/cannotsetheadersaftertheyvebeensenterror', (req, res) => {
	if (true) {
		return res.send({ message: 'Welcome to room 1' });
	}
	res.send({ message: 'You are still in room 1' });
});

function greeter(req, res, next) {
	console.log('Hello there. Please enter the room');
	return next();
}

function ipLogger(req, res, next) {
	console.log(req.ip);
	return next();
}



router.get('/room', greeter, ipLogger, (req, res, next) => {
	// res.send({ message: 'Welcome to room 1' });

	return next();
});

router.get(
	'/room',
	(req, res, next) => {
		console.log('You are in the lobby for room 2');
		return next();
	},
	(req, res, next) => {
		// res.send({ message: 'Welcome to room 2' });
		return next();
	}
);

export default router;
