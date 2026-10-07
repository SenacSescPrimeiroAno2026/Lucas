let campoNome=document.querySelector("#nome");

let campoCategoria=document.querySelector("#Categoria")
let campoPreco=document.querySelector("#preco")
let campoDescricao=document.querySelector("#Categoria")

let botaoVisualizar=document.querySelector("#visualizar");
let botaoAdicionar=document.querySelector("#adicionar");

let visualNome=document.querySelector("#visualNome");
let visualCategoria=document.querySelector("#visualCategoria");
let visualPreco=document.querySelector("#visualPreco");
let visualDescricao=document.querySelector("#visualDescricao"); 

botaoVisualizar.addEventListener("click", visualizarItem);
botaoAdicionar.addEventListener("click", adicionarItem);

