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
          <div className="logo">Logo</div>
          <div ref={ref} className="browse">
            <button
              className="browse-btn"
              onClick={() => setDropDown(!dropDown)}
            >
              Browse <i class="fas fa-sort-down"> </i>
            </button>
            {dropDown ? (
              <div className="dropdown menu">
                <ul>
                  <li>
                    <Link onClick={() => setDropDown(false)} to="/">
                      Anime
                    </Link>
                  </li>
                  <li>
                    <Link onClick={() => setDropDown(false)} to="/manga/new">
                      Manga
                    </Link>
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
