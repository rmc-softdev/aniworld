import React, { useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = (props) => {
  const [dropDown, setDropDown] = useState(false);

  return (
    <div className="nav">
      <div className="navContainer">
        <div className="menu left">
          <div className="logo">Logo</div>
          <div className="browse">
            <button
              className="browse-btn"
              onClick={() => setDropDown(!dropDown)}
            >
              {" "}
              Browse <i class="fas fa-sort-down"> </i>
            </button>
            {dropDown ? (
              <div className="dropdown menu">
                <ul>
                  <li>
                    <Link to="/">Anime</Link>
                  </li>
                  <li>
                    <Link to="/manga/new">Manga</Link>
                  </li>
                </ul>
              </div>
            ) : (
              dropDown
            )}
          </div>
        </div>
        <div className="menu right">Sign in</div>
      </div>
    </div>
  );
};

export default Header;
