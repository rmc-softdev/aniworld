import React, { useEffect, useState } from "react";
import AnimeCard from "./AnimeCard";

const InitialContent = () => {
  const [trendingAnime, setTrendingAnime] = useState([]);
  const [trendingManga, setTrendingManga] = useState([]);
  const [highestRated, setHighestRated] = useState([]);

  useEffect(() => {
    const fetchTrendingAnime = () => {
      fetch("https://kitsu.io/api/edge/trending/anime?limit=5?")
        .then((res) => res.json())
        .then((newData) => setTrendingAnime(newData.data));
    };
    const fetchTrendingManga = () => {
      fetch("https://kitsu.io/api/edge/trending/manga?limit=5?")
        .then((res) => res.json())
        .then((newData) => setTrendingManga(newData.data));
    };

    const fetchHighestRated = () => {
      fetch(
        "https://kitsu.io/api/edge/anime?page[limit]=5&page[offset]=5&sort=-averageRating"
      )
        .then((res) => res.json())
        .then((newData) => {
          setHighestRated(newData.data);
        });
    };

    fetchTrendingAnime();
    fetchTrendingManga();
    fetchHighestRated();
  }, []);

  return (
    <div className="secondary container">
      <h3> Trending Anime this week</h3>
      <div className="grid container">
        {trendingAnime.map((AnimeData) => (
          <AnimeCard key={AnimeData.id} animeData={AnimeData} />
        ))}
      </div>
      <h3> Trending Manga this week</h3>
      <div className="grid container">
        {trendingManga.map((AnimeData) => (
          <AnimeCard key={AnimeData.id} animeData={AnimeData} />
        ))}
      </div>
      <h3> Highest Rated Anime</h3>
      <div className="grid container">
        {highestRated.map((AnimeData) => (
          <AnimeCard key={AnimeData.id} animeData={AnimeData} />
        ))}
      </div>
    </div>
  );
};

export default InitialContent;
