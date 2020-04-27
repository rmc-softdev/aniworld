import React, { useEffect, useState } from "react";
import Categories from "../Categories";
import AnimeSearch from "../AnimeSearch";
import AnimeCard from "./AnimeCard";
import MangaShowCase from "./MangaShowCase";

const ShowCase = ({ location: { pathname } }) => {
  //
  return (
    <>
      <div className="main content">
        <AnimeSearch logo={"Explore Manga"} />
        <div className="secondary container">
          {pathname.includes("manga") ? <MangaShowCase /> : ""}
        </div>
      </div>
      <Categories />
    </>
  );
};

export default ShowCase;
