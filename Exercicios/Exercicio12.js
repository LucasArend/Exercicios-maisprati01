// Crie um programa que exibe a tabuada de um número fornecido pelo usuário (de 1 a 10) utilizando um loop for. 
const Exercicio12 =  () => { 
    const prompt = require('prompt-sync')()

    let valor = Number(prompt("Insira o numero que deseja saber a tabuada: "))

    let resultado = 0

    if (!isNaN(valor)){

        for (var i = 1; i <= 10; i++){

            resultado = valor*i

            console.log(resultado)
        }

    }else{
        console.log("Não é um numero, tente novamente!")
    }
}

module.exports = Exercicio12;