import React from "react";

const AnimeCard = ({ animeData }) => {
  console.log(animeData);
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
        {title}
        <br />
        {startDate}
        <br />
        {averageRating}
        <br />
        {`#${popularityRank}`}
        <br />
      </div>
    );
  };
  return (
    <div>
      <img src={image} alt="" />
      {onHoverInfo()}
    </div>
  );
};

export default AnimeCard;
