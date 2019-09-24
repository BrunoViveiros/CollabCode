const flatButton = (function () {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .flat-button {
        background: #EAE6DA;
        color: #FFFCEE;
        font-size: 24px;
        font-weight: bold;
        border: none;
        width: 50%;
        height: 176px;
        text-transform: uppercase;
      }

      .flat-button.-active {
        background: #f25a70;
      }
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = () => {
    module._style();

    return (text, active="") => `<button class="flat-button ${active}">${text}</button>`;
  }

  return {
    render: module.render,
  };
})();
