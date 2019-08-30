/* const createMemoryCard = (src, alt, nameClass) => `
  <article class="memory-card ${nameClass}">
    <img
      src="${src}"
      alt='${alt}'
      class='icon'
      onClick="handleClick()"
    />
  </article>
`; */

//Desafio

const createMemoryCard = card => `
  <article class="memory-card ${card.nameClass}">
    <img
      src="${card.src}"
      alt='${card.alt}'
      class='icon'
      onClick="handleClick()"
    />
  </article>
`;

const handleClick = () => console.log('ae');
