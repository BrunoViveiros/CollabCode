const $search = document.querySelector('[type=search]');
const $lupa = document.querySelectorAll('.navigation .icon')[0]
const $close = document.querySelectorAll('.navigation .icon')[1]

$lupa.addEventListener('click', () => {
  $search.classList.toggle("-active");
  $lupa.classList.toggle("-active");
  $lupa.classList.toggle("-slide");
  $close.classList.toggle("-active");
  $close.classList.toggle("-slide");
});

$close.addEventListener('click', () => {
  $search.classList.toggle("-active");
  $lupa.classList.toggle("-active");
  $lupa.classList.toggle("-slide");
  $close.classList.toggle("-slide");
  $close.classList.toggle("-active");
  
});
