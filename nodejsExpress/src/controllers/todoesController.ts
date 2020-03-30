import { RequestHandler } from 'express';
import { Todo } from '../models';

const todos: Todo[] = [];

export const TodoPost: RequestHandler = async function(req, res, next) {
	const text = (req.body as { text: string }).text;
	const id = Math.random()
		.toString()
		.split('.')[1];
	const newTodo = new Todo(id, text);

	todos.push(newTodo);

	res.status(201).send({ message: 'success', newTodo });
};

export const TodoGet: RequestHandler = async function(req, res, next) {
	res.send(todos);
};
export const TodoPatch: RequestHandler = async function(req, res, next) {
    const text = (req.body as { text: string }).text;
	const id = req.params.id;
	if (!id) {
		return res.status(400).send({ message: 'id required' });
	}
	const goalIndex:number = todos.findIndex(Element => {
		return Element.id === id;
    });
    
	if (!(goalIndex < 0)) {
		todos[goalIndex] = new Todo(id, text);
		res.status(200).send({ message: 'updated successfully' });
	} else {
		res.status(400).send({ message: 'id does not exists' });
	}
};
export const TodoDelete: RequestHandler = async function(req, res, next) {
	const id = req.params.id;
	if (!id) {
		return res.status(400).send({ message: 'id required' });
	}
	const goalIndex:number = todos.findIndex(Element => {
		return Element.id === id;
    });
    
	if (!(goalIndex < 0)) {
		todos.splice(goalIndex, 1);
		res.status(200).send({ message: 'deleted success fully' });
	} else {
		res.status(400).send({ message: 'id does not exists' });
	}
};
