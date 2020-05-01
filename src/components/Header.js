import React, { useState, useEffect, useRef } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
  const ref = useRef();
  const [dropDown, setDropDown] = useState(false);

  useEffect(() => {
    function handleClickOutside(event) {
      if (ref.current && !ref.current.contains(event.target)) {
        setDropDown(!setDropDown);
      }
    }

    document.addEventListener("click", handleClickOutside);
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [ref]);
  return (
    <div className="nav">
      <div className="navContainer">
        <div className="menu left">
          <Link to="/">
            {" "}
            <div className="logo">Logo</div>{" "}
          </Link>
          <div ref={ref} className="browse">
            <span className="browse-btn" onClick={() => setDropDown(!dropDown)}>
              Browse <i class="fas fa-sort-down"> </i>
            </span>
            {dropDown ? (
              <div className="dropdown menu">
                <ul>
                  <Link onClick={() => setDropDown(false)} to="/">
                    <li>Anime</li>
                  </Link>
                  <Link onClick={() => setDropDown(false)} to="/manga/new">
                    <li>Manga</li>
                  </Link>
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
