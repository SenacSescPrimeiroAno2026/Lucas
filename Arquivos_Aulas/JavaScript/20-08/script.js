let verdadeiro=true;
let falso=false;
let decimal=3.13;
let inteiro=10;
let texto=`Ola`

//console.log(typeof verdadeiro);

//let opcao=2;
let valido = false; // Controla se o laço deve continuar

while (!valido) {
let opcao=Number(prompt(`Selecione uma opção de 1 - 3 para parar aperte 0`));
//let opcao2=prompt(`Opcao2`);//O prompt armazena os valores digitados pelo usuario como string(texto), para utilizarmos esses valores, vamos precisar converter eles para o tipo especifico, ou seja, numero, inteiiro, decimal ou qualque outro tipo
console.log(typeof opcao2);
switch (opcao) {
  case 1:
    console.log(`Opção 1`);
    break;
  case 2:
    console.log(`Opção 2`);
    break;
  case 3:
    console.log(`Opção 3`);
    break;
  case 0:
    console.log(`Saindo do Programa...`);
    break;
  default:
    alert("Opcao invalida");
}
alert(`A escolha foi: ${opcao}`);  
 
}

