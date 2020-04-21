import React, { useState } from "react";
import AnimeCard from "./animeshowcase/AnimeCard";
import "./AnimeSearch.css";

const AnimeSearch = ({ searchedText }) => {
  const [text, setText] = useState("");

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
    </div>
  );
};

export default AnimeSearch;
