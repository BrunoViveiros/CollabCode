import React from "react";
import "./styles.css";

import LogoCollab from "../../objects/LogoCollab";
import AboutLink from "../../objects/AboutLink";
import IconClose from "../../objects/IconClose";

const HeaderInternal = () => (
  <header className="header-internal">
    <LogoCollab />
    <AboutLink className="-light" />
    <IconClose />
  </header>
);

export default HeaderInternal;
