//Tipos de variáveis
//string, int, flot, bolean, caracter
//texto, inteiro, decimal, verdadeiro ou falso, letra

//cadeia nome="Lucas" isso é usado no portugol studio

//let é ultilizado no javascript para declarar variáveis que podem ser alteradas
//const é ultilizado para declarar variáveis que não podem ser alteradas(cpf)

let nome="Lucas";
let idade=17;

console.log("Olá mundo");//console.log é usado para mostrar algo no console do terminal ou console e no navegador é parecido com o escreva do portugol studio
console.log(nome)
console.log(idade)
console.log("Meu nome é: " + nome + " e minha idade é: " + idade);//concatenação de string
console.log(`Meu nome é: ${nome} e minha idade é: ${idade}`);//template string
console.log(idade+idade);
console.log(`A soma da minha idade com ela mesma é: ${idade+idade}`);//template string com soma de variáveis
console.log(typeof nome);//typeof é usado para mostrar o tipo da variável
console.log(typeof idade);
console.log(typeof ("idade é "+idade+" anos"));//cuidado ao ultilizar concatenção de string com variáveis, pois o resultado será uma string
alert("Olá mundo");//alert é usado para mostrar algo em uma caixa de alerta no navegador
alert(`Meu nome é: ${nome} e minha idade é: ${idade}`);//alert com template string