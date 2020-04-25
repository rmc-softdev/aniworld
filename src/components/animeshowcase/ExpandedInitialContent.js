import React from "react";
import AnimeSearch from "../AnimeSearch";
import Categories from "../Categories";

const ExpandedInitialContent = (props) => {
  console.log(props);
  return (
    <>
      <div className="main content">
        <AnimeSearch />
        <div className="secondary container">SOME CONTENT</div>
      </div>

      <Categories />
    </>
  );
};

export default ExpandedInitialContent;
