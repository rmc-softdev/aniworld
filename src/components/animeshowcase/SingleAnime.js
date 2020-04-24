import React from "react";

const SingleAnime = (props) => {
  // const id = props.match.params.id;
  const singleAnimeData = props.location.state.animeData;
  const coverImage = singleAnimeData?.attributes?.coverImage?.original;
  const posterImage = singleAnimeData.attributes.posterImage.original;

  const title =
    singleAnimeData.attributes.titles.en ||
    singleAnimeData.attributes.titles.en_jp;
  const startDate = singleAnimeData.attributes.startDate;
  const averageRating = singleAnimeData.attributes.averageRating;
  const synopsis = singleAnimeData.attributes.synopsis;
  return (
    <>
      <h4>{title} </h4>
      <h4>{startDate} </h4>
      <h4>{`${averageRating}%`} </h4>
      <p>{synopsis} </p>
      <img src={coverImage || posterImage} alt="" />
    </>
  );
};

export default SingleAnime;
