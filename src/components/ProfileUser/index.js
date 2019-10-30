import React from "react";
import Profile from "../../img/avatar.jpg";

import AvatarProfile from "../../objects/AvatarProfile";

const ProfileUser = () => (
  <dl>
    <dd>
      <AvatarProfile src={Profile} alt="Avatar do Bruno Fernandes" />
    </dd>
    <dt>Marco Bruno</dt>
    <dd>Texto de descrição</dd>
  </dl>
);

export default ProfileUser;
