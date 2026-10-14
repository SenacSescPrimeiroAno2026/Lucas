let campoNome=document.querySelector("#nome");

let campoCategoria=document.querySelector("#categoria");
let campoPreco=document.querySelector("#preco");
let campoDescricao=document.querySelector("#descricao");

let botaoVisualizar=document.querySelector("#visualizar");
let botaoAdicionar=document.querySelector("#adicionar");

let visualNome=document.querySelector("#visualNome");
let visualCategoria=document.querySelector("#visualCategoria");
let visualPreco=document.querySelector("#visualPreco");
let visualDescricao=document.querySelector("#visualDescricao");

let mensagemErro=document.querySelector("#mensagemErro"); 
let listaItens=document.querySelector("#listaItens");

botaoVisualizar.addEventListener("click", visualizarItem);
botaoAdicionar.addEventListener("click", adicionarItem);

function validarCampos(){
    if(
        campoNome.value==""||
        campoCategoria.value==""||
        campoPreco.value==""||
        campoDescricao.value==""
    ){
        mensagemErro.innerText="Preencha todos os campos"
        return false
    }else{
        mensagemErro.innerText="";
        return true;
    }
}

function visualizarItem(){
    if(validarCampos()==false){
        return;
    }
     let nome=campoNome.value;
     let categoria=campoCategoria.value;
     let preco=campoPreco.value;
     let descricao=campoDescricao.value;

     visualNome.innerText=nome;
     visualCategoria.innerText="Categoria " + categoria;
     visualPreco.innerText= `R$ ${preco}`;
     visualDescricao.innerText=descricao;
}

function adicionarItem(){
    if(validarCampos()==false){
        return;
    }
    let nome=campoNome.value;
    let categoria=campoCategoria.value;
    let preco=campoPreco.value;
    let descricao=campoDescricao.value;

    let novoCard=document.createElement("div");
    novoCard.className="card";
    
    let tituloCard=document.createElement("h3");
    tituloCard.innerText=nome;
    
    let categoriaCard=document.createElement("p");
    categoriaCard.innerText="Categoria: " + categoria;
    
    let precoCard=document.createElement("p");
    precoCard.innerText=`R$ ${preco}`;
    
    let descricaoCard=document.createElement("p");
    descricaoCard.innerText="Descrição: " + descricao;

    
    novoCard.appendChild(tituloCard);
    novoCard.appendChild(categoriaCard);
    novoCard.appendChild(precoCard);
    novoCard.appendChild(descricaoCard);

    listaItens.appendChild(novoCard);
    campoNome.value="";
    campoCategoria.value="";
    campoPreco.value="";
    campoDescricao.value="";

    visualNome.innerText="Nome do Produto";
    visualCategoria.innerText="Categoria: ";
    visualPreco.innerText="R$ 0,00";
    visualDescricao.innerText="Descrição: ";
    mensagemErro.innerText="";
}
