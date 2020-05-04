import React, { useState, useEffect, useRef } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import { withRouter } from "react-router-dom";
import SignUp from "./SignUp";

const Header = (props) => {
  //I'll use these to render features specific to certain pages, like the Single Anime component
  const pageId = parseInt(props.location.pathname.split("/")[2]);
  const [navShow, setNavShow] = useState(false);
  let single;

  useEffect(() => {
    const renderStyle = () => {
      if (Number.isInteger(pageId)) {
        setNavShow(true);
      } else {
        setNavShow(false);
      }
    };
    renderStyle();
  }, [pageId]);

  navShow ? (single = "single") : (single = "");

  const modalRef = useRef();
  const ref = useRef();
  const [dropDown, setDropDown] = useState(false);

  const openModal = () => modalRef.current.openModal();

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
    <div className={`nav ${single}`}>
      <div data-test="nav-container" className="navContainer">
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
        <div className="menu right">
          <span onClick={openModal}> Sign Up</span>
          <Modal ref={modalRef}>
            <SignUp />
          </Modal>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Header);
