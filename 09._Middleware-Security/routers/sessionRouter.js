import { Router } from 'express';
const router = Router();

router.get('/session/fillbananas', (req, res) => {
	req.session.bananasCount = req.session.bananasCount + 1 || 1;
	console.log(req.session);
	res.send({ message: `You have ${req.session.bananasCount} bananas` });
});

router.get('/session/eatbananas', (req, res) => {
	const bananas = req.session.bananasCount || 0;
	if (!bananas) {
		res.send({ message: 'No more bananers. Boo-hoo.' });
	} else {
		req.session.bananasCount -= 1;
		res.send({ message: `You have ${req.session.bananasCount} bananers left.` });
	}
});

export default router;
