import React from "react";
import "./styles.css";

const LabelGame = ({ content, htmlFor, onClick }) => (
  <label onClick={onClick} className="label-game" htmlFor={htmlFor}>
    {content}
  </label>
);

export default LabelGame;
