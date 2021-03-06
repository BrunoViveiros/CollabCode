const flatButton = (function() {
  const module = {};

  module._id = 0;

  module._style = active => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .flat-button-${module._id} {
        box-sizing: border-box;
        display: inline-flex;
        justify-content: center;
        background-color: ${active ? "#F25A70" : "#EAE6DA"};
        color: ${active ? "#FFF" : "#FFFCEE"};
        font-size: 24px;
        font-weight: bold;
        width: 50%;
        padding: 61px 0 88px ;
        //height: 176px;
        text-transform: uppercase;
      }

      .flat-button-${module._id} > span {
        
      }
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module.handleClick = path => {
    location.hash = `#/${path}`;
    location.reload(true);
  };

  module.render = (content = "", active = false, path = "") => {
    module._id++;
    module._style(active);

    return `<button
              class="flat-button-${module._id}"
              onClick="flatButton.handleClick('${path}')"  
            >${content}</button>`;
  };

  return {
    render: module.render,
    handleClick: module.handleClick
  };
})();
