// Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while.   

const Exercicio14 =  () => { 
    const prompt = require('prompt-sync')()

    let valor = Number(prompt(("Insira o numero que deseja fazer a fatorial: ")))


    if (!isNaN(valor)){
        for(var aux = valor; aux > 1 ; aux--){
            valor = valor * (aux-1)
        }
    }else{
            console.log("Não é um numero, tente novamente!")
            valor = null
        }

    if(valor !== null){
        console.log(valor)
    }
}

module.exports = Exercicio14;