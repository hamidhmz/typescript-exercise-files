import { Router, Request, Response } from 'express';
import { TodoPost, TodoGet,TodoDelete,TodoPatch } from '../controllers';

const route = Router();

route.get('/', TodoGet);

route.post('/', TodoPost);

route.delete('/:id', TodoDelete);

route.patch('/:id', TodoPatch);

export default route;
