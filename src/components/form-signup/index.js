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
    const $usernameInput = inputCollabcode.render("Your Username", "text");

    const $emailLabel = labelCollabCode.render("E-mail");
    const $emailInput = inputCollabcode.render("example@mail.com", "email");

    const $passwordLabel = labelCollabCode.render("Password");
    const $passwordInput = inputCollabcode.render("********", "password");

    const $confirmPasswordLabel = labelCollabCode.render("Confirm password");
    const $confirmPasswordInput = inputCollabcode.render(
      "********",
      "password"
    );

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
