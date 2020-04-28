import React from "react";
import Categories from "../Categories";
import AnimeSearch from "../AnimeSearch";
import ShowCaseManga from "./ShowCaseManga";
// import ShowCaseCategory from "./ShowCaseCategory";
// TO DO! important import ShowCaseCategory from "./ShowCaseCategory";
// INITIAL CONTENT AS WELL!

const ShowCase = ({ location: { pathname } }) => {
  return (
    <>
      <div className="main content">
        <AnimeSearch logo={"Explore Manga"} />
        <div className="secondary container">
          {pathname.includes("manga") ? <ShowCaseManga /> : ""}
        </div>
      </div>
      <Categories />
    </>
  );
};

export default ShowCase;
