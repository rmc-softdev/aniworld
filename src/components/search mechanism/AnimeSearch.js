import React, { useState, useEffect } from "react";
import "./AnimeSearch.css";
import SearchedAnimes from "./SearchedAnimes";
import { Link, withRouter } from "react-router-dom";

const AnimeSearch = (props) => {
  const [text, setText] = useState(""); // this is the searched word
  const [searchedAnime, setSearchedAnime] = useState([]);
  const [fill, setFill] = useState("#acacac");

  useEffect(() => {
    const fetchSearchedAnime = () => {
      fetch(
        `https://kitsu.io/api/edge/anime?page[limit]=10&page[offset]=0&filter[text]=${text}`
      )
        .then((res) => res.json())
        .then((newData) => {
          setSearchedAnime(newData.data);
        });
    };
    fetchSearchedAnime();
  }, [text]);

  const onTermSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="search container">
      <h1 className="search slogan">
        {props.logo ? props.logo : "Explore Anime"}
      </h1>
      {props.synopsis}
      <form onSubmit={onTermSubmit}>
        <div className="search-wrapper">
          <span className="search-icon">
            <svg
              width="25"
              height="25"
              viewBox="0 0 25 25"
              style={{ fill: fill }}
            >
              <path d="M20.067 18.933l-4.157-4.157a6 6 0 10-.884.884l4.157 4.157a.624.624 0 10.884-.884zM6.5 11c0-2.62 2.13-4.75 4.75-4.75S16 8.38 16 11s-2.13 4.75-4.75 4.75S6.5 13.62 6.5 11z"></path>
            </svg>
          </span>
          <input
            className="search-input"
            onChange={(e) => setText(e.target.value)}
            value={text}
            placeholder="What are you searching for?"
            onMouseEnter={() => setFill("#333")}
            onMouseLeave={() => setFill("#acacac")}
          />
        </div>
      </form>
      {text !== "" && <SearchedAnimes searchedContent={searchedAnime} />}
      {props.location.pathname.includes("advanced") ? (
        ""
      ) : (
        <span className="advanced search">
          Or, browse with the
          <span className="advanced-btn">
            <Link to="/advanced-search/"> advanced search</Link>
          </span>
        </span>
      )}
    </div>
  );
};

export default withRouter(AnimeSearch);
