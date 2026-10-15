let campoNome=document.querySelector("#nome");
/*
let campoNome: Cria uma nova variável chamada campoNome.
document: Representa a página web inteira (o documento HTML).
.querySelector("#nome"): Procura na página o primeiro elemento que tenha o ID nome (o símbolo # serve para indicar um ID).
*/
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
/*
Campos de Entrada (Inputs): campoCategoria, campoPreco e campoDescricao (além do campoNome que você já tinha). Eles servem para o usuário digitar os dados.
Botões de Ação: botaoVisualizar (para mostrar um "preview" dos dados) e botaoAdicionar (para salvar ou listar o item).
Área de Visualização (Preview): visualNome, visualCategoria, visualPreco e visualDescricao. Eles servem para exibir as informações em algum destaque na tela antes ou depois de salvar.
Mensagem e Listagem: mensagemErro (para exibir alertas caso falte preencher algo) e listaItens (provavelmente uma lista ou tabela onde os produtos cadastrados vão aparecer).

*/
botaoVisualizar.addEventListener("click", visualizarItem);//ouvir o evento de click no botão visualizar e chamar a função visualizarItem
botaoAdicionar.addEventListener("click", adicionarItem);//ouvir o evento de click no botão adicionar e chamar a função adicionarItem

function validarCampos(){//função para validar se os campos estão preenchidos
    if(//verifica se algum dos campos está vazio
        campoNome.value==""||//verifica se o campo nome está vazio
        campoCategoria.value==""||//verifica se o campo categoria está vazio
        campoPreco.value==""||//verifica se o campo preço está vazio
        campoDescricao.value==""//verifica se o campo descrição está vazio
    ){//FECHAMENTO DO IF
        mensagemErro.innerText="preencha todos os campos."//exibe a mensagem de erro caso algum campo esteja vazio
        return false//retorna falso caso algum campo esteja vazio
    }else{//caso todos os campos estejam preenchidos
        mensagemErro.innerText="";//limpa a mensagem de erro caso todos os campos estejam preenchidos
        return true;//retorna verdadeiro caso todos os campos estejam preenchidos
    }//FECHAMENTO DO ELSE
}//FECHAMENTO DA FUNÇÃO

function visualizarItem(){//função para visualizar os dados digitados nos campos
    if(validarCampos()==false){//verifica se os campos estão preenchidos, caso não estejam, retorna e não executa o restante da função
        return;//retorna e não executa o restante da função
    }//FECHAMENTO DO IF
     let nome=campoNome.value;//pega o valor do campo nome e armazena na variável nome
     let categoria=campoCategoria.value;//pega o valor do campo categoria e armazena na variável categoria
     let preco=campoPreco.value;//pega o valor do campo preço e armazena na variável preço
     let descricao=campoDescricao.value;//pega o valor do campo descrição e armazena na variável descrição

     visualNome.innerText=nome;//exibe o valor do campo nome na área de visualização
     visualCategoria.innerText="Categoria " + categoria;//exibe o valor do campo categoria na área de visualização
     visualPreco.innerText= `R$ ${preco}`;//exibe o valor do campo preço na área de visualização
     visualDescricao.innerText=descricao;//exibe o valor do campo descrição na área de visualização
}

function adicionarItem(){//função para adicionar os dados digitados nos campos na lista de itens
    if(validarCampos()==false){//verifica se os campos estão preenchidos, caso não estejam, retorna e não executa o restante da função
        return;//retorna e não executa o restante da função
    }///FECHAMENTO DO IF
    let nome=campoNome.value;//pega o valor do campo nome e armazena na variável nome
    let categoria=campoCategoria.value;//pega o valor do campo categoria e armazena na variável categoria
    let preco=campoPreco.value;//pega o valor do campo preço e armazena na variável preço
    let descricao=campoDescricao.value;//pega o valor do campo descrição e armazena na variável descrição

    let novoCard=document.createElement("div");//cria um novo elemento div que será usado para exibir os dados do item adicionado
    novoCard.className="card";//define a classe do novo elemento div como "card" para aplicar estilos CSS
    
    let tituloCard=document.createElement("h3");//cria um novo elemento h3 que será usado para exibir o nome do item adicionado
    tituloCard.innerText=nome;//define o texto do novo elemento h3 como o valor do campo nome
    
    let categoriaCard=document.createElement("p");//cria um novo elemento p que será usado para exibir a categoria do item adicionado
    categoriaCard.innerText="Categoria: " + categoria;//define o texto do novo elemento p como o valor do campo categoria
    
    let precoCard=document.createElement("p");//cria um novo elemento p que será usado para exibir o preço do item adicionado
    precoCard.innerText=`R$ ${preco}`;//define o texto do novo elemento p como o valor do campo preço
    
    let descricaoCard=document.createElement("p");//cria um novo elemento p que será usado para exibir a descrição do item adicionado
    descricaoCard.innerText="Descrição: " + descricao;//define o texto do novo elemento p como o valor do campo descrição

    
    novoCard.appendChild(tituloCard);//adiciona o elemento h3 (tituloCard) como filho do elemento div (novoCard)
    novoCard.appendChild(categoriaCard);//adiciona o elemento p (categoriaCard) como filho do elemento div (novoCard)
    novoCard.appendChild(precoCard);//adiciona o elemento p (precoCard) como filho do elemento div (novoCard)
    novoCard.appendChild(descricaoCard);//adiciona o elemento p (descricaoCard) como filho do elemento div (novoCard)

    listaItens.appendChild(novoCard);//adiciona o elemento div (novoCard) como filho do elemento div (listaItens), que é a lista de itens cadastrados

    campoNome.value="";//limpa o valor do campo nome após adicionar o item
    campoCategoria.value="";//limpa o valor do campo categoria após adicionar o item
    campoPreco.value="";//limpa o valor do campo preço após adicionar o item
    campoDescricao.value="";//limpa o valor do campo descrição após adicionar o item

    visualNome.innerText="Nome do Produto";//reseta o valor do campo visualNome para o valor padrão 
    visualCategoria.innerText="Categoria: ";//reseta o valor do campo visualCategoria para o valor padrão
    visualPreco.innerText="R$ 0,00";//reseta o valor do campo visualPreco para o valor padrão
    visualDescricao.innerText="Descrição: ";//reseta o valor do campo visualDescricao para o valor padrão
    mensagemErro.innerText="";//reseta o valor do campo mensagemErro para o valor padrão
}
