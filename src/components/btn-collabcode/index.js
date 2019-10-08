const btnCollabcode = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .btn-collabcode {
        width: 100%;
        background: #F25A70;
        border-radius: 24px;
        height: 48px;
        color: #FFF;
        font-size: 14px;
        font-weight: bold;
        text-transform: uppercase;
        cursor: pointer;
      }

      .input-collabcode + .btn-collabcode {
        margin-top: 45px;
      }
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.handleClick = (event, path) => {
    event.preventDefault();

    window.location.hash = `#/${path}`;
    location.reload(true);
  };

  module.render = ({ content = "", path = "" }) => {
    module._style();
    return `<input 
              class="btn-collabcode"
              type="submit"
              value="${content}"
              onClick="btnCollabcode.handleClick(event, '${path}')"
              >`;
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
