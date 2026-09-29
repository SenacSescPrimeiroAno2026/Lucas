let botaoVisualizar = document.querySelector("#visualizar");
let botaoPublicar = document.querySelector("#publicar");

botaoVisualizar.addEventListener("click", visualizarPerfil);
botaoPublicar.addEventListener("click", publicarPerfil);

function visualizarPerfil() {
    let campoNome = document.querySelector("#nome");
    let campoProfissao = document.querySelector("#profissao");
    let campoCidade = document.querySelector("#cidade");
    let campoDescricao = document.querySelector("#descricao");

    let nomePerfil = document.querySelector(".nomePerfil");
    let profissaoPerfil = document.querySelector(".profissaoPerfil");
    let cidadePerfil = document.querySelector(".cidadePerfil");
    let descricaoPerfil = document.querySelector(".descricaoPerfil");

    nomePerfil.innerText = campoNome.value.trim() === "" ? "Informe um nome" : campoNome.value;
    profissaoPerfil.innerText = campoProfissao.value.trim() === "" ? "Informe um assunto" : campoProfissao.value;
    cidadePerfil.innerText = campoCidade.value.trim() === "" ? "Informe uma cidade" : campoCidade.value;
    descricaoPerfil.innerText = campoDescricao.value.trim() === "" ? "Informe uma descrição" : campoDescricao.value;
}


function publicarPerfil() {
    let campoNome = document.querySelector("#nome");
    let campoProfissao = document.querySelector("#profissao");
    let campoCidade = document.querySelector("#cidade");
    let campoDescricao = document.querySelector("#descricao");

    let nomePublicado = document.querySelector(".nomePublicado");
    let profissaoPublicado = document.querySelector(".profissaoPublicado");
    let cidadePublicado = document.querySelector(".cidadePublicado");
    let descricaoPublicado = document.querySelector(".descricaoPublicado");

    nomePublicado.innerText = campoNome.value.trim() === "" ? "Informe um nome" : campoNome.value;
    profissaoPublicado.innerText = campoProfissao.value.trim() === "" ? "Informe um assunto" : campoProfissao.value;
    cidadePublicado.innerText = campoCidade.value.trim() === "" ? "Informe uma cidade" : campoCidade.value;
    descricaoPublicado.innerText = campoDescricao.value.trim() === "" ? "Informe uma descrição" : campoDescricao.value;
}