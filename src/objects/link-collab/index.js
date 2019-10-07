const linkCollab = (function() {
  const module = {};

  module._style = () => {
    $head = document.querySelector("head");
    $style = document.createElement("style");

    $style.textContet = `
      .link-collab {
        
      }
    `;
  };

  module.render = ({ href, content }) => {
    module._style();

    return `
      <a class="link-collab" href="${href}">${content}</a>
    `;
  };

  return {
    render: module.render
  };
})();
