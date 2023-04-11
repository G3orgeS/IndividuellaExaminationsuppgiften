const express = require('express');
const app = express();

app.use(express.json());

app.use('/api/films', require('./controllers/filmController'))
app.use('/api/order', require('./controllers/orderController'))
app.use('/api/user', require('./controllers/userController'))

module.exports = app;