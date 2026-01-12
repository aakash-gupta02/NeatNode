import express, { Request, Response } from 'express';
import morgan from 'morgan';


// Initialize Express app
const app = express();

// Body parsers
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// HTTP request logger
app.use(morgan('dev'));

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, World!');
});

export default app;
