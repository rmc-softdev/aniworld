import React, { useState } from "react";
import AnimeCard from "./AnimeCard";

const AnimeSearch = ({ searchedText }) => {
  const [text, setText] = useState("");

  const onTermSubmit = (e) => {
    e.preventDefault();
    searchedText(text);
  };

  return (
    <div>
      <form onSubmit={onTermSubmit}>
        <input onChange={(e) => setText(e.target.value)} />
      </form>
    </div>
  );
};

export default AnimeSearch;
