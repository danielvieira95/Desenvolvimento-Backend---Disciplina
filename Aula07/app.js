const express = require('express') // variavel express que vai salvar uma requisição
const app = express() // variavel app armazena o express 
const port = 3000 // porta padrão para as aplicações em node

// cria uma requisição get

/*app.get('/',(req,res)=>{
    res.send('Hello World');

});
*/
// app post é para fazer um post na api com o express
app.get('/',(req,res)=>{
    res.send('Backend testes');

});
app.get('/usuario',(req,res)=>{
    res.send('Usuario admin');

});
// teste com requisição post
app.post('/',(req,resp)=>{
    res.send('Teste post');

})
app.listen(port,()=>{
    console.log(`Exemplo app ouvindo  port ${port}`);
});