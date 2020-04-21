import React, { useState, useEffect } from "react";
import AnimeCard from "./animeshowcase/AnimeCard";
import "./AnimeSearch.css";
import SearchedAnimes from "./SearchedAnimes";

const AnimeSearch = ({ searchedText }) => {
  const [text, setText] = useState("");
  const [searchedAnime, setSearchedAnime] = useState([]);

  useEffect(() => {
    const fetchSearchedAnime = () => {
      if (text !== "") {
        fetch(`https://kitsu.io/api/edge/anime?filter[text]=${text}`)
          .then((res) => res.json())
          .then((newData) => setSearchedAnime(newData.data));
      }
    };
    fetchSearchedAnime();
  }, [text]);

  const onTermSubmit = (e) => {
    e.preventDefault();
    searchedText(text);
  };

  return (
    <div className="search container">
      <h1> Explore Anime & Manga</h1>
      <form onSubmit={onTermSubmit}>
        <input onChange={(e) => setText(e.target.value)} />
      </form>
      <h2> Results: </h2>
      <SearchedAnimes searchedContent={searchedAnime} />
    </div>
  );
};

export default AnimeSearch;
