import React, { useEffect, useState } from "react";
import animeShowCase from "./animeShowCase";

const ShowCaseManga = (props) => {
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

  return (
    <>
      {props.renderContent(topPublishing, `Top Publishing Manga`, "manga", 5)}
      {props.renderContent(trendingManga, `Trending This Week`, "manga", 5)}
      {props.renderContent(highestRated, "Highest Rated Manga", "manga", 5)}
      {props.renderContent(mostPopular, "Most Popular Manga", "manga", 5)}
    </>
  );
};

export default animeShowCase(ShowCaseManga);
