const express = require('express');

const app = express();

app.use(express.json());

const booksRouter = require('./routes/books.routes');
const userRoutes = require('./routes/login.routes');

app.use('/books', booksRouter);
app.use('/login', userRoutes);


module.exports = app;
