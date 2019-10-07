(function() {
  const $root = document.querySelector("#root");

  const $loginButton = flatButton.render("Log in", true);
  const $signupButton = flatButton.render("Sign up");
  const $logoCollabcode = logoCollabcode.render();
  const $titleCollabcode = titleCollabcode.render("Hello!");
  const $logoWrapper = logoWrapper.render($logoCollabcode, $titleCollabcode);

  const $formSignup = formSignup.render("login");

  $root.insertAdjacentHTML("beforeend", $loginButton);
  $root.insertAdjacentHTML("beforeend", $signupButton);
  $root.insertAdjacentHTML("beforeend", $logoWrapper);

  $root.insertAdjacentHTML("beforeend", $formSignup);
})();
