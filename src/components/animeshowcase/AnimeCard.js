import React, { useState } from "react";
import "./AnimeCard.css";
import { Link } from "react-router-dom";
import ImageAvatar from "./ImageAvatar";

const AnimeCard = ({ animeData }) => {
  const [hoverState, setHoverState] = useState(false);
  const { attributes } = animeData;
  const image = attributes.posterImage.small;

  const onHoverInfo = () => {
    const title = attributes.titles.en || attributes.titles.en_jp;
    const startDate = attributes.startDate;
    const averageRating = `${attributes.averageRating}%`;
    const popularityRank = attributes.popularityRank;

    return (
      <>
        <p>Title: {title}</p>
        <p>Starting date: {startDate}</p>
        <p>Average rating:{averageRating}</p>
        <p>Popularity ranking:{`#${popularityRank}`}</p>
      </>
    );
  };
  return (
    <div
      className="card-box"
      onMouseEnter={() => setHoverState(!hoverState)}
      onMouseLeave={() => setHoverState(!hoverState)}
    >
      <Link
        to={{
          pathname: `/single/${attributes.slug}`,
          state: {
            animeData,
          },
        }}
      >
        <ImageAvatar image={image} />
      </Link>
      <div className="popout info">{hoverState ? onHoverInfo() : null}</div>
    </div>
  );
};

export default AnimeCard;
