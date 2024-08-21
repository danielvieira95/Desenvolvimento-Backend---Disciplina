class Casa {
    // Atributos definem características
    constructor() {
      this.cor = null; // Inicializa o atributo 'cor'
    }
  }
  
  // Função principal para execução do código
  function main() {
    const nome = "Daniel";
    const minhaCasa = new Casa(); // Instancia a classe em um objeto
    minhaCasa.cor = "Blue";
    console.log(minhaCasa.cor);
  }
  // Chama a função principal para executar o código
  main();
  