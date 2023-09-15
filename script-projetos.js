// Selecionar os elementos HTML
const categorias = document.querySelectorAll('input[name="categoria"]');
const buscaInput = document.getElementById('busca');
const resultados = document.getElementById('resultados');

// Exemplo de lista de resultados 
const listaResultados = [
  { titulo: 'Lading-page ODS', imagem: './imagens/projetos/ods.png', link: 'https://germanavaz.github.io/ods-onu/', categoria: 'html' },
  { titulo: 'Exemplo CSS', categoria: 'css' },
  { titulo: 'Exemplo JavaScript', categoria: 'javascript' },
  { titulo: 'Exemplo WordPress', categoria: 'wordpress' },
  { titulo: 'Exemplo Elementor', categoria: 'elementor' },
  { titulo: 'Exemplo Outra Categoria', categoria: 'outra' },
];

// Função para exibir todos os resultados iniciais
function exibirTodosResultados() {
  resultados.innerHTML = '';
  listaResultados.forEach(resultado => {
    const divResultado = document.createElement('div');
    divResultado.innerHTML =  `<div class="projeto-cadaprojeto"> <h3>${resultado.titulo}</h3>
    <a href="${resultado.link}" target="_blank">
      <img src="${resultado.imagem}" alt="${resultado.titulo}" width="100">
    </a></div>
  `;
    resultados.appendChild(divResultado);
  });
}

// Função para filtrar os resultados com base nas categorias selecionadas e no termo de busca
function filtrarResultados() {
  const termoBusca = buscaInput.value.toLowerCase();
  const categoriasSelecionadas = Array.from(categorias)
    .filter(categoria => categoria.checked)
    .map(categoria => categoria.value);

  // Limpar resultados anteriores
  resultados.innerHTML = '';

  // Exibir resultados correspondentes
  listaResultados.forEach(resultado => {
    if (
      resultado.titulo.toLowerCase().includes(termoBusca) &&
      (categoriasSelecionadas.includes(resultado.categoria) ||
        categoriasSelecionadas.includes('outra'))
    ) {
      const divResultado = document.createElement('div');
      divResultado.textContent = resultado.titulo;
      resultados.appendChild(divResultado);
    }
  });
}

// Inicialmente, exiba todos os resultados
exibirTodosResultados();

// Adicionar um evento de clique a cada categoria
categorias.forEach(categoria => {
  categoria.addEventListener('change', filtrarResultados);
});

// Adicionar um evento de input para a busca
buscaInput.addEventListener('input', filtrarResultados);