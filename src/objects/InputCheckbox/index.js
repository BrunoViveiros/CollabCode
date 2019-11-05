import React from "react";
import "./styles.css";

import Label from "../Label";
import Input from "../Input";

const InputCheckbox = ({ id = "", value = "", content = "" }) => (
  <>
    <Input id={id} type="input-checkbox" value={value} />
    <Label htmlFor={id} content={content} />
  </>
);
export default InputCheckbox;
