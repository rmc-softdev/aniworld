import React, { useState, useEffect } from "react";
import "./AnimeSearch.css";
import SearchedAnimes from "./animeshowcase/SearchedAnimes";

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

    return () => {
      //we want to clean up the list if the search input is empty
    };
  }, [text]);

  const onTermSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="search container">
      <h1> Explore Anime & Manga</h1>
      <form onSubmit={onTermSubmit}>
        <input onChange={(e) => setText(e.target.value)} />
      </form>
      {text !== "" && <SearchedAnimes searchedContent={searchedAnime} />}
    </div>
  );
};

export default AnimeSearch;
