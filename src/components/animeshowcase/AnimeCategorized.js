import React, { useEffect, useState } from "react";
import Categories from "../Categories";
import AnimeSearch from "../AnimeSearch";
import AnimeCard from "./AnimeCard";

const AnimeCategorized = (props) => {
  const searched = props.location.pathname.split("/")[2];
  const [highestRated, setHighestRated] = useState([]);
  const [mostPopular, setMostPopular] = useState([]);

  useEffect(() => {
    const fetchBySearch = () => {
      fetch(
        `https://kitsu.io/api/edge/anime?page[limit]=5&page[offset]=0&filter[genres]=${searched}&sort=-averageRating&sort=-startDate`
      )
        .then((res) => res.json())
        .then((newData) => {
          setHighestRated(newData.data);
        });
    };

    const fetchMostPopular = () => {
      fetch(
        `https://kitsu.io/api/edge/anime?page[limit]=5&page[offset]=0&filter[genres]=${searched}&sort=popularityRank`
      )
        .then((res) => res.json())
        .then((newData) => {
          setMostPopular(newData.data);
        });
    };

    fetchMostPopular();

    fetchBySearch();
  }, [searched]);
  // we want to sort out our data in order to render  them in some particular fashion, say trending

  return (
    <>
      <div className="main content">
        <AnimeSearch />
        <div className="secondary container">
          <h3> Trending {searched} Anime</h3>
          <div className="grid container">
            {highestRated.map((AnimeData) => (
              <AnimeCard key={AnimeData.id} animeData={AnimeData} />
            ))}
          </div>
          <h3> Most Popular {searched} Anime</h3>
          <div className="grid container">
            {mostPopular.map((AnimeData) => (
              <AnimeCard key={AnimeData.id} animeData={AnimeData} />
            ))}
          </div>
        </div>
      </div>

      <Categories />
    </>
  );
};

export default AnimeCategorized;
