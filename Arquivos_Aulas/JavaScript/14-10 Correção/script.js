// ======================================================
// AVALIAÇÃO FINAL - UC3
// Painel de Eventos Escolares
//
// O projeto possui erros, trechos incompletos e funcionalidades que precisam ser implementadas.
// Leia o enunciado antes de modificar o código.
// ======================================================
// ------------------------------------------------------
// 1. SELEÇÃO DOS ELEMENTOS
// ------------------------------------------------------
let campoNome = document.querySelector("#nome");
let campoCategoria = document.querySelector("#categoria");
let campoData = document.querySelector("#data");
let campoDescricao = document.querySelector("#descricao");
let botaoCadastrar = document.querySelector("#cadastrar");
let mensagem = document.querySelector("#mensagem");
let listaEventos = document.querySelector("#listaEventos");
// ------------------------------------------------------
// 2. EVENTO DO BOTÃO
// ------------------------------------------------------
botaoCadastrar.addEventListener("click", cadastrarEvento);
// ------------------------------------------------------
// 3. VALIDAÇÃO DOS CAMPOS
// ------------------------------------------------------

function validarCampos() {
    if (campoNome.value == "" || campoCategoria.value == "" || campoDescricao.value == ""|| campoData.value == "") {
        mensagem.innerText = "Preencha todos os campos.";
        return false;
    }
    mensagem.innerText = "";
    return true;
    
}
// ------------------------------------------------------
// 4. CADASTRO DO EVENTO
// ------------------------------------------------------
function cadastrarEvento() {
    if (validarCampos() == false) {
        return;
    }

    let novoEvento = document.createElement("div");
    novoEvento.className = "evento";
    let titulo = document.createElement("h3");
    titulo.innerText = campoNome.value;
    let categoria = document.createElement("p");
    categoria.className = "categoria";
    categoria.innerText = "Categoria: " + campoCategoria.value;
    let data = document.createElement("p");
    data.innerText = "Data: " + campoData.value;
    let descricao = document.createElement("p");
    descricao.innerText = campoDescricao.value;
    novoEvento.appendChild(titulo);
    novoEvento.appendChild(categoria);
    novoEvento.appendChild(data);
    // Um dos elementos criados acima não está sendo adicionado ao card. Corrija o problema.
    novoEvento.appendChild(descricao);
    // --------------------------------------------------
    // TODO - IMPLEMENTAÇÃO OBRIGATÓRIA
    //
    // Crie um botão com o texto "Selecionar".
    //
    // Ao clicar nesse botão, o card novoEvento deverá receber/remover a classe CSS "selecionado".
    //
    // Utilize os recursos estudados durante as aulas.
    let selecionar = document.createElement("button");
    selecionar.innerText = "Selecionar";
    
    selecionar.addEventListener("click", function() {
        novoEvento.classList.toggle("selecionado");

    if(novoEvento.classList.contains("selecionado")){
        selecionar.innerText = "Selecionado";
    }else{
       selecionar.innerText = "Selecionar"; 
    }
    });

    
    novoEvento.appendChild(selecionar);

    // --------------------------------------------------
        listaEventos.appendChild(novoEvento);

    
    // --------------------------------------------------
    // TODO - FINALIZAÇÃO
    //
    // Após o cadastro, limpe os quatro campos do formulário.
    campoNome.value= ''
    campoCategoria.value= ''
    campoData.value= ''
    campoDescricao.value= ''
    // --------------------------------------------------
}