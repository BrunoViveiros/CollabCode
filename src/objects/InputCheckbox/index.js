import React from "react";
import "./styles.css";

import Label from "../Label";
import InputGame from "../InputGame";

const InputCheckbox = ({ id = "", value = "", content = "" }) => (
  <>
    <InputGame id={id} type="input-checkbox" value={value} />
    <Label htmlFor={id} content={content} />
  </>
);
export default InputCheckbox;
