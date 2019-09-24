(function () {
  const $root = document.querySelector('#root');
  const renderButton = flatButton.render();

  const $flatButtonSignup = renderButton("Login", "-active");
  const $flatButtonLogin = renderButton("Signup");



  $root.insertAdjacentHTML("beforeend", $flatButtonSignup)
  $root.insertAdjacentHTML("beforeend", $flatButtonLogin)
  
})();
