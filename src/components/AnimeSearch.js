import React, { useState, useEffect } from "react";
import "./AnimeSearch.css";
import SearchedAnimes from "./animeshowcase/SearchedAnimes";

const AnimeSearch = ({ searchedText }) => {
  const [text, setText] = useState(""); // this is the searched word
  const [searchedAnime, setSearchedAnime] = useState([]);

  useEffect(() => {
    const fetchSearchedAnime = () => {
      fetch(
        `https://kitsu.io/api/edge/anime?page[limit]=5&page[offset]=0&filter[text]=${text}`
      )
        .then((res) => res.json())
        .then((newData) => {
          setSearchedAnime(newData.data);
        });
    };
    fetchSearchedAnime();
  }, [text]);

  const onTermSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="search container">
      <h1> Explore Anime & Manga</h1>
      <form onSubmit={onTermSubmit}>
        <input onChange={(e) => setText(e.target.value)} value={text} />
      </form>
      {text !== "" && <SearchedAnimes searchedContent={searchedAnime} />}
    </div>
  );
};

export default AnimeSearch;
