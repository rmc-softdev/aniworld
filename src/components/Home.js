import React from "react";
import AnimeSearch from "./search mechanism/AnimeSearch";
import ShowCaseAnime from "./animeshowcase/ShowCaseAnime";
import Categories from "./Categories";

const Home = () => {
  return (
    <>
      <div className="main content">
        <AnimeSearch />
        <ShowCaseAnime />
      </div>
      <Categories />
    </>
  );
};

export default Home;
