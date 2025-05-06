// Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado"
// utilizando if-else if. 

const Exercicio03 =  () => {
    const prompt = require('prompt-sync')()

    let nota = Number(prompt("Insira uma nota de 0 a 10 para saber se foi reprovado ou não: "))


    if(nota <6){
        console.log("Reprovado");
    }else if(nota >7){
        console.log("Aprovado");
    }else{
        console.log("Recuperação");
    }
}

module.exports = Exercicio03;