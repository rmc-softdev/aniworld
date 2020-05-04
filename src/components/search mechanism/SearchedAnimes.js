import React, { useState } from "react";
import "./SearchedAnime.css";
import { Link } from "react-router-dom";

const SearchedAnimes = ({ searchedContent }) => {
  let reducedContent = searchedContent.slice(0, 5);
  const [viewMore, setViewMore] = useState(false);

  let show = "open";
  /*
  const [status, setStatus] = useState(true);
  const [hide, setHide] = useState(false);
  const handleStatus = () => {
    if (!status) {
      show = "closed";
      searchedContent = [];
      reducedContent = [];
      console.log(searchedContent, reducedContent);
    }
  };
  */
  // it always after the click returns the emptied arrays, it shouldn't though

  const renderContent = () => {
    if (viewMore) {
      return searchedContent.map((anime) => (
        <Link to={`/${anime.attributes.slug}/${anime.id}`}>
          <li key={searchedContent.key}>
            <div className="results-items">
              <div className="result content">
                <img src={anime.attributes?.posterImage?.tiny} alt="" />
                <span className="resultsName">
                  {anime.attributes?.canonicalTitle}
                </span>
              </div>
              <div className="results media">
                {anime.attributes?.showType.toUpperCase()}
              </div>
            </div>
          </li>
        </Link>
      ));
    } else {
      return reducedContent.map((anime) => (
        <Link to={`/${anime.attributes.slug}/${anime.id}`}>
          <li key={reducedContent.key}>
            <div className="results-items">
              <div className="result content">
                <img src={anime?.attributes?.posterImage?.tiny} alt="" />
                <span className="resultsName">
                  {anime?.attributes?.canonicalTitle}
                </span>
              </div>
              <div className="results media">
                {anime?.attributes?.showType.toUpperCase()}
              </div>
            </div>
          </li>
        </Link>
      ));
    }
  };

  return (
    <>
      <div className="results">
        <div className={`results-container ${show}`}>
          <div className="results title">
            <span> Search Results </span>
            {/*  <button
              onClick={() => {
                setStatus(!status);
              }}
            >
              {status ? "Hide" : ""}
            </button>*/}
          </div>
          <div className="results type">
            <span> Media</span>
            <button
              onClick={() => setViewMore(!viewMore)}
              className="expand-results"
            >
              {viewMore ? "Show Less" : " Load More"}
            </button>
          </div>
          <div className="results showcase">
            <ul>{renderContent()}</ul>
          </div>
        </div>
      </div>
    </>
  );
};

export default SearchedAnimes;
