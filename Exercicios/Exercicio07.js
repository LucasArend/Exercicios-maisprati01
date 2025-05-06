//As maçãs custam R$ 0,30 se forem compradas menos do que uma dúzia, e R$ 0,25
//se forem compradas pelo menos doze.Escreva um algoritmo que
//leia o número de maçãs compradas, calcule e escreva o valor total da compra.
const Exercicio07 =  () => { 
    const prompt = require('prompt-sync')()


    let compras = Number(prompt("Insira a quantia de maçãs que deseja comprar para saber quanto deve pagar: "))
    let custo = 0.25
    let totalAPagar

    if(compras < 12){
        custo = 0.30
        totalAPagar = custo * compras
    }else{
        totalAPagar = custo * compras
    }

    console.log("Precisa pagar: R$"+totalAPagar)

}

module.exports = Exercicio07;