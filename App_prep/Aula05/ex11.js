estudante = {
    nome: 'Daniel',
    idade:29,
    escola: 'Senai Roberto mange',
    RG: '15001313820',
    telefones:['19982145194','19992345671'],
    endereco:[{
    rua: 'Av Brasilia',
    bairro: 'Perseu',
    n: '42'
},


]
}


estudante.endereco.push({ rua: 'Vila União',
    bairro: 'Tropical',
    n: '52'})

console.log(estudante.endereco)
console.log(estudante.endereco[1])
