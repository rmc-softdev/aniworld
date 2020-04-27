import React from "react";
import "./SearchedAnime.css";

const SearchedAnimes = ({ searchedContent }) => {
  console.log(searchedContent);
  return (
    <>
      <div className="results">
        <div className="results title">Search Results</div>
        <div className="results type">Media</div>
        <div className="results showcase">
          <ul>
            {searchedContent.map(({ attributes }) => (
              <li key={searchedContent.key}>
                <div className="results-items">
                  <div className="result content">
                    <img src={attributes?.posterImage?.tiny} alt="" />
                    <span className="resultsName">
                      {" "}
                      {attributes?.canonicalTitle}{" "}
                    </span>
                  </div>
                  <div className="results media">
                    {attributes?.showType.toUpperCase()}
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
  /*
        <ul>
          <li>{searchedContent.map((el) => el.attributes.coverImage)} </li>
        </ul>
  */
};

export default SearchedAnimes;
