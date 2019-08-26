const $root = document.querySelector("#root");
let $memoryCard = document.createElement("article");
let $icon = `
<img
src='img/icon-collabcode.png'
alt='Gueio mascote da CollabCode'
class='icon' 
/>
`;

$memoryCard.classList.add("memory-card");

$root.insertBefore($memoryCard, null);
$memoryCard.insertAdjacentHTML("afterbegin", $icon);


//Desafio
$memoryCard = document.createElement("article");
$memoryCard.classList.add("memory-card", "-front");

$icon = document.createElement("img");
$icon.setAttribute('src', 'img/-icon-js.png');
$icon.setAttribute('alt', 'JavaScript Book');
$icon.classList.add('icon');

const $circle = document.createElement("div");
$circle.classList.add("circle");

$memoryCard.appendChild($icon);
$memoryCard.appendChild($circle);

$root.appendChild($memoryCard);
