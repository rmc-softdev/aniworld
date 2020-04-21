import React, { useState, useEffect } from "react";

const SingleAnime = ({ match }) => {
  const id = match.params.id;
  const [animeData, setAnimeData] = useState({});
  useEffect(() => {
    fetch(`https://kitsu.io/api/edge/anime/${id}`)
      .then((res) => res.json())
      .then((newData) => {
        setAnimeData(newData.data);
      });
  }, [id]);

  return (
    <div>
      <h1> Hey I'm the Anime {id}! Edit me!!! </h1>
      <div> </div>
    </div>
  );
};

export default SingleAnime;
