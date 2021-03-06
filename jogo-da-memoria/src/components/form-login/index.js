const formLogin = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .form-login {
        padding: 0 10% 40px;
      }
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module._children = () => {
    const $usernameLabel = labelCollabCode.render("Username ou e-mail");
    const $usernameInput = inputCollabcode.render({
      placeholder: "example@email.com",
      type: "text"
    });

    const $passwordLabel = labelCollabCode.render("Password");
    const $passwordInput = inputCollabcode.render({
      id: "password",
      placeholder: "8 digits",
      type: "password"
    });
    const $eyeCollabcode = eyeCollabcode.render({ attrFor: "password" });

    const $linkCollab = linkCollab.render({
      href: "#",
      content: "Forget password ?"
    });

    const $btn = btnCollabcode.render({ content: "Login", path: "game" });

    return `
      ${$usernameLabel}
      ${$usernameInput}
              
      ${$passwordLabel}
      ${$passwordInput}
      ${$eyeCollabcode}

      ${$linkCollab}

      ${$btn}
      `;
  };

  module.render = () => {
    module._style();
    return `<form class="form-login" action="" method="POST">${module._children()}</form>`;
  };

  return {
    render: module.render
  };
})();
