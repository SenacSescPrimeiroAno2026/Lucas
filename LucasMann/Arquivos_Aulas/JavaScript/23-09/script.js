//selecionar o botão
let botaoAtualizar = document.querySelector("#atualizar"); 
//pegamos o botão e armazenamos na variavel botaoAtualizar

//criar um evento quando o botão for presionado
botaoAtualizar.addEventListener("click", atualizarPerfil); 
//o botão vai ficar esperando um click e quando houver o click chama a fumção atualizarPerfil


function atualizarPerfil() {
    let campoNome = document.querySelector("#nome");
    let campoProfissao = document.querySelector("#profissao");
    let campoCidade = document.querySelector("#cidade");
    let campoDescricao = document.querySelector("#descricao");
    //localizando os campos do formulario e armazenando eles nas variaveis

    let nomePerfil = document.querySelector(".nomePerfil");
    let profissaoPerfil = document.querySelector(".profissaoPerfil");
    let cidadePerfil = document.querySelector(".cidadePerfil");
    let descricaoPerfil = document.querySelector(".descricaoPerfil");

    if (campoNome.value.trim() === "") {
        nomePerfil.innerText = "Informe um nome";
    } else {
        nomePerfil.innerText = campoNome.value;
    }
    profissaoPerfil.innerText = campoProfissao.value;
    cidadePerfil.innerText = campoCidade.value;
    descricaoPerfil.innerText = campoDescricao.value;



}
