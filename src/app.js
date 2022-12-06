const express = require('express');

const app = express();

app.use(express.json());

const booksRouter = require('./routes/books.routes');

app.use('/books', booksRouter);

module.exports = app;
