import React, { useEffect, useState } from "react";
import { connect } from "react-redux";
import { fetchShowCaseAnime } from "../../actions/fetchActions";
import animeShowCase from "./animeShowCase";

const ShowCaseAnime = (props) => {
  useEffect(() => {
    fetchShowCaseAnime();
  }, []);

  return (
    <div className="secondary container">
      {props.renderContent(
        props.trending,
        "Trending This Week",
        "trendinganime",
        5
      )}
      {props.renderContent(props.airing, "Top Airing Anime", "topairing", 5)}
      {props.renderContent(
        props.trendingmanga,
        "Most Popular Manga",
        "ratedmanga",
        5
      )}
      {props.renderContent(props.rated, "Highest Rated Anime", "ratedanime", 5)}
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
  fetchShowCaseAnime
)(animeShowCase(ShowCaseAnime));
