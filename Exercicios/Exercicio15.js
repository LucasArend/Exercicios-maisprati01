// Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for.   
const Exercicio15 =  () => { 
     let valor = 11
     let a = 0;
     let b = 1;
     if (valor <= 1) {
         console.log(valor)
       }
       for (let i = 2; i <= valor; i++) {
         let temp = a + b;
         console.log(b);
         a = b;
         b = temp;
       }
}

  module.exports = Exercicio15;