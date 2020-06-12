import React, { useState, useRef, useEffect } from "react";
import AnimeSearch from "./AnimeSearch";
import "./AnimeSearch.css";
import { connect } from "react-redux";
import { fetchShowCaseContent } from "../../actions/fetchActions";
import AnimeCard from "../animeshowcase/AnimeCard";
import "./AdvancedSearch.css";

const AdvancedSearch = ({ rated, airing, trending, trendingmanga }) => {
  const ref = useRef();
  const [dropDown, setDropDown] = useState(false);
  const [selected, setSelected] = useState(trendingmanga);
  const [chosen, setChosen] = useState("Trending");

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
    <>
      <AnimeSearch />
      <div className="secondary container">
        <div className="options-container">
          <div className="options-container">
            <button
              ref={ref}
              className="options-btn"
              onClick={() => setDropDown(!dropDown)}
            >
              {chosen} <i class="fas fa-sort-down" />
            </button>
            <div className={`dropdown options ${dropDown ? "active" : ""}`}>
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
