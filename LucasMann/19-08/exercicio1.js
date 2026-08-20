/*
Atividade 1 - Positivo, Negativo ou Zero
Crie um programna em JavaScript que armazene um número em na variável.
O programa deve verificar se o número é armazenado e apresentar no colsole uma das seguintes mensagens:
* Se o número for maior que zero, mostrar: "O número é positivo"
* Se o número for menor que zero, mostrar: "O número é negativo"
* Caso contrario, mostrar: "O número é zero"
* Além da classificação mostre o numero armazenado.
*/

let numero = 1;

if (numero > 0) {
  console.log(`O número é positivo: ${numero}`);
} else if (numero < 0) {
  console.log(`O número é negativo: ${numero}`);
} else {
  console.log(`O número é zero: ${numero}`);
}
