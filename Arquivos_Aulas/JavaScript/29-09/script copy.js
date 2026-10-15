/**
 * ============================================================================
 * SELEÇÃO DE ELEMENTOS DO DOM (Document Object Model)
 * Captura as referências dos elementos HTML para manipulação via JavaScript.
 * ============================================================================
 */

// Cria uma variável de escopo de bloco (let) e armazena a referência do input onde o usuário digita o nome do produto.
// O método querySelector busca o primeiro elemento HTML que possui o atributo ID igual a "nome" (indicado pelo prefixo #).
let campoNome = document.querySelector("#nome"); 

// Captura a referência do campo de seleção (select) ou texto (input) correspondente à categoria do item.
let campoCategoria = document.querySelector("#categoria"); 

// Captura a referência do campo de entrada numérica ou texto onde será digitado o preço do produto.
let campoPreco = document.querySelector("#preco"); 

// Captura a referência da área de texto (textarea) ou input reservada para a descrição detalhada do item.
let campoDescricao = document.querySelector("#descricao"); 

// Captura a referência do botão que aciona a função de visualização prévia (preview) dos dados na tela.
let botaoVisualizar = document.querySelector("#visualizar"); 

// Captura a referência do botão responsável por submeter os dados e efetivamente adicionar o item à listagem final.
let botaoAdicionar = document.querySelector("#adicionar"); 

// Captura o elemento de texto (ex: span, h2, p) que exibirá em tempo real ou sob comando o nome do produto na área de preview.
let visualNome = document.querySelector("#visualNome"); 

// Captura o elemento de texto destinado a exibir o preview da categoria formatada.
let visualCategoria = document.querySelector("#visualCategoria"); 

// Captura o elemento de texto configurado para mostrar o preview do preço formatado com a moeda.
let visualPreco = document.querySelector("#visualPreco"); 

// Captura o elemento de texto configurado para mostrar o preview do bloco de descrição do produto.
let visualDescricao = document.querySelector("#visualDescricao"); 

// Captura o container ou elemento de texto reservado exclusivamente para renderizar mensagens de validação e alertas de erro.
let mensagemErro = document.querySelector("#mensagemErro"); 

// Captura o container principal (geralmente uma div ou section) que servirá como repositório onde os novos cards de produtos serão inseridos.
let listaItens = document.querySelector("#listaItens"); 


/**
 * ============================================================================
 * ASSINATURA DE EVENTOS (Event Listeners)
 * Vincula as interações do usuário (cliques) às respectivas funções lógicas.
 * ============================================================================
 */

// Adiciona um "escutador de eventos" ao botaoVisualizar. Quando o usuário disparar um clique físico ou digital nele,
// o JavaScript interceptará o evento e invocará automaticamente a função de callback 'visualizarItem'.
botaoVisualizar.addEventListener("click", visualizarItem);

// Adiciona um "escutador de eventos" ao botaoAdicionar. Executa a função 'adicionarItem' assim que o botão for clicado,
// iniciando o fluxo de criação do card e limpeza do formulário.
botaoAdicionar.addEventListener("click", adicionarItem);


/**
 * ============================================================================
 * FUNÇÕES DE REGRA DE NEGÓCIO E MANIPULAÇÃO
 * INÍCIO DA FUNÇÃO: validarCampos
 * Objetivo: Verificar se o usuário preencheu todos os dados obrigatórios do formulário.
 * Retorno: Booleano (true para sucesso/válido, false para falha/inválido).
 * ============================================================================
 */
function validarCampos() {
    
    // Inicia uma estrutura condicional avaliando a propriedade '.value' (conteúdo atual digitado) de cada campo.
    // Utiliza o operador lógico OR (||), significando que se PELO MENOS UM dos campos estiver vazio (""), a condição será verdadeira.
    if (
        campoNome.value == "" ||       // Verifica se a string do campo Nome está vazia.
        campoCategoria.value == "" ||  // Verifica se a string do campo Categoria está vazia.
        campoPreco.value == "" ||      // Verifica se a string do campo Preço está vazia.
        campoDescricao.value == ""     // Verifica se a string do campo Descrição está vazia.
    ) { 
        // Se a condição acima for atendida (um ou mais campos vazios), define o texto interno do elemento de erro.
        mensagemErro.innerText = "preencha todos os campos.";
        
        // Retorna explicitamente o valor booleano 'false'. Isso interrompe imediatamente a execução da função
        // e avisa o bloco que a chamou que o formulário está inválido.
        return false; 
        
    } else { 
        // Caso absolutamente todos os campos possuam algum conteúdo (condição 'if' falhou):
        // Limpa qualquer texto de erro que estivesse visível de tentativas incorretas anteriores.
        mensagemErro.innerText = "";
        
        // Retorna explicitamente o valor booleano 'true', sinalizando que a validação passou com sucesso.
        return true; 
    } 
} 


