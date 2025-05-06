// Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números.  

const Exercicio13 =  () => { 
    const prompt = require('prompt-sync')()

    let valor 

    let resultado = 0

    let aux = 0

    console.log("Insira numeros para fazer a média aritmética, digite 0 para sair")
    do{

        aux ++

        valor = Number(prompt("Valor do "+ aux + "° numero: "))

        if(valor === 0){
        aux --  
        } 

        valor = parseInt(valor)

        if (!isNaN(valor)){
            resultado = resultado + valor
        }else{
            console.log("Não é um numero, tente novamente!")
            resultado = null
            break
        }

    }while(valor!=0)

    resultado = resultado/aux

    if(resultado !== null){
        console.log(resultado)
    }
}

module.exports = Exercicio13;