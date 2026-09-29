let campoNome = document.querySelector("#nome");
let campoCategoria = document.querySelector("#categoria");
let campoPreço = document.querySelector("#preco");
let campoDescricao = document.querySelector("#descricao");
let campoVisualizar = document.querySelector("#visualizar");
let campoAdicionar = document.querySelector("#Adicionar");
let visualNome = document.querySelector("#visualnome");
let visualCategoria = document.querySelector("#visualcategoria");
let visualPreço = document.querySelector("#visualpreco");
let visualDescricao = document.querySelector("#visualdescricao");
let mensagemErro = document.querySelector("#mensagemErro");
let listaItens = document.querySelector("#listaitens");

campoVisualizar.addEventListener("click", visualizarItem);

function validarCampos() {
    if (campoNome.value.trim() == "" || 
    campoCategoria.value.trim() == "" || 
    campoPreço.value.trim() == "" || 
    campoDescricao.value.trim() == "") 
    {
        mensagemErro.innerText = "Erro";
        return false;
    } else {
        mensagemErro.innerText = "";
        return true;
    }
}

function visualizarItem() {
    if (validarCampos() == false) return;

    let nome = campoNome.value;
    let categoria = campoCategoria.value;
    let preco = campoPreço.value;
    let descricao = campoDescricao.value;

    visualNome.innerText = nome;
    visualCategoria.innerText = "Categoria: " + categoria;
    visualPreço.innerText = `R$ ${preco}`;
    visualDescricao.innerText = descricao;
}
