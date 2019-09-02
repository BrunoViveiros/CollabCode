const createMemoryCard = ({ src, alt, nameClass }) => `
  <article class="memory-card ${nameClass}">
    <img
      src="${src}"
      alt='${alt}'
      class='icon'
      onClick="handleClick()"
    />
  </article>
`;

const handleClick = () => console.log('ae');

window.onload = () => {
  const $head = document.querySelector("head");
  const $styles = document.createElement("style");
  $styles.textContent = `
  .memory-card {
    width: 155px;
    height: 155px;
    background-color: #f25a70;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    position: relative;
    cursor: pointer;
  }
  
  .memory-card.-front {
    background-color: #FFF;
  }
  
  .memory-card.-front::before {
    content: '';
    width: 95px;
    height: 95px;
    background-color: #D4D4D4;
    border-radius: 50%;
    position: absolute;
  }
  
  .memory-card > .icon {
    width: 100px;
    height: 100px;
  }
  
  .memory-card.-front > .icon {
    position: absolute;
    transform: translateY(-10px);
  }
  
  `;
  $head.insertBefore($styles, null);
  
}
