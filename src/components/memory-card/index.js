const memoryCard = () => {

const $head = document.querySelector('head');
const $style = document.createElement('style');

$style.textContent = `
  .memory-card {
    width: 155px;
    height: 155px;
    position: relative;
  }

  .memory-card .card {
    width: 100%;
    height: 100%;
    background-color: #f25a70;
    border-radius: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16);
    position: relative;
    cursor: pointer;
    position: absolute;
  }

  .memory-card.-active .card {
    display: none;
  }

  .memory-card.-active .card.-front {
    display: flex;
  }

  .memory-card .card.-front {
    background-color: #FFF;
  }

  .memory-card .card.-front::before {
    content: '';
    width: 95px;
    height: 95px;
    background-color: #D4D4D4;
    border-radius: 50%;
    position: absolute;
  }

  .memory-card .card > .icon {
    width: 100px;
    height: 100px;
  }

  .memory-card .card.-front > .icon {
    position: absolute;
    transform: translateY(-10px);
  }
`;

$head.insertBefore($style, null);

  return ({ src, alt }) => `
    <div class="memory-card" onClick="handleClick(this)">
      <article class="card -front">
        <img
          src="${src}"
          alt='${alt}'
          class='icon'
        />
      </article>
      <article class="card">
        <img
          src="img/icon-collabcode.png"
          alt="O mascote da CollabCode o Gueio"
          class='icon'
        />
      </article>
    </div>
  `;
};

const handleClick = $component => $component.classList.toggle("-active");
