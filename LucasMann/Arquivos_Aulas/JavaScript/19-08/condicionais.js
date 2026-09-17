//Condicionas usadas no portugol studio se, senao, se nao, senao se
//No javascript é ultilizado if, else, else if
let idade = 18;

if (idade >= 18) {
    console.log("Você é maior de idade");
} else if (idade >= 16 && idade < 18) {
    console.log("Você é menor de idade, mas pode votar");
    alert(`Você é menor de idade`);
} else {
    console.log("Você é menor de idade e não pode votar");
}
