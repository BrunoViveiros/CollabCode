import React from "react";
import "./styles.css";

import LabelGame from "../LabelGame";
import InputGame from "../InputGame";

const handleClick = () => {
  console.log("lala");
};

const InputCheckbox = ({ id = "", value = "", content = "" }) => (
  <>
    <InputGame id={id} type="checkbox" value={value} />
    <LabelGame onClick={handleClick} htmlFor={id} content={content} />
  </>
);
export default InputCheckbox;
