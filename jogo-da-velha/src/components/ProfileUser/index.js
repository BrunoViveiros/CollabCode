import React from "react";
import "./styles.css";

import Profile from "../../img/avatar.jpg";
import GitHub from "../../img/icon-github.svg";
import Facebook from "../../img/icon-facebook.svg";
import Instagram from "../../img/icon-instagram.svg";
import Linkedin from "../../img/icon-linkedin.svg";
import Twitter from "../../img/icon-twitter.svg";

import AvatarProfile from "../../objects/AvatarProfile";
import IconSocial from "../../objects/IconSocial";

const ProfileUser = () => (
  <dl className="profile-user">
    <dd className="avatar">
      <AvatarProfile src={Profile} alt="Avatar do Bruno Fernandes" />
    </dd>
    <dt className="title">Bruno Fernandes</dt>
    <dd className="description">Texto de descrição</dd>
    <dd className="socials">
      <IconSocial
        action="https://github.com"
        src={GitHub}
        alt="Logo da GitHub"
      />
      <IconSocial
        action="https://linkedin.com"
        src={Linkedin}
        alt="Logo da Linkedin"
      />
      <IconSocial
        action="https://facebook.com"
        src={Facebook}
        alt="Logo da Facebook"
      />
      <IconSocial
        action="https://twitter.com"
        src={Twitter}
        alt="Logo da Twitter"
      />
      <IconSocial
        action="https://instagram.com"
        src={Instagram}
        alt="Logo da Instagram"
      />
    </dd>
  </dl>
);

export default ProfileUser;
