let nota1 = 7; 
let nota2 = 7; 
let nota3 = 5; 

let ano1 = "Primeiro Ano"; 
let ano2 = "Segundo Ano"; 
let ano3 = "Terceiro Ano";

let media = (nota1 + nota2 + nota3) / 3;
if (nota1 >= 7 && ano1 =="Primeiro Ano") { 
    console.log(`Você foi aprovado no ${ano1}.\nSua nota foi de: ${nota1}\n\n`); 
} else if (nota1 >= 5) { 
    console.log(`Você está em recuperação no ${ano1}.\nSua nota foi de: ${nota1}\n\n`); 
} else { 
    console.log(`Você foi reprovado no ${ano1}.\nSua nota foi de: ${nota1}\n\n`); 
}


if (nota2 >= 7 && ano2 =="Segundo Ano") { 
    console.log(`Você foi aprovado no ${ano2}.\nSua nota foi de: ${nota2}\n\n`); 
} else if (nota2 >= 5) { 
    console.log(`Você está em recuperação no ${ano2}.\nSua nota foi de: ${nota2}\n\n`); 
} else { 
    console.log(`Você foi reprovado no ${ano2}.\nSua nota foi de: ${nota2}\n\n`); 
}


if (nota3 >= 7 && ano3 =="Terceiro Ano") { 
    console.log(`Você foi aprovado no ${ano3}.\nSua nota foi de: ${nota3}\n\n`); 
} else if (nota3 >= 5) { 
    console.log(`Você está em recuperação no ${ano3}.\nSua nota foi de: ${nota3}\n\n`); 
} else { 
    console.log(`Você foi reprovado no ${ano3}.\nSua nota foi de: ${nota3}\n\n`); 

}


if (media >= 7) { 
    console.log(`Você foi aprovado no ${ano1}.\nSua nota foi de: ${media}\n\n`); 
} else if (media >= 5) { 
    console.log(`Você está em recuperação no ${ano1}.\nSua nota foi de: ${media}\n\n`); 
} else { 
    console.log(`Você foi reprovado no ${ano1}.\nSua nota foi de: ${media}\n\n`); 
}