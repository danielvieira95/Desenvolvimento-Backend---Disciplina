class Casa {
    // Atributos definem características
    constructor() {
      this.cor = null; // Inicializa o atributo 'cor'
    }
  
    // Métodos definem o que os objetos podem fazer
    abrirJanela(qtdeJanelas) {
      console.log(`Abrir Janela, qtde janelas ${qtdeJanelas}`);
    }
  
    abrirPorta() {
      console.log(`Abrir porta da casa ${this.cor}`);
    }
  
    abrirCasa() {
      this.abrirJanela(2);
      this.abrirPorta();
    }
  }
  // Função principal para execução do código
function main() {
    const minhaCasa = new Casa(); // Instancia a classe em um objeto
    minhaCasa.cor = "Blue";
    minhaCasa.abrirCasa();
  }
  
  // Chama a função principal para executar o código
  main();
  
  
  
  