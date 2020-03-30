import express, { Request, Response, NextFunction } from 'express';
import { json } from 'body-parser';
import { todoesRoute } from './routes/index';
const app = express();
const port = 3001;
app.use(json());
// app.all('*',(req,res,next)=>{
// 	res.send(req.body)
// })
app.use('/todoes', todoesRoute);

app.use((err: Error, req: Request, res: Response, next: NextFunction) => {
	res.status(500).send(err);
});

app.listen(port, () => {
	console.log(`app is listening to ${port} port`);
});
