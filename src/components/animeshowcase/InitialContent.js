import React, { useEffect } from "react";
import AnimeCard from "./AnimeCard";
import { connect } from "react-redux";
import { fetchInitialContent } from "../../actions/fetchActions";
import { Link } from "react-router-dom";

const InitialContent = (props) => {
  useEffect(() => {
    fetchInitialContent();
  }, []);
  const renderContent = (array, title, location) => {
    return (
      <>
        <h3>{title}</h3>
        <div className="grid container">
          {array.map((AnimeData) => (
            <AnimeCard key={AnimeData.id} animeData={AnimeData} />
          ))}
          <Link
            to={{
              pathname: `/expanded/${location}}`,
              state: {
                state: array,
              },
            }}
          >
            <button>View More</button>
          </Link>
        </div>
      </>
    );
  };
  return (
    <div className="secondary container">
      {renderContent(props.trending, "Trending This Week", "trendinganime")}
      {renderContent(props.airing, "Top Airing Anime", "topairing")}
      {renderContent(props.trendingmanga, "Most Popular Manga", "ratedmanga")}
      {renderContent(props.rated, "Highest Rated Anime", "ratedanime")}
    </div>
  );
};

const mapStateToProps = (state) => ({
  trending: state.fetch.trending,
  trendingmanga: state.fetch.trendingmanga,
  rated: state.fetch.rated,
  airing: state.fetch.airing,
});

export default connect(mapStateToProps, fetchInitialContent)(InitialContent);
