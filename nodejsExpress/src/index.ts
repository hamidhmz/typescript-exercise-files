import express, { Request, Response, NextFunction } from 'express';
import { json } from 'body-parser';
import { todoes } from './routes/index';
const app = express();
const port = 3001;

app.use('/todoes', todoes);
app.use(json());

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	res.status(500).send(err);
});

app.listen(port, () => {
	console.log(`app is listening to ${port} port`);
});
