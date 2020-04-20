import React, { Component, useState, useEffect } from "react";

import AnimeCard from "./components/AnimeCard";
import AnimeSearch from "./components/AnimeSearch";
import Header from "./components/Header";

function App() {
  const [searchedAnime, setSearchedAnime] = useState([]);
  const [trendingAnime, setTrendingAnime] = useState([]);
  const [trendingManga, setTrendingManga] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [term, setTerm] = useState("");

  useEffect(() => {
    if (term !== "") {
      fetch(`https://kitsu.io/api/edge/anime?filter[text]=${term}`)
        .then((res) => res.json())
        .then((newData) => setSearchedAnime(newData.data));
    } else {
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

      fetchTrendingAnime();
      fetchTrendingManga();
    }
  }, [term]);

  return (
    <div>
      <Header />
      <AnimeSearch searchedText={(text) => setTerm(text)} />
      <div>
        <h1> Searched Anime</h1>
        {searchedAnime.map((AnimeData, index) => (
          <AnimeCard key={index} animeData={AnimeData} />
        ))}

        <h1> Trending Animes</h1>
        {trendingAnime.map((AnimeData, index) => (
          <AnimeCard key={index} animeData={AnimeData} />
        ))}
        <h1> Trending Mangas</h1>
        {trendingManga.map((AnimeData, index) => (
          <AnimeCard key={index} animeData={AnimeData} />
        ))}
      </div>
    </div>
  );
}

export default App;
