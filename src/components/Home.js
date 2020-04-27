import React from "react";
import AnimeSearch from "./AnimeSearch";
import InitialContent from "./animeshowcase/InitialContent";
import Categories from "./Categories";

const Home = () => {
  return (
    <>
      <div className="main content">
        <AnimeSearch />
        <InitialContent />
      </div>
      <Categories />
    </>
  );
};

export default Home;
