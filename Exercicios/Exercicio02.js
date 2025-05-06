//Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso)
//com base no valor fornecido, utilizando uma estrutura de controle if-else. 

const Exercicio02 =  () => {

    const prompt = require('prompt-sync')()

    let idade = Number(prompt("Insira uma idade para saber a faixa etária : "))


    if(idade <10){
        console.log("criança");
    }else if(idade >= 10 && idade < 20){
        console.log("adolecente");
    }else if(idade >= 20 && idade < 60){
        console.log("Adulto");
    }else if(idade >= 60){
        console.log("idoso");
    }
}

module.exports = Exercicio02;