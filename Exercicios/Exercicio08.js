//Escreva um algoritmo para ler 2 valores (considere que não serão lidos valores iguais) e
//escreve-los em ordem crescente.
const Exercicio08 =  () => { 
    const prompt = require('prompt-sync')()

    console.log("Insira dois valores para ordenalos em ordem crescente")

    let valorA = prompt("Insira o primeiro valor: ")
    ladoA = parseFloat(valorA.replace(',','.'))

    let valorB = prompt("Insira o segundo valor: ")
    ladoB = parseFloat(valorB.replace(',','.'))

    if(valorA != valorB){
        if (valorA > valorB){
            console.log("Ordem crescente: " + valorB +" - " + valorA)
        }else{
            console.log("Ordem crescente: " + valorA + " - " + valorB)
        }
    }else{
        console.log("Os numeros são iguais!")
    }
}

module.exports = Exercicio08;