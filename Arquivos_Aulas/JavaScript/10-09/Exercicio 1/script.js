let usuario = prompt("Qual seu nome?");
let ativo = true;
let tentativa = 1;
let executando = true;

while (executando) {
  let tipoUsuario = prompt("Tentativa " + tentativa + "/3\nAperte 1 - Administrador, 2 - Professor, 3 - Aluno");
  
  switch (true) {
    case (tipoUsuario === "2"):
      let situacao = "Verdadeira";
      alert("Usuário: " + usuario + "\nTipo: " + tipoUsuario + "\nAtivo: " + ativo + "\nTentativas: " + tentativa + "\nSituação: " + situacao);
      executando = false; 
      break;
    
    case (tentativa === 3): 
      alert("Usuário bloqueado");
      executando = false; 
      break;
      
    default:
      tentativa = tentativa + 1; 
      break;
  }
}
