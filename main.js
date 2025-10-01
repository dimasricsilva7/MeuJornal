// Carregar notícias dinamicamente no index.html
document.addEventListener("DOMContentLoaded", () => {
  const highlightSection = document.querySelector(".highlight");
  const secondarySection = document.querySelector(".secondary");

  if (!highlightSection || !secondarySection) return;

  // Notícia principal (primeira da lista)
  const principal = noticias[0];
  highlightSection.innerHTML = `
    <a href="article.html?id=${principal.id}">
      <img src="${principal.imagem}" alt="">
      <h1>${principal.titulo}</h1>
    </a>
    <p>${principal.resumo}</p>
  `;

  // Notícias secundárias (resto da lista)
  secondarySection.innerHTML = "";
  noticias.slice(1).forEach(noticia => {
    secondarySection.innerHTML += `
      <article>
        <a href="article.html?id=${noticia.id}">
          <img src="${noticia.imagem}" alt="">
        </a>
        <h2><a href="article.html?id=${noticia.id}">${noticia.titulo}</a></h2>
      </article>
    `;
  });
});
