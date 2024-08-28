estudante = {
    nome: 'Daniel',
    idade:29,
    escola: 'Senai Roberto mange',
    RG: '15001313820'
}
//console.log(estudante)
//console.log(estudante.escola)
//console.log(`nome ${estudante.nome} CPF ${estudante.RG.substring(0,3)}`)

function exibeInfoEstudante(objEstudante,infoEstudante){
   return objEstudante[infoEstudante]

}
console.log(exibeInfoEstudante(estudante,'nome'))
console.log(estudante['pet'])