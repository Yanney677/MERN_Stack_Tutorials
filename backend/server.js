const express = require('express');
require('dotenv').config(); // Load environment variables from .env file
const port = process.env.PORT || 5000;

const app = express();

app.use('/api/goals', require('./routes/goalRoutes.js'))

app.listen(port, () => console.log(`Server started on port ${port}`));