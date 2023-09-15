/// Selecionar os elementos HTML
const categorias = document.querySelectorAll('input[name="categoria"]');
const resultados = document.getElementById('resultados');

// Exemplo de lista de resultados (você pode substituir isso com seus próprios dados)
const listaResultados = [
  {
    titulo: 'Exemplo HTML',
    categoria: 'html',
    imagem: './imagens/projetos/projetos-mobile/pokedex-mobile.png',
    link: 'https://germanavaz.github.io/pokedex/'
  },
  {
    titulo: 'Exemplo CSS',
    categoria: 'css',
    imagem: './imagens/projetos/projetos-mobile/pokedex-mobile.png',
    link: 'https://germanavaz.github.io/pokedex/'
  },
  {
    titulo: 'Exemplo JavaScript',
    categoria: 'javascript',
    imagem: './imagens/projetos/projetos-mobile/pokedex-mobile.png',
    link: 'https://germanavaz.github.io/pokedex/'
  },
  {
    titulo: 'Exemplo WordPress',
    categoria: 'wordpress',
    imagem: './imagens/projetos/projetos-mobile/pokedex-mobile.png',
    link: 'https://germanavaz.github.io/pokedex/'
  },
  {
    titulo: 'Exemplo Elementor',
    categoria: 'elementor',
    imagem: './imagens/projetos/projetos-mobile/pokedex-mobile.png',
    link: 'https://germanavaz.github.io/pokedex/'
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
