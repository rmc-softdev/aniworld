import React from "react";
import { connect } from "react-redux";
import { fetchShowCaseContent } from "../../actions/fetchActions";
import animeShowCase from "./animeShowCase";

const ShowCaseAnime = (props) => {
  return (
    <div className="secondary container">
      {props.status ? (
        props.renderContent(
          props.trending,
          "Trending This Week",
          "trendinganime",
          5
        )
      ) : (
        <div class="spinner">
          <div class="double-bounce1"></div>
          <div class="double-bounce2"></div>
        </div>
      )}
      {props.status ? (
        props.renderContent(props.airing, "Top Airing Anime", "topairing", 5)
      ) : (
        <div class="spinner">
          <div class="double-bounce1"></div>
          <div class="double-bounce2"></div>
        </div>
      )}
      {props.status ? (
        props.renderContent(
          props.trendingmanga,
          "Most Popular Manga",
          "ratedmanga",
          5
        )
      ) : (
        <div class="spinner">
          <div class="double-bounce1"></div>
          <div class="double-bounce2"></div>
        </div>
      )}
      {props.status ? (
        props.renderContent(props.rated, "Highest Rated Anime", "ratedanime", 5)
      ) : (
        <div class="spinner">
          <div class="double-bounce1"></div>
          <div class="double-bounce2"></div>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = (state) => ({
  trending: state.fetch.trending,
  trendingmanga: state.fetch.trendingmanga,
  rated: state.fetch.rated,
  airing: state.fetch.airing,
  status: state.fetch.status,
});

export default connect(
  mapStateToProps,
  fetchShowCaseContent
)(animeShowCase(ShowCaseAnime));
