import React, { useState } from "react";
import "./AnimeCard.css";
import { Link } from "react-router-dom";

const AnimeCard = ({ animeData, hoverState }) => {
  const { attributes } = animeData;
  const image = attributes.posterImage.small;

  const onHoverInfo = () => {
    const title = attributes.titles.en || attributes.titles.en_jp;
    const startDate = attributes.startDate;
    const averageRating = `${attributes.averageRating}%`;
    const popularityRank = attributes.popularityRank;

    return (
      <>
        {" "}
        <p>{title}</p>
        <p>{startDate}</p>
        <p>{averageRating}</p>
        <p>{`#${popularityRank}`}</p>
      </>
    );
  };
  return (
    <div>
      <Link
        to={{
          pathname: `/single/${attributes.slug}`,
          state: {
            animeData,
          },
        }}
      >
        <div className="img box">
          <img src={image} className="anime image" alt="" />
        </div>
      </Link>
    </div>
  );
};

export default AnimeCard;
