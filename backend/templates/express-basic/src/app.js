import express from 'express';
import notFoundMiddleware from './middleware/notFound.middleware.js';
import {router as indexRouter} from './routes/index.route.js';
import { sendResponse } from './utils/responseHandler.js';
import cors from 'cors';
import morgan from 'morgan';

// Initialize Express app
const app = express();


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));


// Routes
app.use('/api', indexRouter);

app.get('/', (req, res) => {
  sendResponse(res, 'Welcome to Express Basic Template API');
});

// 404 Middleware
app.use(notFoundMiddleware);



export default app;