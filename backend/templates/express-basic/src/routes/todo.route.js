import express from 'express';
import { getTodos, createTodo, getTodoById, updateTodo, deleteTodo } from '../controllers/todo.controller.js';

const router = express.Router();

// read routes
router.get('/', getTodos);
router.get('/:id', getTodoById);

// create routes
router.post('/create', createTodo);
router.patch('/update/:id', updateTodo);
router.delete('/delete/:id', deleteTodo);

export default router;
