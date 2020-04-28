import React from "react";
import AnimeSearch from "../AnimeSearch";
import ShowCaseAnime from "./ShowCaseAnime";
import "../AnimeSearch.css";

const AdvancedSearch = (props) => {
  console.log(props);
  return (
    <>
      <AnimeSearch />

      <div className="secondary container">
        <div className="options-container">
          <select name="advanced" id="advanced-options">
            <option value="Popularity">Popularity</option>
            <option value="Ranking">Ranking</option>
            <option value="Most Recent">Most Recent</option>
            <option value="Rating">Rating</option>
          </select>
        </div>
        <ShowCaseAnime />
      </div>
    </>
  );
};

export default AdvancedSearch;
