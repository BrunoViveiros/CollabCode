
const createMemoryCard = (front = false) => {
  let icon = 'icon-collabcode.png';
  let frontClass = '';

  if (front) {
    icon = '-icon-js.png';
    frontClass = '-front';
  }

  const $memoryCard = `
    <article class="memory-card ${frontClass}">
      <img
        src='img/${icon}'
        alt='Gueio mascote da CollabCode'
        class='icon'
        onClick="handleClick()"
      />
    </article>
  `;

  return $memoryCard;
}


function handleClick() {
  console.log('ae');
}
