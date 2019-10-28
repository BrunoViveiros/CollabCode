import React from "react";

import Label from "../Label";
import Input from "../Input";

const Checkbox = ({ id = "", value = "", content = "" }) => (
  <>
    <Input id={id} type="checkbox" value={value} />
    <Label htmlFor={id} content={content} />
  </>
);
export default Checkbox;
