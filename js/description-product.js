const $heart = window.document.querySelector(".-heart");
const $button = window.document.querySelector("button.-second");
const $carrinho = window.document.querySelector(".navigation > .-last");
let items = 10;

$heart.addEventListener("click", handleClick)
$button.addEventListener("click", addItemCarrinho)

function handleClick() {
  console.log('ae');
}

function addItemCarrinho() {
  handleClick();
  
  items ++;

  $carrinho.innerText = `Carrinho (${items})`;
}
