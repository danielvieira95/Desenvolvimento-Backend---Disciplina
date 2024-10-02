// arquivo principal da api
// inicia o servidor

const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser');
// inicialização do app

const app = express();
app.use(cors());
app.use(express.json());

// Conexão com o mongo db

mongoose.connect('mongodb+srv://danielvieira2006:da2576896@cluster0.j1d4z.mongodb.net/library'
   
    ,{
    useNewUrlParser:true,useUnifiedTopology:true
    
}).then(()=>console.log('Mongodb conectado')).catch(err=>console.error('Erro ao conectar no mongo',err));

// Importação das rotas
const bookRoutes = require('./Routes/books');
app.use('/api/books',bookRoutes); // irá retornar a rota dos livros
// Define a porta do servidor
app.listen(3000,()=>{
    console.log('Servidor executando na porta 3000');
});