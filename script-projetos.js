/// Selecionar os elementos HTML
const categorias = document.querySelectorAll('input[name="categoria"]');
const resultados = document.getElementById('resultados');

// Exemplo de lista de resultados (você pode substituir isso com seus próprios dados)
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
    categoria: 'elementor',
    imagem: './imagens/projetos/projetos-mobile/studio-mobile.png',
    link: 'https://germanavaz.com.br/'
  },
  {
    titulo: 'Inova Nutrição',
    categoria: 'elementor',
    imagem: './imagens/projetos/projetos-mobile/nutricao-mobile.png',
    link: 'https://germanavaz.com.br/inovarenutricao/'
  },
  {
    titulo: 'App Exercícios',
    categoria: 'elementor',
    imagem: './imagens/projetos/projetos-mobile/exercicios-mobile.png',
    link: 'https://germanavaz.com.br/5minutos/'
  },
  {
    titulo: 'App Financias',
    categoria: 'elementor',
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

// Restante do código permanece o mesmo

// Inicialmente, exiba todos os resultados
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
        <p>Categoria: ${resultado.categoria}</p>
        <a href="${resultado.link}" target="_blank">
          <img src="${resultado.imagem}" alt="${resultado.titulo}" width="100">
        </a> </div>
      `;
      resultados.appendChild(divResultado);
    }
  });
}
