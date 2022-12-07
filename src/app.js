const express = require('express');

const app = express();

app.use(express.json());

const booksRouter = require('./routes/books.routes');
const usersRoutes = require('./routes/login.routes');
const wishesRoutes = require('./routes/wishes.routes');
const readingsRoutes = require('./routes/readings.routes');

app.use('/books', booksRouter);
app.use('/login', usersRoutes);
app.use('/wishes', wishesRoutes);
app.use('/readings', readingsRoutes);

module.exports = app;
