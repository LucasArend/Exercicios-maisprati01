//Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo.
//Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.  
const Exercicio06 =  () => { 

    const prompt = require('prompt-sync')()

    console.log("insira 3 valores de um triangulo para descobrir se ele é isósceles, escaleno ou equilátero.  ")

    let ladoA = prompt("Insira o primeiro valor: ")
    ladoA = parseFloat(ladoA.replace(',','.'))

    let ladoB = prompt("Insira o segundo valor: ")
    ladoB = parseFloat(ladoB.replace(',','.'))

    let ladoC = prompt("Insira o terceiro valor: ")
    ladoC = parseFloat(ladoC.replace(',','.'))

    let resultado

    if(ladoA < ladoB + ladoC && ladoB < ladoA + ladoC && ladoC < ladoA + ladoB ){
        if (ladoA == ladoB && ladoB == ladoC){
            resultado = "Triangulo equilátero"
        }else if(ladoA == ladoB || ladoB == ladoC || ladoA == ladoC){
            resultado = "Triangulo isósceles"
        }else{
            resultado = "Triangulo escaleno"
        }
        console.log(resultado)
    }else{
        console.log("Os valores não formam um triangulo")
    }
}
module.exports = Exercicio06;




