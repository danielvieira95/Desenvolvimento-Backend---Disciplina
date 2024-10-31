const express = require('express')
const mongoose = require('mongoose')
const bodyParse = require('body-parser')
const gameRoutes = require('./routes/game')
const path = require('path')

const app = express()
mongoose.connect('mongodb+srv://danielvieira2006:Dan3076896@cluster0.j1d4z.mongodb.net/ps5games'
   
    ,{
    useNewUrlParser:true,useUnifiedTopology:true
    
}).then(()=>console.log('Mongodb conectado')).catch(err=>console.error('Erro ao conectar no mongo',err));

app.use(bodyParse.json())
app.use('/uploads',express.static(path.join(__dirname,'uploads')));
app.use('/api/games',gameRoutes);

const Port = 3000;
app.listen(Port,()=>{
    console.log(`Servidor rodando na porta ${Port}`);
})