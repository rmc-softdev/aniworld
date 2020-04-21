import React, { Component, useState, useEffect } from "react";

import AnimeCard from "./components/AnimeCard";
import AnimeSearch from "./components/AnimeSearch";
import Header from "./components/Header";
import SearchedAnime from "./components/SearchedAnime";

function App() {
  const [searchedAnime, setSearchedAnime] = useState([]);
  const [trendingAnime, setTrendingAnime] = useState([]);
  const [trendingManga, setTrendingManga] = useState([]);
  const [highestRated, setHighestRated] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // to be used
  const [term, setTerm] = useState("");

  useEffect(() => {
    const fetchSearchedAnime = () => {
      if (term !== "") {
        fetch(
          `https://kitsu.io/api/edge/anime?filter[text]=${term}?&sort=-averageRating`
        )
          .then((res) => res.json())
          .then((newData) => setSearchedAnime(newData.data));
      }
    };

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
      fetch("https://kitsu.io/api/edge/anime?&sort=-averageRating")
        .then((res) => res.json())
        .then((newData) => setHighestRated(newData.data));
    };

    fetchSearchedAnime();
    fetchTrendingAnime();
    fetchTrendingManga();
    fetchHighestRated();
  }, [term]);

  return (
    <>
      <Header />
      <AnimeSearch searchedText={(text) => setTerm(text)} />
      <div>
        <SearchedAnime searchedAnime={searchedAnime} />
        <h1> Trending Anime this week</h1>
        {trendingAnime.map((AnimeData) => (
          <AnimeCard key={AnimeData.id} animeData={AnimeData} />
        ))}
        <h1> Trending Manga this week</h1>
        {trendingManga.map((AnimeData) => (
          <AnimeCard key={AnimeData.id} animeData={AnimeData} />
        ))}
        <h1> Highest Rated Anime</h1>
        {highestRated.map((AnimeData) => (
          <AnimeCard key={AnimeData.id} animeData={AnimeData} />
        ))}
      </div>
    </>
  );
}

export default App;
