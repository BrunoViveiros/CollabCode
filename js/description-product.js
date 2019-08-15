const $heart = window.document.querySelector(".-heart");

$heart.addEventListener("click", handleClick)

function handleClick() {
  if ($heart.classList.contains('-ativo')) {
    $heart.firstChild.setAttribute('src', '../assets/heart.png')
    $heart.classList.remove('-ativo')
  } else {
    $heart.firstChild.setAttribute('src', '../assets/heart-active.png')
    $heart.classList.add('-ativo')
  }
}
