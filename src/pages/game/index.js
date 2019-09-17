(function () {
  const $root = document.querySelector('#root');

  const $cardsWrapper = createCardsWrapper();
  const createMemoryCard = memoryCard.create();
  const $pointBar = pointBar.create();
 
  const $memoryCardC = createMemoryCard({
    src: "img/icon-c.png",
    alt: "Icone de um livro da linguagem C++"
  });
  const $memoryCardJS = createMemoryCard({
    src: "img/icon-js.png",
    alt: "Icone de um livro da linguagem JS"
  });
  const $memoryCardJava = createMemoryCard({
    src: "img/icon-java.png",
    alt: "Icone de um livro da linguagem Java"
  });
  const $memoryCardWoman = createMemoryCard({
    src: "img/icon-woman.png",
    alt: "Icone de uma mulher codando"
  });
  
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJS);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardJava);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardWoman);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardWoman);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);
  $cardsWrapper.insertAdjacentHTML("beforeend", $memoryCardC);


  $root.insertAdjacentHTML("beforeend", $pointBar)
  $root.insertAdjacentElement("beforeend", $cardsWrapper);
})();
