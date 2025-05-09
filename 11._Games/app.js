import express from 'express';
const app = express();

app.use(express.json());

import gamesRouter from './routers/gamesRouter.js';
app.use('/api', gamesRouter);

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => {
	console.log(`App is running on port: ${PORT}.`);
});
