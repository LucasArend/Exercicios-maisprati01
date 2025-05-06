//Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar
//utilizando uma estrutura de controle if. 
const Exercicio01 =  () => {

    const prompt = require('prompt-sync')()

  
    let numero = Number(prompt("Insira um número inteiro para verificar se ele é par ou ímpar : "))


    if(numero%2 == 0){
        console.log("Par");
    }

    if(numero%2 == 1){
        console.log("Impar");
    }

}

module.exports = Exercicio01;