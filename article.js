// Exibir notícia completa
document.addEventListener("DOMContentLoaded", () => {
  const articleSection = document.querySelector(".full-article");

  // Pega ID da URL (?id=1)
  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get("id"));

  const noticia = noticias.find(n => n.id === id);

  if (noticia && articleSection) {
    articleSection.innerHTML = `
      <h1>${noticia.titulo}</h1>
      <p class="subtitle">${noticia.resumo}</p>
      <img src="${noticia.imagem}" alt="">
      ${noticia.conteudo}
    `;
  } else {
    articleSection.innerHTML = `<p>Notícia não encontrada.</p>`;
  }
});
