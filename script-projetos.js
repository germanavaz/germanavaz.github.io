// Selecionar os elementos HTML
const categorias = document.querySelectorAll('input[name="categoria"]');
const buscaInput = document.getElementById('busca');
const resultados = document.getElementById('resultados');

// Adicionar um evento de clique a cada categoria
categorias.forEach(categoria => {
  categoria.addEventListener('change', filtrarResultados);
});

// Adicionar um evento de input para a busca
buscaInput.addEventListener('input', filtrarResultados);

// Função para filtrar os resultados
function filtrarResultados() {
  const termoBusca = buscaInput.value.toLowerCase();
  const categoriasSelecionadas = Array.from(categorias)
    .filter(categoria => categoria.checked)
    .map(categoria => categoria.value);

  // Aqui você pode adicionar sua lógica de filtragem com base no termo de busca e nas categorias selecionadas
  // Por exemplo, você pode ter uma lista de resultados e mostrar/ocultar de acordo com os critérios

  // Limpar resultados anteriores
  resultados.innerHTML = '';

  // Exibir resultados correspondentes
  // Suponha que você tenha uma lista de resultados em um array chamado 'listaResultados'
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

// Exemplo de lista de resultados (você pode substituir isso com seus próprios dados)
const listaResultados = [
  { titulo: 'Exemplo HTML', categoria: 'html' },
  { titulo: 'Exemplo CSS', categoria: 'css' },
  { titulo: 'Exemplo JavaScript', categoria: 'javascript' },
  { titulo: 'Exemplo WordPress', categoria: 'wordpress' },
  { titulo: 'Exemplo Elementor', categoria: 'elementor' },
  { titulo: 'Exemplo Outra Categoria', categoria: 'outra' },
];
