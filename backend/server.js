import express from 'express';
import colors from 'colors';
import router from './routes/goalRoutes.js';
import { errorHandler } from './middleware/errorMiddleware.js';
import connectDB from './config/db.js';
const port = process.env.PORT || 5000;

connectDB();

const app = express();

// body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// routes
app.use('/api/goals', router);

// error handler
app.use(errorHandler);

app.listen(port, () => console.log(`Server running on port: ${port}`));
