const estudante = "Daniel";
const docente = "Filipe";
const disciplina = "Backend";
console.log (estudante + "\n" +"\n" + docente +  "\n" + disciplina);
console.log(`o estudante chama ${estudante}`);
const senha = "100455" + estudante.toUpperCase();
console.log(senha);
const cifrao = '\u0024'
const aMaiusculo = '\u0041'
const tique = '\u2705'
const hiragana = '\u3041'
let tel_estudante = null; // variavel com valor vazio
console.log(tel_estudante);
console.log(cifrao)
console.log(aMaiusculo)
console.log(tique)
console.log(hiragana)
let resultado;
resultado = 10 + 5 * 2 / 3 - 7 + 15 * 3 / 5 + 20 - 4 * 2;
console.log("O resultado da expressão é:", resultado);
function exibeInfoEstudantes(nome,nota){
    return `o nome é ${nome} e a nota é ${nota}`;
}
console.log(exibeInfoEstudantes("Daniel",8));