require('dotenv').config();

const app = require('./app');

const PORT = process.enc.PORT | 3001;

app.listen(PORT, console.log(`Servidor na porta ${PORT}`));