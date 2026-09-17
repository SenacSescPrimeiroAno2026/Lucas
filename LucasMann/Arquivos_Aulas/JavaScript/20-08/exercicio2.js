let produto = prompt("Qual o produto?");
let quantidade = Number(prompt("Qual a quantidade?"));

let 
preco = 0;
let promocao = true; 

switch (produto) {
  case "teclado":
    preco = 150;
    break;
  case "mouse":
    preco = 50;
    break;
  default:
    preco = 0;
}

let total = preco * quantidade;
let desconto = 0;

if (total >= 400 && promocao === true) {
    desconto = total * 0.15;
} else if (total > 200 || promocao === true) {
    desconto = total * 0.10;}

alert("Produto: " + produto);
alert("Quantidade: " + quantidade);
alert("Valor sem desconto: " + total);
alert("Desconto: " + desconto);
total = total - desconto;
alert("Valor final: " + total);
