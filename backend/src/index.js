const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;

// Middleware
app.use(express.json());

// Routes
app.get('/', (req, res) => {
  res.send('Backend is running');
});

// CRON Jobs
require('./cron');

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
