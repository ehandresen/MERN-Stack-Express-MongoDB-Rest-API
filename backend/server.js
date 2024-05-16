import express from 'express';
import router from './routes/goalRoutes.js';
const port = process.env.PORT || 5000;

const app = express();

// routes
app.use('/api/goals', router);

app.listen(port, () => console.log(`Server running on port: ${port}`));
