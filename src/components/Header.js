import React from "react";
import "./Header.css";

const Header = () => {
  return (
    <div className="nav">
      <div className="navContainer">
        <div className="menu left">
          <div className="logo">Logo</div>
          <div className="browse">Browse</div>
        </div>
        <div className="menu right">Sign in</div>
      </div>
    </div>
  );
};

export default Header;
