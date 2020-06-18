import React, { useState, useEffect, useRef } from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import Modal from "./Modal";
import { withRouter } from "react-router-dom";
import SignUp from "./SignUp";

const Header = (props) => {
  //I'll use these to render features specific to certain pages, like the Single Anime component
  const pageId = parseInt(props?.location?.pathname?.split("/")[2]);
  const [navShow, setNavShow] = useState(false);
  let single;

  useEffect(() => {
    const renderStyle = () => {
      //hides the Nav in the single anime page
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
            <div
              className="logo"
              style={{ display: "flex", alignItems: "center" }}
            >
              <img
                src="https://i.ibb.co/n7ky4sF/kitsu.png"
                alt=""
                style={{
                  width: "52px",
                  height: "auto",
                  position: "relative",
                }}
              />
              <span style={{ color: "#fff", marginLeft: "5px" }}>
                {" "}
                Anime World{" "}
              </span>
            </div>{" "}
          </Link>
          <div ref={ref} className="browse">
            <span className="browse-btn" onClick={() => setDropDown(!dropDown)}>
              Browse <i className="fas fa-sort-down"> </i>
            </span>
            <div className={`dropdown menu ${dropDown ? "active" : ""}`}>
              <ul>
                <Link onClick={() => setDropDown(false)} to="/">
                  <li>Anime</li>
                </Link>
                <Link onClick={() => setDropDown(false)} to="/manga/new">
                  <li>Manga</li>
                </Link>
              </ul>
            </div>
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
