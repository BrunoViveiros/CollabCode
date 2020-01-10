import React from "react";
import "./styles.css";

const LabelGame = ({ content, htmlFor, onClick }) => (
  <label className="label-game" htmlFor={htmlFor} onClick={onClick}>
    {content}
  </label>
);

export default LabelGame;
