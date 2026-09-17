let executando = true; 
let motorista = "Marcos";
let tipoVeiculo = 0;
let horas = 0;
let clienteCadastrado = false;
let ficouDuranteNoite = false;
let nomeVeiculo = "";
let valorPorHora = 0;
let valorHoras = 0;
let desconto = 0;
let taxaNoite = 0;
let valorFinal = 0;

while (executando) {
  let respostaCadastro = prompt("\nVocê é cadastrado?\n1 - Sim\nQualquer outra tecla - Não");
  let respostaVeiculo = prompt("\nAperte:\n1 - Moto\n2 - Carro\n3 - Utilitário");
  let respostaHoras = prompt("\nQuantas horas ficou?");
  let respostaNoite = prompt("\nFicou durante a noite?\n1 - Sim\nQualquer outra tecla - Não");

  clienteCadastrado = (respostaCadastro === "1");
  ficouDuranteNoite = (respostaNoite === "1");
  horas = Number(respostaHoras);

  if (horas <= 0 || isNaN(horas)) {
    alert("Quantidade de horas inválida! Tente novamente.");
    continue; 
  }

  let dadosValidos = true;
  switch (respostaVeiculo) {
    case "1":
      nomeVeiculo = "Moto";
      valorPorHora = 4;
      break;
    case "2":
      nomeVeiculo = "Carro";
      valorPorHora = 7;
      break;
    case "3":
      nomeVeiculo = "Utilitário";
      valorPorHora = 10;
      break;
    default:
      alert("Tipo de veículo inválido! Tente novamente.");
      dadosValidos = false;
      break;
  }


  if (!dadosValidos) {
    continue;
  }

  if (clienteCadastrado === true && horas >= 8) {
    desconto = 0.20;
  } else if (clienteCadastrado === true && horas >= 4 && horas <= 7) {
    desconto = 0.10;
  } else if (clienteCadastrado === false && horas >= 8) {
    desconto = 0.05;
  } else {
    desconto = 0.00;
  }

  valorHoras = horas * valorPorHora;
  taxaNoite = ficouDuranteNoite ? 25.00 : 0.00;
  let valorDesconto = valorHoras * desconto;
  valorFinal = valorHoras - valorDesconto + taxaNoite;
  alert(
    "Motorista: " + motorista + "\n" +
    "Tipo de veículo: " + nomeVeiculo + "\n" +
    "Horas estacionadas: " + horas + "\n" +
    "Cliente cadastrado: " + (clienteCadastrado ? "Sim" : "Não") + "\n" +
    "Ficou durante a noite: " + (ficouDuranteNoite ? "Sim" : "Não") + "\n" +
    "Valor das horas: R$ " + valorHoras.toFixed(2) + "\n" +
    "Desconto: R$ " + valorDesconto.toFixed(2) + " (" + (desconto * 100) + "%)\n" +
    "Taxa noturna: R$ " + taxaNoite.toFixed(2) + "\n" +
    "Valor final: R$ " + valorFinal.toFixed(2)
  );
  executando = false;
}