const express = require('express');
const bodyParser = require('body-parser'); // faz o parse das informações quando realiza um post
const bookRoutes = require('./routes/bookRoutes'); // rotas dos livros

const app = express(); // define o servidor como express
app.use(bodyParser.json()); // função para realizar o parse
app.use('/api', bookRoutes);// rota api

// Definir a porta do servidor
const PORT = process.env.PORT || 3000;

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});