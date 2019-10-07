const formSignup = (function() {
  const module = {};

  module._style = () => {
    const $head = document.querySelector("head");
    const $style = document.createElement("style");

    $style.textContent = `
      .form-signup {
        padding: 0 10% 40px;
      }
    `;

    $head.insertAdjacentElement("beforeend", $style);
  };

  module._children = () => {
    const $usernameLabel = labelCollabCode.render("Username");
    const $usernameInput = inputCollabcode.render({
      placeholder: "Your Username",
      type: "text"
    });

    const $emailLabel = labelCollabCode.render("E-mail");
    const $emailInput = inputCollabcode.render({
      placeholder: "example@mail.com",
      type: "email"
    });

    const $passwordLabel = labelCollabCode.render("Password");
    const $passwordInput = inputCollabcode.render({
      placeholder: "********",
      type: "password"
    });

    const $confirmPasswordLabel = labelCollabCode.render("Confirm password");
    const $confirmPasswordInput = inputCollabcode.render({
      placeholder: "********",
      type: "password"
    });

    const $btn = btnCollabcode.render("Signup");

    return `
        ${$usernameLabel}
        ${$usernameInput}
        
      ${$emailLabel}
      ${$emailInput}
      
      ${$passwordLabel}
      ${$passwordInput}
      
      ${$confirmPasswordLabel}
      ${$confirmPasswordInput}
      
      ${$btn}
      `;
  };

  module.render = () => {
    module._style();
    return `<form class="form-signup" action="" method="POST">${module._children()}</form>`;
  };

  return {
    render: module.render
  };
})();
