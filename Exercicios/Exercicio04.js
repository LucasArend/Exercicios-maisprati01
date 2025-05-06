//Crie um menu interativo no console que oferece ao usuário a escolha de três opções.
//Utilize switch-case para implementar a lógica de cada opção selecionada. 
const Exercicio04 =  () => {
    
    const prompt = require('prompt-sync')()

    console.log("escolha uma opção!")
    let escolha = Number(prompt("1- imprime hello world 2-imprime uma frase digitada pelo usuario 3-sai do programa: "))
    let usertext 

    switch (escolha){
        case 1:
            console.log("hello world")
            break;
        case 2:
            usertext = String(prompt("Digite algo!: "))
            console.log(usertext)
            break;
        case 3:
            break
        default:
            console.log("Escolha invalida")
    }
}

module.exports = Exercicio04;