import React from "react";
import "./styles.css";

import LabelGame from "../LabelGame";
import InputGame from "../InputGame";

const InputCheckbox = ({ id = "", value = "", content = "", onClick }) => (
  <>
    <InputGame id={id} type="checkbox" value={value} />
    <LabelGame htmlFor={id} content={content} onClick={onClick} />
  </>
);
export default InputCheckbox;
