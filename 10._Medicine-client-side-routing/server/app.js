// DOTENV SHOULD ALWAYS BE YOUR FIRST IMPORT
// // Old way
// import dotenv from 'dotenv/config';
// Better since we never use the 'dotenv' variable.
import 'dotenv/config';

import express from 'express';
const app = express();
const PORT = Number(process.env.PORT) || 8080;

// Only good for dev, as it won't work in prod.
import cors from 'cors';
app.use(
	cors({
		origin: true,
		credentials: true
	})
);

app.use(express.json());

// // manual way of setting up CORS.
// app.use((req, res, next) => {
// 	res.header('Access-Control-Allow-Origin', '*');
// 	res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
// 	next();
// });

import session from 'express-session';
app.use(
	session({
		secret: process.env.SESSION_SECRET,
		resave: false,
		saveUninitialized: true,
		cookie: { secure: false }, // false when it's running HTTP
	})
);

import employeesRouter from './router/employeesRouter.js';
app.use(employeesRouter);
import pillsRouter from './router/pillsRouter.js';
app.use(pillsRouter);

app.get('/', (req, res) => {
	res.send('HellooOoOOO');
});

app.listen(PORT, (req, res) => {
	console.log(`Server is running on port: ${PORT}`);
});
