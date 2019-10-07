const eyeCollabcode = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .eye-collabcode {
        display: block;
        background: url(./img/eye.svg) no-repeat center;
        text-indent: -9999px;
        width: 24px;
        height: 15px;
        cursor: pointer;
      }
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.handleClick = () => {
    console.log("click");
  };

  module.render = () => {
    module._style();
    return `<label
              class="eye-collabcode"
              onClick="eyeCollabcode.handleClick()"
              for="password"
            >Mostrar senha</label>`;
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
