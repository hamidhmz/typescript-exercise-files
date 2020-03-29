import { Router, Request, Response } from 'express';

const route = Router();

route.get('/', (req: Request, res: Response) => {
	res.send('GET todoes');
});

route.post('/', (req: Request, res: Response) => {
	res.send('post todoes');
});

route.delete('/:id', (req: Request, res: Response) => {
	res.send('delete todoes');
});

route.patch('/:id', (req: Request, res: Response) => {
	res.send('patch todoes');
});

export default route;
