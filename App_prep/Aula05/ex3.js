// Criando um objeto simples chamado pessoa
let pessoa = {
    nome: "Daniel",
    idade: 29,
    profissão: "Engenheiro Eletrônico",
    saudacao: function() {
        return "Olá, meu nome é " + this.nome;
    }
};

// Acessando as propriedades e métodos do objeto
console.log(pessoa.nome);         // Saída: João
console.log(pessoa.idade);        // Saída: 30
console.log(pessoa.profissão);    // Saída: Engenheiro
console.log(pessoa.saudacao());   // Saída: Olá, meu nome é João
