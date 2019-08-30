/*const $root = document.querySelector('#root');

const $cardsWrapper = createCardsWrapper();
const $memoryCard = createMemoryCard("img/icon-collabcode.png", "Gueio mascote da CollabCode");
const $memoryCardFront = createMemoryCard("img/icon-js.png", "Icone de um livro de JS", "-front");

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFront);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardFront);

$root.insertAdjacentElement("beforeend", $cardsWrapper);
 */


 //Desafio
const $root = document.querySelector('#root');
const $cardsWrapper = createCardsWrapper();

const $memoryCard = createMemoryCard({
  src:"img/icon-collabcode.png",
  alt:"Gueio mascote da CollabCode"
});
const $memoryCardJS = createMemoryCard({
  nameClass:"-front",
  src:"img/icon-js.png",
  alt:"Icone de um livro de JS"
});
const $memoryCardJava = createMemoryCard({
  nameClass:"-front",
  src:"img/icon-java.png",
  alt:"Icone de um livro de Java"
});
const $memoryCardPHP = createMemoryCard({
  nameClass:"-front",
  src:"img/icon-php.png",
  alt:"Icone de um livro de PHP"
});

$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCard);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPHP);
$cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardPHP);

$root.insertAdjacentElement("beforeend", $cardsWrapper);
