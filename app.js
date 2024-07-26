alert('Bem vindo ao jogo do número secreto'); // exibe uma caixa de dialogo "Alerta"
let numeroSecreto = 9; //Para criação de Variaveis utiliza a clausula "let" semelhante a linguagem M
console.log(numeroSecreto) //console.log é utilizado para visualizar o resultado no navegador na aba de dev
let chute 




while (chute!=numeroSecreto){
    chute = prompt('Escolha um número entre 1 e 30'); // 'prompt' é utilizado para imput
    if(chute == numeroSecreto) { //Sintaxe para o operador "if"      
        alert(`Acertou! o número secreto é : ${numeroSecreto}`); // Semelhante ao f-string do python f'Algumas coisa {variavel}'
    } else {
        if(chute>numeroSecreto){
            alert(`O número secreto é menor que ${chute}`);
        }
            else
                alert(`O número secreto é maior que ${chute}`);
               
    }
}


