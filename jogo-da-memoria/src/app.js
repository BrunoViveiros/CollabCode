(function() {
  const { hash } = window.location;
  const paths = [];
  paths[""] = login;
  paths["#/login"] = login;
  paths["#/signup"] = signup;
  paths["#/game"] = game;
  paths["#/404"] = status404;

  paths[hash] === undefined ? paths["#/404"]() : paths[hash]();
})();
