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


const $stars = document.querySelectorAll(".-star .icon");

$stars.forEach(function(star, index){
  star.addEventListener("click", function() {
    handleStar(index);
  }) 
})    

function handleStar(index) {

  if ($stars[index].classList.contains('-active')) {
    for (let i = 4; i > index; i--) {
      $stars[i].classList.remove('-active');
      $stars[i].setAttribute('src', '../assets/star.png')
    }

  } else {
    for (let i = 0; i <= index; i++) {
      $stars[i].classList.add('-active');
      $stars[i].setAttribute('src', '../assets/star-full.png')
    }
    
  }
  
}




