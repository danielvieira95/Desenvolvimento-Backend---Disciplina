// Criando o objeto livro
let livro = {
    titulo: "O Senhor dos Anéis",
    autor: "J.R.R. Tolkien",
    anoDePublicacao: 1954,
    genero: "Fantasia",
    idadeDePublicacao: new Date().getFullYear() - 1954,
    avaliacao: null
};

// Função para adicionar uma avaliação ao objeto livro
function adicionarAvaliacao(novaAvaliacao) {
    if (livro.avaliacao === null) {
        livro.avaliacao = novaAvaliacao;
        console.log("Avaliação adicionada com sucesso.");
    } else {
        console.log("O livro já possui uma avaliação.");
    }
}

// Tentando adicionar uma avaliação ao livro
adicionarAvaliacao(4.5);

// Tentando adicionar outra avaliação para demonstrar o comportamento
adicionarAvaliacao(4.7);

// Exibindo o objeto livro no console
console.log(livro);
