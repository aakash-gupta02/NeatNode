import mongoose from 'mongoose';

export interface ITodo extends mongoose.Document {
  title: string;
  completed: boolean;
}

const todoSchema = new mongoose.Schema<ITodo>({
  title: { 
    type: String, 
    required: true,
    trim: true
  },
  completed: { 
    type: Boolean, 
    default: false 
  }
}, {
  timestamps: true
});

export const Todo = mongoose.model<ITodo>('Todo', todoSchema);