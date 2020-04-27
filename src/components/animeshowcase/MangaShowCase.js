import React, { useEffect, useState } from "react";
import Categories from "../Categories";
import AnimeSearch from "../AnimeSearch";
import AnimeCard from "./AnimeCard";
import { Link } from "react-router-dom";

const MangaShowCase = (props) => {
  const [trendingManga, setTrendingManga] = useState([]);
  const [topPublishing, setTopPublishing] = useState([]);
  const [highestRated, setHighestRated] = useState([]);
  const [mostPopular, setMostPopular] = useState([]);

  useEffect(() => {
    const fetchTrendingManga = () => {
      fetch(`https://kitsu.io/api/edge/trending/manga?limit=20?`)
        .then((res) => res.json())
        .then((newData) => {
          setTrendingManga(newData.data);
        });
    };

    const fetchTopPublishing = () => {
      fetch(
        `https://kitsu.io/api/edge/manga?page[limit]=20&page[offset]=0&sort=-startDate&sort=-averageRating`
      )
        .then((res) => res.json())
        .then((newData) => {
          setTopPublishing(newData.data);
        });
    };

    const fetchHighestRated = () => {
      fetch(
        `https://kitsu.io/api/edge/manga?page[limit]=20&page[offset]=5&sort=-averageRating`
      )
        .then((res) => res.json())
        .then((newData) => {
          setHighestRated(newData.data);
        });
    };
    const fetchMostPopular = () => {
      fetch(
        `https://kitsu.io/api/edge/manga?page[limit]=20&page[offset]=5&sort=popularityRank`
      )
        .then((res) => res.json())
        .then((newData) => {
          setMostPopular(newData.data);
        });
    };

    fetchHighestRated();
    fetchTopPublishing();
    fetchTrendingManga();
    fetchMostPopular();
  }, []);
  // we want to sort out our data in order to render  them in some particular fashion, say trending

  const renderContent = (array, title) => {
    const reducedContent = array.slice(0, 5);
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
      {renderContent(topPublishing, `Top Publishing Manga`)}
      {renderContent(trendingManga, `Trending This Week`)}
      {renderContent(highestRated, "Highest Rated Manga")}
      {renderContent(mostPopular, "Most Popular Manga")}
    </>
  );
};

export default MangaShowCase;
