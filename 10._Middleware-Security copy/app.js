import express from 'express';
const app = express();


function greetLoggedInUsers(req, res, next) {
	console.log('Welcome, logged in user.');
	next();
}
app.use('/auth', greetLoggedInUsers);

// app.get('*', (req, res) => {
// 	res.send("<h1>What would this be?</h>");
// });

import helmet from 'helmet';
app.use(helmet());

import { rateLimit } from 'express-rate-limit';

const limiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 100, // Limit each IP to 100 requests per `window` (here, per 15 minutes).
	standardHeaders: 'draft-8', // draft-6: `RateLimit-*` headers; draft-7 & draft-8: combined `RateLimit` header
	legacyHeaders: false, // Disable the `X-RateLimit-*` headers.
	// store: ... , // Redis, Memcached, etc. See below.
});

// Apply the rate limiting middleware to all requests.
app.use(limiter);
const authLimiter = rateLimit({
	windowMs: 15 * 60 * 1000, // 15 minutes
	limit: 5,
	standardHeaders: 'draft-8',
	legacyHeaders: false,
});
app.use('/auth', authLimiter);

import session from 'express-session';
import dotenv from 'dotenv/config';



app.use(
	session({
		secret: 'keyboard cat',
		resave: false,
		saveUninitialized: true,
		cookie: { secure: false },
	})
);

import middlewareRouter from './routers/middlewareRouter.js';
app.use(middlewareRouter);
import sessionRouter from './routers/sessionRouter.js';
app.use(sessionRouter);
import authRouter from './routers/authRouter.js';
app.use(authRouter);

app.all('/{*splat}', (req, res) => {
	if (req.method == 'GET') {
		return res.status(404).send('<h1>Not found </h>');
	}
	res.status(404).send({ message: `${req.path} for ${req.method} not found` });
});

const PORT = Number(process.env.PORT) || 8080;
app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
