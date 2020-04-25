import React from "react";
import AnimeSearch from "../AnimeSearch";
import Categories from "../Categories";
import AnimeCard from "./AnimeCard";

const ExpandedInitialContent = (props) => {
  const title = props.location.state.title;
  const fullContent = props.location.state.array;
  return (
    <>
      <div className="main content">
        <AnimeSearch logo={title} />
        <div className="secondary container">
          <p></p>
          <div className="grid container">
            {fullContent.map((AnimeData) => (
              <AnimeCard key={AnimeData.id} animeData={AnimeData} />
            ))}
          </div>
        </div>
      </div>

      <Categories />
    </>
  );
};

export default ExpandedInitialContent;
