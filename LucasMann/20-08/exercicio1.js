let valido = true; 
let nome = prompt("Qual o nome do aluno:"); 
let nota = Number(prompt("Qual a nota do aluno:")); 
let frequencia = Number(prompt("Qual a frequência do aluno:")); 
let trabalhoEntregue = Number(prompt("O trabalho foi entregue? Digite 1 para Sim ou 0 para Não:")); 

switch (true) {
    case (valido && frequencia >= 80 && nota >= 7 && trabalhoEntregue == 1): 
        alert("Nome do aluno: " + nome + 
            "\nResultado do aluno: Aprovado" + 
            "\nNota do aluno: " + nota + 
            "\nFrequência do aluno: " + frequencia + 
            "\nTrabalho foi entregue?: Sim"); 
        break; 
    default: 
        alert(`Nome do aluno: ${nome} 
        \nResultado do aluno: Reprovado 
        \nTrabalho foi entregue?: ${trabalhoEntregue == 1 ? 'Sim' : 'Não'}`); 
        break; 
}



