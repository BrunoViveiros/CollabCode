import React from "react";

const WrapperHashtagHistory = ({ children, active = false }) => (
  <div className={`wrapper-hashtag-history ${active && "-active"}`}>
    {children}
  </div>
);

export default WrapperHashtagHistory;
