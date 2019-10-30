import React from "react";

import "./styles.css";

import LogoCollab from "../../objects/LogoCollab";
import AboutLink from "../../objects/AboutLink";
import Menu from "../../objects/Menu";

const Header = () => (
  <header className="header">
    <LogoCollab light />
    <AboutLink />
    <Menu />
  </header>
);

export default Header;
