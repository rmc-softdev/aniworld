import React from "react";
import Categories from "../Categories";
import AnimeSearch from "../search mechanism/AnimeSearch";
import ShowCaseManga from "./ShowCaseManga";

const ShowCase = ({ location: { pathname } }) => {
  return (
    <>
      <div className="main content">
        <AnimeSearch logo={"Explore Manga"} />
        <div className="secondary container">
          {pathname.includes("manga") ? <ShowCaseManga /> : null}
        </div>
      </div>
      <Categories />
    </>
  );
};

export default ShowCase;
