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

  module._children = type => {
    if (type == "signup") {
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
    } else if (type == "login") {
      const $usernameLabel = labelCollabCode.render("Username ou e-mail");
      const $usernameInput = inputCollabcode.render(
        "example@email.com",
        "text"
      );

      const $passwordLabel = labelCollabCode.render("Password");
      const $passwordInput = inputCollabcode.render("********", "password");

      const $btn = btnCollabcode.render("Login");

      return `
          ${$usernameLabel}
          ${$usernameInput}
          
          ${$passwordLabel}
          ${$passwordInput}
        
          ${$btn}
        `;
    }
  };

  module.render = type => {
    module._style();
    return `<form class="form-signup" action="" method="POST">${module._children(
      type
    )}</form>`;
  };

  return {
    render: module.render
  };
})();
