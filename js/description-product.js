const $heart = document.querySelector(".-heart");
const $stars = document.querySelectorAll(".star");

$heart.addEventListener("click", handleClick)

$stars.forEach(function ($star, index) {
  $star.addEventListener('click', () => {
    handleStar($star, index);
  })
})

function handleClick() {
  this.classList.toggle('-active')
}

function handleStar($star, index) {
  const lastKey = $stars.length - 1;

  if ($star.classList.contains('-active')) {
    for (let i = lastKey; i > index; i--) {
      $stars[i].classList.remove('-active');
    }

  } else {
    for (let i = 0; i <= index; i++) {
      $stars[i].classList.add('-active');
    }
  }
}
