const express = require('express');
const bodyParser = require('body-parser');
const session = require('cookie-session')
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
app.use(session({
  secret: "s3Cur3",
  cookie: { secure: true,
            httpOnly: true,
            domain: 'http://localhost:3000',
          }
  })
);

app.use(bodyParser.json());

// middleware to access from different Routers
app.use('/api/admin', adminRoutes);
app.use('/api/user', userRoutes);
app.use('/api/wall',  wallRoutes);

module.exports = app;