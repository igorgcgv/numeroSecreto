alert('Bem vindo ao jogo do número secreto'); // exibe uma caixa de dialogo "Alerta"
let numeroSecreto = 10; //Para criação de Variaveis utiliza a clausula "let" semelhante a linguagem M
console.log(numeroSecreto); //console.log é utilizado para visualizar o resultado no navegador na aba de dev
let chute; 
let tentativas = 1;





while (chute!=numeroSecreto){
    chute = prompt('Escolha um número entre 1 e 30'); // 'prompt' é utilizado para imput
    if(chute == numeroSecreto) { //Sintaxe para o operador "if"      
        break; 
    } else {
        if(chute>numeroSecreto){
            alert(`O número secreto é menor que ${chute}`);
        }
            else {
                alert(`O número secreto é maior que ${chute}`);
        }
        tentativas++;    
               
    }
}

let palavraTentativa = tentativas > 1 ? 'tentativas' : 'tentativa';
alert(`Acertou! o número secreto é : ${numeroSecreto} com ${tentativas} ${palavraTentativa}.`); // Semelhante ao f-string do python f'Algumas coisa {variavel}'



