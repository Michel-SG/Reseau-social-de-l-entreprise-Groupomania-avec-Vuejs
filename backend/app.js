const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();

const adminRoutes = require('./routes/admin');
const userRoutes = require('./routes/user');
const wallRoutes = require('./routes/wall');
const app = express();


app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

app.use(bodyParser.json());

// middleware to access from different Routers
app.use('/api/admin', adminRoutes);
app.use('/api/user', userRoutes);
app.use('/api/wall',  wallRoutes);

module.exports = app;