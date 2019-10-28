import React from "react";

const Input = ({ value = "", id = "", type = "text" }) => (
  <input id={id} type={type} value={value} />
);

export default Input;
