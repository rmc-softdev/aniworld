import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="nav">
      <div className="menu right">
        <div className="logo">Logo</div>
        <div className="browse">Browse</div>
      </div>
      <div className="menu left">Sign In</div>
    </div>
  );
};

export default Header;
