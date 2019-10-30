import React from "react";
import Profile from "../../img/avatar.jpg";
import "./styles.css";

import AvatarProfile from "../../objects/AvatarProfile";

const ProfileUser = () => (
  <dl className="profile-user">
    <dd className="avatar">
      <AvatarProfile src={Profile} alt="Avatar do Bruno Fernandes" />
    </dd>
    <dt className="title">Bruno Fernandes</dt>
    <dd className="description">Texto de descrição</dd>
  </dl>
);

export default ProfileUser;
