function comprar(produto) {
  alert("🍫 " + produto + " adicionado ao carrinho!");
}

function scrollProdutos() {
  document.getElementById("produtos").scrollIntoView({
    behavior: "smooth"
  });
}
