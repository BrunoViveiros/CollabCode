const $heart = document.querySelector(".-heart");
const $firstStar = document.querySelector(".star");

$heart.addEventListener("click", handleClickHeart)
$firstStar.addEventListener("click", handleClickFirstStar)


function handleClickHeart() {
  $heart.classList.toggle('-active')
}

function handleClickFirstStar() {
  $firstStar.classList.toggle("-active")
}
