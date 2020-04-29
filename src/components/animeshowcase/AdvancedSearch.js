import React, { useState } from "react";
import AnimeSearch from "../AnimeSearch";
import "../AnimeSearch.css";
import { connect } from "react-redux";
import { fetchShowCaseContent } from "../../actions/fetchActions";
import AnimeCard from "./AnimeCard";
import "./AdvancedSearch.css";

const AdvancedSearch = ({ rated, airing, trending, trendingmanga }) => {
  const [dropDown, setDropDown] = useState(false);
  const [selected, setSelected] = useState(trendingmanga);
  console.log(selected);
  const [chosen, setChosen] = useState("Trending");

  return (
    <>
      <AnimeSearch />
      <div className="secondary container">
        <div className="options-container">
          <div className="options-container">
            <button
              className="options-btn"
              onClick={() => setDropDown(!dropDown)}
            >
              {chosen} <i class="fas fa-sort-down"></i>{" "}
            </button>
            {dropDown ? (
              <div className="dropdown options">
                <ul>
                  <li
                    onClick={() => {
                      setChosen("Popularity");
                      setSelected(trending);
                      setDropDown(!dropDown);
                    }}
                  >
                    Popularity
                  </li>
                  <li
                    onClick={() => {
                      setChosen("Date");
                      setSelected(airing);
                      setDropDown(!dropDown);
                    }}
                  >
                    Date
                  </li>
                  <li
                    onClick={() => {
                      setChosen("Rating");
                      setSelected(rated);
                      setDropDown(!dropDown);
                    }}
                  >
                    Rating
                  </li>
                </ul>
              </div>
            ) : (
              dropDown
            )}
          </div>
        </div>
        <div className="grid container">
          {chosen === "Trending"
            ? trendingmanga.map((AnimeData) => (
                <AnimeCard key={AnimeData.id} animeData={AnimeData} />
              ))
            : selected.map((AnimeData) => (
                <AnimeCard key={AnimeData.id} animeData={AnimeData} />
              ))}
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  trending: state.fetch.trending,
  trendingmanga: state.fetch.trendingmanga,
  rated: state.fetch.rated,
  airing: state.fetch.airing,
});

export default connect(mapStateToProps, fetchShowCaseContent)(AdvancedSearch);
