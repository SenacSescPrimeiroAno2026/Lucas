window.addEventListener('load', function() {
    function mensagem() {
            return "Você já pode votar no stand do parque!";
        }
        function mensagem2() {
            alert("Mensagem 2: Obrigado por escolher o VIP!");
        }
        let nome = prompt("Digite o seu nome:");
        let idade = Number(prompt("Digite a sua idade para entrar no Parque:"));
        if (idade <= 8) {
            alert("Você ainda não pode votar no stand do parque. Acesso encerrado.");
            return;
        }
    function code() {
        let statusVoto = mensagem();
        console.log(statusVoto);
        let vip = confirm("Você deseja comprar o ingresso VIP?");
        let valor = 0;
        if (vip) {
            alert("Ternário: Você já pode votar no stand do parque!");
            mensagem2();
            valor = valor + 50;
        } else {
            alert("Você escolheu o ingresso normal.");
            valor = valor + 30;
        }
        alert(`O valor total a ser pago é: R$ ${valor.toFixed(2)}`);
        let horizontal = 0;
        switch (true) {
            case (idade < 12):
                alert("Switch: Atração recomendada: Carrossel.");
                horizontal = 0;
                break;
            case (idade >= 12 && idade < 18):
                alert("Switch: Atração recomendada: Barco Viking.");
                horizontal = 1;
                break;
            default:
                alert("Switch: Atração recomendada: Montanha-Russa.");
                horizontal = 2;
                break;
        }
        const brinquedos = [
            ["Carrossel", "Barco Viking", "Montanha-Russa"],
            ["Carrinho Bate-Bate", "Roda-Gigante", "Trem Fantasma"],
            ["Elevador", "Kamikaze", "Piscina de Bolinhas"]
        ];
        alert("Opções disponíveis: \nCarrossel, Barco Viking, Montanha-Russa, \nCarrinho Bate-Bate, Roda-Gigante, Trem Fantasma, \nElevador, Kamikaze, Piscina de Bolinhas");
        let vertical = Number(prompt("Escolha a variação Vertical do brinquedo (0, 1 ou 2):"));
        horizontal = Number(prompt("Escolha a variação Horizontal do brinquedo (0, 1 ou 2):"));
        alert(brinquedos[horizontal][vertical]);
        alert(`Você escolheu o ${brinquedos[horizontal][vertical]}!`);
        for (let j = 0; j < 3; j++) {
            alert(`Contagem do For (Preparando brinquedo): ${j}`);
        }
        let quantidade = 1;
        for (let k = 0; k < quantidade; k++) {
            alert("Ingressos esgotados!");
            let resposta = prompt("Deseja comprar mais ingressos? (Digite sim ou não)");
            if (resposta === 'sim') {
                code();
            } else {
                alert("Você não comprou mais ingressos.");
                alert(`Nome do usuário: ${nome}, Idade: ${idade}, Ingressos comprados: ${quantidade}, Valor total: R$ ${valor.toFixed(2)}`);
                break;
            }
        }
    }
    code(); // Chamada inicial para a função code rodar ao carregar a página
});
