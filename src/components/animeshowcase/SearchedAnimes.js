import React, { useState } from "react";
import "./SearchedAnime.css";

const SearchedAnimes = ({ searchedContent }) => {
  const reducedContent = searchedContent.slice(0, 5);
  const [viewMore, setViewMore] = useState(false);

  const renderContent = () => {
    if (viewMore) {
      return searchedContent.map(({ attributes }) => (
        <li key={searchedContent.key}>
          <div className="results-items">
            <div className="result content">
              <img src={attributes?.posterImage?.tiny} alt="" />
              <span className="resultsName">{attributes?.canonicalTitle}</span>
            </div>
            <div className="results media">
              {attributes?.showType.toUpperCase()}
            </div>
          </div>
        </li>
      ));
    } else {
      return reducedContent.map(({ attributes }) => (
        <li key={reducedContent.key}>
          <div className="results-items">
            <div className="result content">
              <img src={attributes?.posterImage?.tiny} alt="" />
              <span className="resultsName">{attributes?.canonicalTitle}</span>
            </div>
            <div className="results media">
              {attributes?.showType.toUpperCase()}
            </div>
          </div>
        </li>
      ));
    }
  };

  return (
    <>
      <div className="results">
        <div className="results title">Search Results</div>
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
    </>
  );
};

export default SearchedAnimes;
