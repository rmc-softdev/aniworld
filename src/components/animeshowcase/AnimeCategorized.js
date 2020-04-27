import React, { useEffect, useState } from "react";
import Categories from "../Categories";
import AnimeSearch from "../AnimeSearch";
import AnimeCard from "./AnimeCard";
import { Link } from "react-router-dom";

const AnimeCategorized = (props) => {
  const searched = props.location.pathname.split("/")[2];
  const [highestRated, setHighestRated] = useState([]);
  const [mostPopular, setMostPopular] = useState([]);

  useEffect(() => {
    const fetchBySearch = () => {
      fetch(
        `https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=0&filter[genres]=${searched}&sort=-averageRating&sort=-startDate`
      )
        .then((res) => res.json())
        .then((newData) => {
          setHighestRated(newData.data);
        });
    };

    const fetchMostPopular = () => {
      fetch(
        `https://kitsu.io/api/edge/anime?page[limit]=10&page[offset]=0&filter[genres]=${searched}&sort=popularityRank`
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
  const renderContent = (array, title) => {
    const reducedContent = array.slice(0, 10);
    return (
      <>
        <h3> {title} </h3>
        <div className="grid container">
          {reducedContent.map((AnimeData) => (
            <AnimeCard key={AnimeData.id} animeData={AnimeData} />
          ))}
          <Link
            to={{
              pathname: `/expanded/${title}}`,
              state: {
                array,
                title,
              },
            }}
          >
            <button>View More</button>
          </Link>
        </div>
      </>
    );
  };

  return (
    <>
      <div className="main content">
        <AnimeSearch />
        <div className="secondary container">
          {renderContent(highestRated, `Trending ${searched} Anime`)}
          {renderContent(mostPopular, `Most Popular ${searched} Anime`)}
        </div>
      </div>

      <Categories />
    </>
  );
};

export default AnimeCategorized;
