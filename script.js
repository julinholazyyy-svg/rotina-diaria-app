let cart = [];

function comprar() {
  // pega info do card clicado
  let card = event.target.parentElement;

  let nome = card.querySelector("h3").innerText;
  let precoText = card.querySelector("span").innerText;
  let preco = parseFloat(precoText.replace("€", "").replace(",", "."));

  cart.push({ nome, preco });

  atualizarCarrinho();
}

function atualizarCarrinho() {
  let cartCount = document.getElementById("cartCount");
  cartCount.innerText = cart.length;

  // cria/atualiza painel do carrinho
  let painel = document.getElementById("cartPanel");

  if (!painel) {
    painel = document.createElement("div");
    painel.id = "cartPanel";
    document.body.appendChild(painel);
  }

  let html = "<h3>🛒 Carrinho</h3>";

  let total = 0;

  cart.forEach((item, index) => {
    total += item.preco;

    html += `
      <div class="cart-item">
        <p>${item.nome}</p>
        <span>${item.preco.toFixed(2)}€</span>
      </div>
    `;
  });

  html += `<hr><strong>Total: ${total.toFixed(2)}€</strong>`;

  painel.innerHTML = html;
}

function filtrar() {
  let input = document.getElementById("search").value.toLowerCase();
  let cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    let nome = card.getAttribute("data-name");

    if (nome.includes(input)) {
      card.style.display = "block";
    } else {
      card.style.display = "none";
    }
  });
}
