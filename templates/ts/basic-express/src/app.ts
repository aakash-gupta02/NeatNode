import express, { Request, Response } from 'express';
import morgan from 'morgan';

// ROUTE_IMPORTS_START
import todoRoutes from './routes/todo.route.js';
// ROUTE_IMPORTS_END

// Initialize Express app
const app = express();

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// HTTP request logger
app.use(morgan('dev'));

// Routes
app.get('/', (req: Request, res: Response) => {
    res.send('Hello, World!');
});

// ROUTE_USES_START
app.use('/api/todos', todoRoutes);
// ROUTE_USES_END


export default app;
