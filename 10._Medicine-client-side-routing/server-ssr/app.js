// DOTENV SHOULD ALWAYS BE YOUR FIRST IMPORT
// // Old way
// import dotenv from 'dotenv/config';
// Better since we never use the 'dotenv' variable.
import 'dotenv/config';

import express from 'express';
const app = express();
const PORT = Number(process.env.PORT) || 8080;

app.use(express.static(path.resolve('../client/dist/')));

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

import path from 'path';
app.get('/{*splat}', (req, res) => {
	res.sendFile(path.resolve('../client/dist/index.html'));
});

app.listen(PORT, (req, res) => {
	console.log(`Server is running on port: ${PORT}`);
});
