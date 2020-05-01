import React from "react";
import "./AnimeCard.css";
import { Link } from "react-router-dom";
import { Image, Popup } from "semantic-ui-react";

const AnimeCard = ({ animeData }) => {
  const { attributes } = animeData;
  const image = attributes.posterImage.small;

  const PopupInfo = () => (
    <Popup
      content={onHoverInfo()}
      trigger={<Image src={`${image}`} />}
      position="right center"
      className="popover"
    />
  );

  const onHoverInfo = () => {
    const title = attributes.titles.en || attributes.titles.en_jp;
    const startDate = attributes.startDate;
    const averageRating = `${attributes.averageRating}%`;
    const popularityRank = attributes.popularityRank;
    const ratingRank = attributes.ratingRank;

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
      <button className="addLibrary"> Add to Library </button>
      <div className="card overlay"></div>
    </div>
  );
};

export default AnimeCard;
