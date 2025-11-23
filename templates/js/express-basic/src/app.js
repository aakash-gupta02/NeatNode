import express from 'express';
import cors from 'cors';
import morgan from 'morgan';

import notFoundMiddleware from './middleware/notFound.middleware.js';
import { sendResponse } from './utils/responseHandler.js';
import indexRouter from './routes/index.route.js';

// ROUTE_IMPORTS_START
import todoRouter from './routes/todo.route.js';
// ROUTE_IMPORTS_END

// Initialize Express app
const app = express();


// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(morgan('dev'));

// Routes
app.use('/api', indexRouter);


// ROUTE_USES_START
app.use('/api/todo', todoRouter);
// ROUTE_USES_END



// Root Route
app.get('/', (req, res) => {
  sendResponse(res, 'Welcome to Express Basic Template API');
});



// 404 Middleware
app.use(notFoundMiddleware);



export default app;