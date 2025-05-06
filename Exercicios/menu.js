const Exercicio01 = require('./Exercicio01.js');
const Exercicio02 = require('./Exercicio02.js');
const Exercicio03 = require('./Exercicio03.js');
const Exercicio04 = require('./Exercicio04.js');
const Exercicio05 = require('./Exercicio05.js');
const Exercicio06 = require('./Exercicio06.js');
const Exercicio07 = require('./Exercicio07.js');
const Exercicio08 = require('./Exercicio08.js');
const Exercicio09 = require('./Exercicio09.js');
const Exercicio10 = require('./Exercicio10.js');
const Exercicio11 = require('./Exercicio11.js');
const Exercicio12 = require('./Exercicio12.js');
const Exercicio13 = require('./Exercicio13.js');
const Exercicio14 = require('./Exercicio14.js');
const Exercicio15 = require('./Exercicio15.js');

const prompt = require('prompt-sync')()

let option = 1

let espera = 0

while (option != 0){
  option = Number
  (prompt(
    "1 - Verificar se o numero é par ou ímpar\n"+
    "2 - Verificar faixa etária\n"+
    "3 - Verificar se foi aprovado\n"+
    "4 - Menu interativo\n"+
    "5 - Calcula o IMC\n"+
    "6 - IndentificWa o tipo do triangulo\n"+
    "7 - Calcula valor total da compra de maças\n"+
    "8 - Escreve numeros em ordem crescente\n"+
    "9 - Contagem regressiva\n"+
    "10 - Escreve um número inteiro na tela 10 vezes\n"+
    "11 - Soma de 5 numeros\n"+
    "12 - Tabuada de um número\n"+
    "13 - Média aritmética\n"+
    "14 - Calcula o fatorial\n"+
    "15 - Sequência de Fibonacci\n" +
    "0 - Sai do programa\n" +
    "Escolha o um dos exercicios de 1 a 15: " 
  ))

    switch (option) {
      case 0:
        break
      case 1:
        Exercicio01();
        break;
      case 2:
        Exercicio02();
      break;
      case 3:
        Exercicio03();
      break;
      case 4:
        Exercicio04();
      break;
      case 5:
        Exercicio05();
      break;
      case 6:
        Exercicio06();
      break;
      case 7:
        Exercicio07();
      break;
      case 8:
        Exercicio08();
      break;
      case 9:
        Exercicio09();
      break;
      case 10:
        Exercicio10();
      break;
      case 11:
        Exercicio11();
      break;
      case 12:
        Exercicio12();
      break;
      case 13:
        Exercicio13();
      break;
      case 14:
        Exercicio14();
      break;
      case 15:
        Exercicio15();
      break;
      default:
        console.log("Numero invalido, saindo do programa!")
        option = 0
      break
  }
  if(option != 0){
    espera = prompt("\nPressione enter para continuar!")
  }
  
}