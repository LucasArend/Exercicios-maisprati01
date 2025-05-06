//Escreva um programa que solicita ao usuário 5 números e calcula a soma total utilizando um loop for.  
const Exercicio11 =  () => { 
    
    const prompt = require('prompt-sync')()

    let valor 

    let resultado = 0

    console.log("insira 5 valores a serem somados")
    for (var i = 1; i <= 5; i++){

        valor = Number(prompt("Valor "+ i + ": "))

        valor = parseInt(valor)

        if (!isNaN(valor)){
            resultado = resultado + valor
        }else{
            console.log("Não é um numero, tente novamente!")
            resultado = null
            break
        }


    }

    if(resultado !== null){
        console.log(resultado)
    }
}

module.exports = Exercicio11;