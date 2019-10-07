const eyeCollabcode = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .eye-collabcode {
        display: block;
        text-indent: -9999px;
        background: url(./img/eye.svg) no-repeat center;
        width: 24px;
        height: 15px;

      }
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.render = () => {
    module._style();
    return `<label class="eye-collabcode">Mostrar senha</label>`;
  };

  return {
    render: module.render
  };
})();
