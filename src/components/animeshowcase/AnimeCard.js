import React from "react";
import "./AnimeCard.css";
import { Link } from "react-router-dom";
import { Popup } from "semantic-ui-react";
import { connect } from "react-redux";
import { fetchShowCaseContent } from "../../actions/fetchActions";

const AnimeCard = ({ animeData, status }) => {
  const { attributes } = animeData;
  const image = attributes.posterImage.small;
  const PopupInfo = () => (
    <Popup
      content={onHoverInfo()}
      trigger={
        <div>
          <div className="overlay-container">
            <img src={`${image}`} alt="Anime Poster" />
            <div id="overlay"></div>
          </div>
          <button className="addLibrary"> Add to Library </button>
        </div>
      }
      position="right center"
      className="popover"
    />
  );

  const onHoverInfo = () => {
    const title = attributes.titles.en || attributes.titles.en_jp;
    const startDate = attributes?.startDate?.split("-")[0];
    const averageRating = attributes.averageRating
      ? `${attributes.averageRating}%`
      : "Sorry, couldn't fetch this data.";
    const popularityRank = attributes?.popularityRank;
    const ratingRank = attributes?.ratingRank;
    const synopsis = attributes?.synopsis;

    return (
      <>
        <div className="pop header">
          <span className="pop title"> {title} </span>
          <p className="pop start"> ({startDate})</p>
        </div>
        <p className="pop rating">{averageRating}</p>
        <div className="pop-container">
          <p className="pop popularity">
            <div className="pop-img heart">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/3/32/WikiFont_uniE033_-_heart_-_red.svg"
                alt=""
              />
            </div>
            {`#${popularityRank} Most Popular`}
          </p>
          <p className="pop rated">
            <div className="pop-img star">
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/e/e5/Full_Star_Yellow.svg"
                alt=""
              />
            </div>
            <span> #{ratingRank} Highest Rated</span>
          </p>
        </div>
        <div className="synopsis"> {synopsis} </div>
      </>
    );
  };
  return (
    <div className="card-box">
      <Link
        to={{
          pathname: `/${attributes.slug}/${animeData.id}`,
          state: {
            animeData,
          },
        }}
      >
        {PopupInfo()}
      </Link>
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

export default connect(mapStateToProps, fetchShowCaseContent)(AnimeCard);