/**
 * ============================================================================
 * INÍCIO DA FUNÇÃO: visualizarItem
 * Objetivo: Capturar os dados do formulário e atualizar a área de "Preview" em tempo real.
 * ============================================================================
 */
function visualizarItem() {
    
    // Executa a função 'validarCampos'. Se ela retornar exatamente 'false' (dados incompletos),
    // o bloco entra no IF e executa uma cláusula 'return' vazia, que funciona como um freio de mão,
    // impedindo que o script continue para as linhas de baixo.
    if (validarCampos() == false) { 
        return; 
    } 

    // Cria variáveis locais para isolar e armazenar o texto atual/instantâneo de cada input do formulário.
    let nome = campoNome.value;
    let categoria = campoCategoria.value;
    let preco = campoPreco.value;
    let descricao = campoDescricao.value;

    // Injeta o nome extraído diretamente no texto interno (innerText) do elemento visual correspondente.
    visualNome.innerText = nome;
    
    // Realiza uma concatenação simples de string, juntando o prefixo estático "Categoria " com a variável dinâmica.
    visualCategoria.innerText = "Categoria " + categoria;
    
    // Utiliza uma Template Literal (expressão entre crases `` e interpolada com ${}) para formatar o preço
    // injetando dinamicamente o símbolo da moeda local (R$) antes do valor.
    visualPreco.innerText = `R$ ${preco}`;
    
    // Injeta a descrição extraída diretamente no elemento de preview da descrição.
    visualDescricao.innerText = descricao;
} 


/**
 * ============================================================================
 * INÍCIO DA FUNÇÃO: adicionarItem
 * Objetivo: Gerar dinamicamente uma estrutura HTML em formato de "Card", preenchê-la,
 * adicioná-la à listagem da página e resetar o formulário.
 * ============================================================================
 */
function adicionarItem() {
    
    // Invoca novamente o validador. Caso falte algum preenchimento, cancela a operação imediatamente.
    if (validarCampos() == false) { 
        return; 
    } 

    // Captura e armazena os valores atuais dos campos em variáveis locais de escopo de bloco.
    let nome = campoNome.value;
    let categoria = campoCategoria.value;
    let preco = campoPreco.value;
    let descricao = campoDescricao.value;
}
    // --- CRIAÇÃO DOS ELEMENTOS NA MEMÓRIA ---
    
    // Cria um novo nó de elemento do tipo "div" virtual (ainda não visível na página de fato).
    let novoCard = document.createElement("div");
    // Atribui a classe CSS "card" a essa div para que ela herde as estilizações visuais definidas no seu arquivo CSS.
    novoCard.className = "card";

    // Cria um elemento de cabeçalho nível 3 (h3) que atuará como o título principal do card.
    let tituloCard = document.createElement("h3");
    // Define que o conteúdo textual interno deste h3 será o nome do produto capturado.
    tituloCard.innerText = nome;

    // Cria um parágrafo (p) para guardar as informações da categoria do produto.
    let categoriaCard = document.createElement("p");
    // Formata o texto concatenando a etiqueta "Categoria: " com o valor real da variável.
    categoriaCard.innerText = "Categoria: " + categoria;

    // Cria um parágrafo (p) dedicado a exibir a informação financeira do item.
    let precoCard = document.createElement("p");
    // Formata o valor usando template string para adicionar o prefixo monetário brasileiro.
    precoCard.innerText = `R$ ${preco}`;

    // Cria um parágrafo (p) dedicado a exibir o bloco descritivo do produto.
    let descricaoCard = document.createElement("p");
    // Define o texto concatenando o rótulo descritivo ao conteúdo textual vindo do formulário.
    descricaoCard.innerText = "Descrição: " + descricao;

    // --- MONTAGEM DAESTRUTURA (ÁRVORE DOM) ---
    
    // Anexa (insere) o elemento tituloCard (h3) como o primeiro filho interno do container novoCard (div).
    novoCard.appendChild(tituloCard);
    
    // Anexa o elemento categoriaCard (p) logo abaixo do título, dentro do card.
    novoCard.appendChild(categoriaCard);
    
    // Anexa o elemento precoCard (p) na sequência interna do card.
    novoCard.appendChild(precoCard);
    
    // Anexa o elemento descricaoCard (p) como o último elemento filho da estrutura do card.
    novoCard.appendChild(descricaoCard);

    // Pega o card totalmente montado na memória (com sua div e os 4 elementos filhos) e o insere
    // no elemento 'listaItens' que já existe estruturado no HTML fixo. Nesse momento, o produto aparece na tela.
    listaItens.appendChild(novoCard);

    // --- LIMPEZA DE CAMPOS E ESTADOS (RESET) ---
    
