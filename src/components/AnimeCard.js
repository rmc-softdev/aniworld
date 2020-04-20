import React from "react";

const AnimeCard = ({ animeData }) => {
  console.log(animeData);
  const image = animeData.attributes.posterImage.small;
  return (
    <div>
      <img src={image} alt="" />
    </div>
  );
};

export default AnimeCard;
