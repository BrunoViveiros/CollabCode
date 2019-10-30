import React from "react";

import LogoImg from "../../img/logo.svg";
import LogoImgLight from "../../img/logo-light.svg";

const LogoCollab = ({ light = false }) => (
  <img
    className="logo-collab"
    src={light ? LogoImg : LogoImgLight}
    alt="Logo da Collabcode"
  />
);

export default LogoCollab;
