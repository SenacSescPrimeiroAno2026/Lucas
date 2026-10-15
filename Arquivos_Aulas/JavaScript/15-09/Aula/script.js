window.addEventListener('load', function() {
let texto_digitado=Number(prompt("Digite um texto: "));
let confirmacao=confirm("Você deseja ver o texto digitado?");

/*
//texto_digitado=Number(texto_digitado);

//Number é ultilizado quando queremos converter o valor digitado em número, caso seja nececessário.

if (confirmacao){//Se a confirmação foi verdadeira, o código dentro de if será executado.
//if(!confirmacao{ //Ultilizar o ! para negar a condição, ou seja a confirmação for falsa, o código dentro do if será executado.

//if(confirmacao==true){
    alert(`O texto digitado foi: ${texto_digitado}`);
} else {
    alert("Você escolheu não ver o texto.");
}

switch(idade){
    case idade<18:
        alert("Você é menor de idade.");
        break;
    case 18:
        alert("Você tem 18 anos.");
        break;
    case 19:
        alert("Você tem 19 anos.");
        break;
    default:
        alert("Você não tem 18 ou 19 anos.");
        break;
}

while(idade<18){
    alert("Você é menor de idade.");
    idade++
    //idade=idade+1
        break;
}
alert("Você é maior de idade.");
*/

//let i;
//for(let i=0; i<10; i++){
//    alert(`Contagem: ${i}`);
//}

//Operadores lógicos: && (E), || (OU), ! (NÃO)

/*Operadores aritiméticos: +, -, *, /, %, ++, --
+   Addition
-   Subtraction
*   Multiplication
**  Exponentiation(ES2016)
/   Division
%   Remainder
++  Increment
--  Decrement
*/
/*Comparadores: ==, ===, !=, !==, >, <, >=, <=
==  Igualdade (valor)
=== Igualdade estrita (valor e tipo)
!=  Diferente (valor)
!== Diferente estrito (valor e tipo)
>   Maior que
<   Menor que
>=  Maior ou igual que
<=  Menor ou igual que
*/

//Operador ternário: condição ? valor_se_verdadeiro : valor_se_falso
/*Sem o ternário seria necessário fazer assim:
let pode_votar=idade>=16 ? "Você pode votar." : "Você não pode votar.";
if(idade>=16){
    alert("Você pode votar.");
}else{
    alert("Você não pode votar.");
}
*/

alert(mensagem());
mensagem2();
alert(soma(5, 10));
alert(soma(10, 20));

function mensagem(){
    return "Olá mundo!"
}
function mensagem2(){
    alert("Olá mundo 2!");
}
function soma(a, b){
    return a + b;
}
});

