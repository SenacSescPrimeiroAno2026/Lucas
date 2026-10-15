let valor1=3;
let valor2="5";
let valor3=3;

if(valor1==valor2 && valor1==valor3){//o operador && é ultilizado para verificar se todas condições são verdadeiras
    console.log(`Os valores são iguais\nresultado`);
}else if(valor1==valor2 || valor1==valor3){//o operador || é ultilizado para verificar se pelo menos uma das condições é verdadeira
    console.log(`Alguns valores são iguais`);
}