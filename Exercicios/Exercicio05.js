//Escreva um programa que calcula o Índice de Massa Corporal (IMC)
//de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else.
const Exercicio05 =  () => { 
    
    const prompt = require('prompt-sync')()

    let peso = Number(prompt("Insira seu peso: "))
    let altura = prompt("Insira sua altura: ")
    altura = parseFloat(altura.replace(',','.'))
    let IMC = (peso/(altura*altura)).toFixed(2) 
    let resultado

    if (IMC < 18.5){
        resultado = "Peso abaixo do normal"
    }else if (IMC >= 18.5 && IMC < 25){
        resultado = "Peso normal"
    }else if (IMC >= 25 && IMC < 30){
        resultado = "Sobrepeso"
    }else if (IMC >= 40){
        resultado = "Obesidade"
    }

    console.log("Seu IMC é de: "+IMC +" Ele é considerado: " + resultado)
}

module.exports = Exercicio05;



