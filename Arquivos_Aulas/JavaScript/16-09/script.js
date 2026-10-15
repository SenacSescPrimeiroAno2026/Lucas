//Arrays - Vetores
/*
let carros = [
    "BMW", 
    "Mercedes", 
    "Audi", 
    "Ferrari"
];
*/

//Se não ultilizsse o vetor, teria que criar uma variável para cada carro, como por exemplo: 
// let carro1 = "BMW", 
// let carro2 = "Mercedes" 
// let carro3 = "Audi"
// let carro4 = "Ferrari"

/*
alert(carros[2]); //Audi
let carro_caro=carros[3]; //Ferrari
alert(carro_caro);
alert(carros[5])
*/

//alert(carros.length); //legth - quantidade de elementos do vetor
//alert(carros.sort()); //sort - ordena os elementos do vetor
//alert(carros.length-1); //legth - quantidade de elementos do vetor menos 1, ou seja, o índice do último elemento do vetor

/*
carros.push("Porsche"); //push - adiciona um elemento no final do vetor
carros.push("Lamborghini"); 
carros



for(let i=0; i<carros.length; i++){
    alert(carros[i]); //exibe todos os elementos do vetor
}
    */

//Aray bidimencinal
let jogos = [
    ["FIFA", "PES", "NBA"],
    ["GTA", "Mafia", "Need for Speed"],
    ["Call of Duty", "Battlefield", "Far Cry"]
];

//alert(jogos[1][2]); //Need for Speed
//alert(jogos[2][1]); //Battlefield

for(let i=0; i<jogos.length; i++){
    for(let j=0; j<jogos[i].length; j++){
        alert(jogos[i][j]); 
    }
}