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

<<<<<<< HEAD
  module.render = placeholder => {
=======
  module.render = ({ placeholder = "", type = "text" }) => {
>>>>>>> Aula044
    module._style();
    return `<input type="text" class="input-collabcode" placeholder="${placeholder ||
      ""}" />`;
  };

  return {
    render: module.render
  };
})();
