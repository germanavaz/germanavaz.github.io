const categorias = document.querySelectorAll('input[name="categoria"]');
const resultados = document.getElementById('resultados');


const listaResultados = [
  {
    titulo: 'Pokedex',
    categoria: 'javascript',
    imagem: './imagens/projetos/projetos-mobile/pokedex-mobile.png',
    link: 'https://germanavaz.github.io/pokedex/', 
    resumo: 'Projeto consumindo a Poke API, listando todos os pokemons da lista com um carregamento assincrono. Cada card de cada pokemon é clicavel para exibir mais informações. Trabalho realizado para ser entregue no bootcamp da DIO.'
  },
  {
    titulo: 'Link Tree',
    categoria: 'javascript',
    imagem: './imagens/projetos/projetos-mobile/links-mobile.png',
    link: 'https://germanavaz.github.io/links-project/', 
    resumo: 'Site desenvolvido para armazenar e divulgar links de redes sociais, com o mecanismo de dark e light mode. Projeto realizado para entrega no curso da Rocketseat.'
  },
  {
    titulo: 'ODS - ONU',
    categoria: 'html',
    imagem: './imagens/projetos/projetos-mobile/ods-mobile.png',
    link: 'https://germanavaz.github.io/ods-onu/', 
    resumo: 'Landing Page abordando o 17º Objetivo de Desenvolvimento Sustentável da ONU. Realizado para promover e conscientizar sobre a vida terrestre. Projeto feito durante o bootcamp Elas na Tech.'
  },
  {
    titulo: 'Loja Virtual',
    categoria: 'javascript',
    imagem: './imagens/projetos/projetos-mobile/market-mobile.png',
    link: 'https://germanavaz.github.io/market/',
    resumo: 'Página para um e-commerce com sistema de adicionar ao carrinho, mexer nas quantidades e atualização do preço total em tempo real. Projeto realizado durante a semana do Javascript da Hashtag Treinamentos.'
  },
  {
    titulo: 'Agência de Sites',
    categoria: 'wordpress',
    imagem: './imagens/projetos/projetos-mobile/studio-mobile.png',
    link: 'https://germanavaz.com.br/', 
    resumo: 'Landing Page para minha agência de criação de sites.'
  },
  {
    titulo: 'Inova Nutrição',
    categoria: 'wordpress',
    imagem: './imagens/projetos/projetos-mobile/nutricao-mobile.png',
    link: 'https://germanavaz.com.br/inovarenutricao/', 
    resumo: 'Landing Page para uma empresa de nutricionistas.'
  },
  {
    titulo: 'App Exercícios',
    categoria: 'wordpress',
    imagem: './imagens/projetos/projetos-mobile/exercicios-mobile.png',
    link: 'https://germanavaz.com.br/5minutos/', 
    resumo: 'Landing Page para um aplicativo de exercícios.'
  },
  {
    titulo: 'App Finans',
    categoria: 'wordpress',
    imagem: './imagens/projetos/projetos-mobile/finans-mobile.png',
    link: 'https://germanavaz.com.br/finans/', 
    resumo: 'Landing Page para o aplicativo Finans'
  },
  {
    titulo: 'Cardápio',
    categoria: 'html',
    imagem: './imagens/projetos/projetos-mobile/cardapio-mobile.png',
    link: 'https://germanavaz.github.io/cardapio/', 
    resumo: 'Projeto feito durante o bootcamp Elas na Tech. Onde simula um cardápio online de um restaurante.'
  },
  
];

// Função para exibir todos os resultados iniciais
function exibirTodosResultados() {
  resultados.innerHTML = '';
  listaResultados.forEach(resultado => {
    const divResultado = document.createElement('div');
    divResultado.innerHTML = `
    <div class="projeto-cadaprojeto projeto">
    <a href="${resultado.link}" target="_blank" class="img-projeto">
                    <img src="${resultado.imagem}" alt="" width="100">
                </a>
                <div class="descricao-projeto-proj">
                    <h4>${resultado.titulo}</h4>
                    <p>${resultado.resumo}</p>
                    <p id="tag-a-projetos"><a href="${resultado.link}" target="_blank" rel="noopener noreferrer">Ver projeto <ion-icon name="open-outline"></ion-icon></a></p>
                </div>
`;
    resultados.appendChild(divResultado);
  });
}

// exiba todos os resultados
exibirTodosResultados();

// Adicionar um evento de clique a cada categoria
categorias.forEach(categoria => {
  categoria.addEventListener('change', filtrarResultados);
});

// Função para filtrar os resultados com base nas categorias selecionadas
function filtrarResultados() {
  const categoriasSelecionadas = Array.from(categorias)
    .filter(categoria => categoria.checked)
    .map(categoria => categoria.value);

  // Limpar resultados anteriores
  resultados.innerHTML = '';

  // Exibir resultados correspondentes
  listaResultados.forEach(resultado => {
    if (
      categoriasSelecionadas.includes(resultado.categoria) ||
      categoriasSelecionadas.includes('outra')
    ) {
      const divResultado = document.createElement('div');
      divResultado.innerHTML = `
      <div class="projeto-cadaprojeto projeto">
        <a href="${resultado.link}" target="_blank" class="img-projeto">
                    <img src="${resultado.imagem}" alt="" width="100">
                </a>
                <div class="descricao-projeto-proj">
                    <h4>${resultado.titulo}</h4>
                    <p>${resultado.resumo}</p>
                    <p id="tag-a-projetos"><a href="${resultado.link}" target="_blank" rel="noopener noreferrer">Ver projeto <ion-icon name="open-outline"></ion-icon></a></p>
                </div>
      `;
      resultados.appendChild(divResultado);
    }
  });
}
