// Criando um objeto vazio
let carro = {};

// Adicionando propriedades ao objeto
carro.marca = "Toyota";
carro.modelo = "Corolla";
carro.ano = 2021;
carro.acelerar = function() {
    return "O carro está acelerando!";
};

// Acessando as propriedades e métodos do objeto
console.log(carro.marca);       // Saída: Toyota
console.log(carro.modelo);      // Saída: Corolla
console.log(carro.ano);         // Saída: 2021
console.log(carro.acelerar());  // Saída: O carro está acelerando!
