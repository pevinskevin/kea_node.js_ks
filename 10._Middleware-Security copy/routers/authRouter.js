import { Router } from 'express';
const router = Router();

function isAdmin(req, res, next) {
	// this simulates requesting a database if the user is admin.
	// the variable below would then set accordingly
	const userIsAdmin = true;
	if (userIsAdmin) {
		req.isAdmin = userIsAdmin;
		req.username = 'Johnnie';
		return next();
	}
	res.status(403).send({ message: 'Sorry. You do not have permission.' });
}

router.get('/auth/admin', isAdmin, (req, res) => {
	if (req.isAdmin === true) {
		res.send({ message: `You be da admin, ${req.username}.` });
	}
});



router.get('/user', (req, res) => {
	res.send({ message: "You're just a user, haha." });
});

export default router;
