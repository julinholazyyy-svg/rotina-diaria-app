let cart = 0;

function comprar() {
  cart++;
  document.getElementById("cartCount").innerText = cart;
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
