const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3001;
const authRoutes = require('./routes/auth');
const prisma = require('./db/client');

// Middleware
app.use(express.json());

app.use(cors({origin: true, credentials: true})); // Enable CORS for all origins
app.use('/api/auth', authRoutes);
// Routes

app.get('/api/users', async (req, res) => {
  const users = await prisma.user.findMany();
  res.json(users);
});

app.get('/', (req, res) => {
  res.send('Backend is running');
});



// CRON Jobs
require('./cron');

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
