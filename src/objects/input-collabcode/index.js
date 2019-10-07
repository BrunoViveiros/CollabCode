const inputCollabcode = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .input-collabcode {
        display: block;
        width: 100%;
        color: #3A4042;
        font-size: 18px;
        font-weight: bold;
        border-bottom: 1px solid rgba(58, 64, 66, 0.5);
        padding: 12px 0;
      }
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = (placeholder = "", type = "text") => {
    module._style();
    return `<input type="${type}" class="input-collabcode" placeholder="${placeholder}" />`;
  };

  return {
    render: module.render
  };
})();
