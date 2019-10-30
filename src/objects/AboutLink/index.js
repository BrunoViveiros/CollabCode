import React from "react";
import "./styles.css";

const handleClick = () => {
  console.log("click");
};

const AboutLink = ({ className = "" }) => (
  <a className={`about-link ${className}`} href="#to-do" onClick={handleClick}>
    Sobre
  </a>
);

export default AboutLink;
