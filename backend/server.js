import express from 'express';
import router from './routes/goalRoutes.js';
import { errorHandler } from './middleware/errorMiddleware.js';
const port = process.env.PORT || 5000;

const app = express();

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/api/goals', router);

// error handler
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port: ${port}`));
