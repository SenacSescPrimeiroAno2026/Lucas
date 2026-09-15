window.addEventListener('load', function() {
    //  1. ENTRADA DE DADOS E CONVERSÃO 
    let idade = Number(prompt("Digite a sua idade para entrar no Parque: ")); 
    let vip = confirm("Você deseja comprar o ingresso VIP?");

    //  2. ESTRUTURA CONDICIONAL (IF / ELSE) 
    if (vip) {
        mensagem2(); 
    } else {
        alert("Você escolheu o ingresso normal.");
    }

    //  3. ESTRUTURA DE ESCOLHA (SWITCH) 
    switch (true) {
        case (idade < 12):
            alert("Switch: Atração recomendada -> Carrossel.");
            break;
        case (idade >= 12 && idade < 18):
            alert("Switch: Atração recomendada -> Barco Viking.");
            break;
        default:
            alert("Switch: Atração recomendada -> Montanha-Russa.");
            break;
    }

    //  4. ESTRUTURA DE REPETIÇÃO (WHILE) 
    let moedas = 1;
    while (moedas <= 3) {
        alert(`While: Inserindo moeda número ${moedas} na roleta...`);
        moedas = soma(moedas, 1); 
    }

    //  5. ESTRUTURA DE REPETIÇÃO (FOR) 
    for (let i = 0; i < 3; i++) {
        alert(`Contagem do For (Preparando brinquedo): ${i}`);
    }

    //  6. OPERADOR TERNÁRIO 
    let statusVoto = idade >= 16 ? mensagem() : "Você ainda não pode votar no stand do parque.";
    alert(`Ternário: ${statusVoto}`);

    function mensagem() {
        return "Olá mundo!";
    }

    function mensagem2() {
        alert("Olá mundo 2!");
    }

    function soma(a, b) {
        return a + b;
    }
});
