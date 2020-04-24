import React from "react";
import "./AnimeCard.css";
import { Link } from "react-router-dom";

const AnimeCard = ({ animeData }) => {
  const image = animeData.attributes.posterImage.small;
  const onHoverInfo = () => {
    const title =
      animeData.attributes.titles.en || animeData.attributes.titles.en_jp;
    const startDate = animeData.attributes.startDate;
    const averageRating = `${animeData.attributes.averageRating}%`;
    const popularityRank = animeData.attributes.popularityRank;

    return (
      <div>
        {" "}
        <p>{title}</p>
        <p>{startDate}</p>
        <p>{averageRating}</p>
        <p>{`#${popularityRank}`}</p>
      </div>
    );
  };
  return (
    <div>
      <Link
        to={{
          pathname: `/${animeData.attributes.slug}`,
          state: {
            animeData,
          },
        }}
      >
        <img src={image} className="anime image" alt="" />
      </Link>
      {onHoverInfo()}
    </div>
  );
};

export default AnimeCard;
