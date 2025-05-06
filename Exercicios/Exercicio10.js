//Escreva um algoritmo para ler um número inteiro e escrevê-lo na tela 10 vezes.
const Exercicio10 =  () => { 

    const prompt = require('prompt-sync')()

    let valor = Number(prompt("Insira um valor para ser impresso 10 vezes: "))

    valor = parseInt(valor)

    if (!isNaN(valor)){
        for(var i = 0; i<10; i++ ){
            console.log(valor)
        }
    }else{
        console.log("Não é um numero!")
    }
}
module.exports = Exercicio10;