import React from "react";
import "./styles.css";

import LabelGame from "../LabelGame";
import InputGame from "../InputGame";

const InputCheckbox = ({ id = "", value = "", content = "" }) => (
  <>
    <InputGame id={id} type="input-checkbox" value={value} />
    <LabelGame htmlFor={id} content={content} />
  </>
);
export default InputCheckbox;
