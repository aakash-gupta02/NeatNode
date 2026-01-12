import { Request, Response } from 'express';
import { Todo } from '../models/todo.model.js';

export const getTodos = async (req: Request, res: Response) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });
    res.json({ success: true, data: todos });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server error' });
  }
};

export const createTodo = async (req: Request, res: Response) => {
  try {
    const { title }: { title: string } = req.body;
    
    if (!title || title.trim() === '') {
      res.status(400).json({ success: false, error: 'Title is required' });
      return;
    }
    
    const todo = await Todo.create({ title });
    res.status(201).json({ success: true, data: todo });
  } catch (error) {
    res.status(500).json({ success: false, error: 'Server error' });
  }
};