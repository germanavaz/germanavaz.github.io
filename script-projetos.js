const categorias = document.querySelectorAll('input[name="categoria"]');
const resultados = document.getElementById('resultados');


const listaResultados = [
  {
    titulo: 'Pokedex',
    categoria: 'javascript',
    imagem: './imagens/projetos/projetos-mobile/pokedex-mobile.png',
    link: 'https://germanavaz.github.io/pokedex/'
  },
  {
    titulo: 'Link Tree',
    categoria: 'javascript',
    imagem: './imagens/projetos/projetos-mobile/links-mobile.png',
    link: 'https://germanavaz.github.io/links-project/'
  },
  {
    titulo: 'ODS - ONU',
    categoria: 'html',
    imagem: './imagens/projetos/projetos-mobile/ods-mobile.png',
    link: 'https://germanavaz.github.io/ods-onu/'
  },
  {
    titulo: 'Loja Virtual',
    categoria: 'javascript',
    imagem: './imagens/projetos/projetos-mobile/market-mobile.png',
    link: 'https://germanavaz.github.io/market/'
  },
  {
    titulo: 'Agência de Sites',
    categoria: 'wordpress',
    imagem: './imagens/projetos/projetos-mobile/studio-mobile.png',
    link: 'https://germanavaz.com.br/'
  },
  {
    titulo: 'Inova Nutrição',
    categoria: 'wordpress',
    imagem: './imagens/projetos/projetos-mobile/nutricao-mobile.png',
    link: 'https://germanavaz.com.br/inovarenutricao/'
  },
  {
    titulo: 'App Exercícios',
    categoria: 'wordpress',
    imagem: './imagens/projetos/projetos-mobile/exercicios-mobile.png',
    link: 'https://germanavaz.com.br/5minutos/'
  },
  {
    titulo: 'App Financias',
    categoria: 'wordpress',
    imagem: './imagens/projetos/projetos-mobile/finans-mobile.png',
    link: 'https://germanavaz.com.br/finans/'
  },
  
];

// Função para exibir todos os resultados iniciais
function exibirTodosResultados() {
  resultados.innerHTML = '';
  listaResultados.forEach(resultado => {
    const divResultado = document.createElement('div');
    divResultado.innerHTML = `
    <div class="projeto-cadaprojeto">
    <h3>${resultado.titulo}</h3>
    <a href="${resultado.link}" target="_blank">
      <img src="${resultado.imagem}" alt="${resultado.titulo}" width="100">
    </a></div>
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
      <div class="projeto-cadaprojeto">
        <h3>${resultado.titulo}</h3>
        <a href="${resultado.link}" target="_blank">
          <img src="${resultado.imagem}" alt="${resultado.titulo}" width="100">
        </a> </div>
      `;
      resultados.appendChild(divResultado);
    }
  });
}
