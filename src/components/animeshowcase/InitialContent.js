import React, { useEffect } from "react";
import AnimeCard from "./AnimeCard";
import { connect } from "react-redux";
import { fetchInitialContent } from "../../actions/fetchActions";
import { Link } from "react-router-dom";
import animeShowCase from "./HOC animeShowCase";

const InitialContent = (props) => {
  useEffect(() => {
    fetchInitialContent();
  }, []);

  const renderContent = (array, title, location, size) => {
    const reducedContent = array.slice(0, size);
    return (
      <>
        <h3 className="showcase title">{title}</h3>
        <div className="grid container">
          {reducedContent.map((AnimeData) => (
            <AnimeCard key={AnimeData.id} animeData={AnimeData} />
          ))}
          <Link
            className="expanded btn"
            to={{
              pathname: `/expanded/${location}}`,
              state: {
                array,
                title,
              },
            }}
          >
            <button className="expand btn">View More</button>
          </Link>
        </div>
      </>
    );
  };
  return (
    <div className="secondary container">
      {renderContent(props.trending, "Trending This Week", "trendinganime", 5)}
      {renderContent(props.airing, "Top Airing Anime", "topairing", 5)}
      {renderContent(
        props.trendingmanga,
        "Most Popular Manga",
        "ratedmanga",
        5
      )}
      {renderContent(props.rated, "Highest Rated Anime", "ratedanime", 5)}
    </div>
  );
};

const mapStateToProps = (state) => ({
  trending: state.fetch.trending,
  trendingmanga: state.fetch.trendingmanga,
  rated: state.fetch.rated,
  airing: state.fetch.airing,
});

export default connect(
  mapStateToProps,
  fetchInitialContent
)(animeShowCase(InitialContent));
