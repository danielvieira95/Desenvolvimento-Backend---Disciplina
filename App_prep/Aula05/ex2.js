// Cria a variável anoAtual e atribui a ela o ano atual
let anoAtual = new Date().getFullYear();

// Cria o objeto livro com as propriedades título, autor, anoDePublicacao e gênero
let livro = {
    titulo: "O Nome do Vento",
    autor: "Patrick Rothfuss",
    anoDePublicacao: 2007,
    genero: "Fantasia"
};

// Adiciona a propriedade idadePublicacao ao objeto livro
livro.idadePublicacao = anoAtual - livro.anoDePublicacao;

// Exibe o objeto livro no console
console.log(livro);
console.log(livro.idadePublicacao)
