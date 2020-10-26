alert ("Bem Vinde!");

 let nome = prompt("Informe o seu nome");
 let resposta = prompt( nome + "  Você deseja mesmo continuar o questionário?  S para Sim OU N para Não");
 
 document.getElementById("nome").innerHTML=nome

 if  (resposta == "S") {
    let pergunta1 = prompt("1-Como seria o uso correto da máscara? \n A) Abaixo do nariz. \n B)No Queixo. \n C)Cobrindo a nariz e a boca");
        if(pergunta1 == "C"){
            document.write( "\n Resposta Correta 1");
        } else{
            document.write( "\n Resposta Incorreta 1");
            
        }
    let pergunta2 = prompt("2-Qual o Alcool usado para prevensão do covid? \n A)45 \n B)70 \n C)90");
        if(pergunta2 == "B"){
         document.write(" \n Resposta Correta 2");
         } else{
            document.write( "\n Resposta Incorreta 2");
        
         }
    let pergunta3 = prompt("3-Como deve devo lavar as mãos para prevenção do Corona Virus? \n A)Água e sabão. \n B)Somete água. \n C)Não devo lavar as mãos.")
         if(pergunta3 == "A"){
         document.write( " \n Resposta Correta 3");
        } else{
            document.write( " \n Resposta Incorreta 3");
        
        }
        


 }

