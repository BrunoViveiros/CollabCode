const $hamburgerMenu = document.querySelector('.hamburger-menu');
const $hOpen = $hamburgerMenu.querySelector('.-open');
const $hClose = $hamburgerMenu.querySelector('.-close');

$hOpen.addEventListener('click', event => {
  event.preventDefault();

  $hamburgerMenu.classList.toggle('-active');
  $hOpen.classList.remove('-active');
  $hClose.classList.add('-active');
});

$hClose.addEventListener('click', event => {
  event.preventDefault();

  $hamburgerMenu.classList.toggle('-active');
  $hClose.classList.remove('-active');
  $hOpen.classList.add('-active');
});
