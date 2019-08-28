
function createMemoryCard () {
  const $memoryCard = document.createElement("article");

  const $iconCollab = `
  <img
  src='img/icon-collabcode.png'
  alt='Gueio mascote da CollabCode'
  class='icon' 
  />
  `;
  
  $memoryCard.classList.add("memory-card");
  $wrapCards.insertBefore($memoryCard, null);
  
  $memoryCard.insertAdjacentHTML("afterbegin", $iconCollab);

  $memoryCard.addEventListener('click', () => console.log('click'));
}


function createMemoryCardFront() {
  const $memoryCardFront = document.createElement("article");

  const $iconJS = `
  <img 
    src="img/-icon-js.png"
    alt="Icone de um livro da linguagem JS"
    class="icon" 
  />
`

$memoryCardFront.classList.add("memory-card");
$memoryCardFront.classList.add("-front");
$wrapCards.insertBefore($memoryCardFront, null);


$memoryCardFront.insertAdjacentHTML("afterbegin", $iconJS);

$memoryCardFront.addEventListener('click', () => console.log('click'));
}
