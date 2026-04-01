const express = require('express');
const sequelize = require('./config/database');
const Record = require('./models/Record');
const authorize = require('./middleware/auth');

const app = express();
app.use(express.json());

// Get Records (Accessible by user and admin)
app.get('/api/records', authorize(['admin', 'user']), async (req, res) => {
  const records = await Record.findAll({ where: req.query });
  res.json(records);
});

// Dashboard Summary (Admin Only)
app.get('/api/dashboard', authorize(['admin']), async (req, res) => {
  const summary = await Record.findAll({
    attributes: ['type', [sequelize.fn('SUM', sequelize.col('amount')), 'total']],
    group: ['type']
  });
  res.json(summary);
});

// Create Record
app.post('/api/records', authorize(['admin']), async (req, res) => {
  const record = await Record.create(req.body);
  res.status(201).json(record);
});

sequelize.sync().then(() => {
  app.listen(3000, () => console.log('Server running on http://localhost:3000'));
});