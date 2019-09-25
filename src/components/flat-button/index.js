const flatButton = (function () {
  const module = {};

  module._id = 0;

  module._style = (active) => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .flat-button-${module._id} {
        background: ${active ? "#F25A70" : "#EAE6DA"};
        color: ${active ? "#FFF" : "#FFFCEE"};
        font-size: 24px;
        font-weight: bold;
        border: none;
        width: 50%;
        height: 176px;
        text-transform: uppercase;
      }
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = (content = "", active = false) => {
    module._id++;
    module._style(active);

    return `<button class="flat-button-${module._id}">${content}</button>`;
  }

  return {
    render: module.render,
  };
})();
