import React, { useEffect, useState } from "react";
import Categories from "../Categories";
import AnimeSearch from "../AnimeSearch";
import AnimeCard from "./AnimeCard";
import { Link } from "react-router-dom";

const AnimeCategorized = (props) => {
  const searched = props.location.pathname.split("/")[2];
  const logo = `${searched} Anime`;
  const [trending, setTrending] = useState([]);
  const [mostPopular, setMostPopular] = useState([]);
  const [newlyReleased, setNewlyReleased] = useState([]);

  useEffect(() => {
    const fetchRated = () => {
      fetch(
        `https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=0&filter[genres]=${searched}&sort=-averageRating&sort=-startDate`
      )
        .then((res) => res.json())
        .then((newData) => {
          setTrending(newData.data);
        });
    };

    const fetchMostPopular = () => {
      fetch(
        `https://kitsu.io/api/edge/anime?page[limit]=20&page[offset]=0&filter[genres]=${searched}&sort=popularityRank`
      )
        .then((res) => res.json())
        .then((newData) => {
          setMostPopular(newData.data);
        });
    };

    const fetchNewlyReleased = () => {
      fetch(
        `https://kitsu.io/api/edge/anime?filter[seasonYear]=2020&page[limit]=20&page[offset]=0&filter[genres]=${searched}`
      )
        .then((res) => res.json())
        .then((newData) => {
          setNewlyReleased(newData.data);
        });
    };

    fetchMostPopular();
    fetchRated();
    fetchNewlyReleased();
  }, [searched]);
  // we want to sort out our data in order to render  them in some particular fashion, say trending

  const renderContent = (array, title) => {
    console.log(array);
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
        <AnimeSearch logo={logo} />
        <div className="secondary container">
          {renderContent(newlyReleased, `Newly Released ${searched} Anime`)}
          {renderContent(mostPopular, `Most Popular ${searched} Anime`)}
          {renderContent(trending, `Trending ${searched} Anime`)}
        </div>
      </div>
      <Categories />
    </>
  );
};

export default AnimeCategorized;
