import express from 'express';
const app = express();

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));


import pagesRouter from './routers/pagesRouter.js';
import matchesRouter from './routers/matchesRouter.js';
import contactRouter from './routers/contactRouter.js';

app.use(pagesRouter);
app.use(matchesRouter);
app.use(contactRouter);

console.log(process.env.PORT);

const PORT = Number(process.env.PORT) || 8080;
const server = app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}.`, server.address().port);
});

