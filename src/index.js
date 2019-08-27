const $root = document.querySelector("#root");
const $memoryCard = document.createElement("article");
const $memoryCardFront = document.createElement("article"); 

const $iconCollab = `
  <img
    src='img/icon-collabcode.png'
    alt='Gueio mascote da CollabCode'
    class='icon' 
  />
`;

const $iconJS = `
  <img 
    src="img/-icon-js.png"
    alt="Icone de um livro da linguagem JS"
    class="icon" 
  />
`

$memoryCard.classList.add("memory-card");
$root.insertBefore($memoryCard, null);

$memoryCardFront.classList.add("memory-card");
$memoryCardFront.classList.add("-front");
$root.insertBefore($memoryCardFront, null);



$memoryCard.insertAdjacentHTML("afterbegin", $iconCollab);

$memoryCardFront.insertAdjacentHTML("afterbegin", $iconJS);
