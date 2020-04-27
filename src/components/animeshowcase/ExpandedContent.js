import React from "react";
import AnimeSearch from "../AnimeSearch";
import Categories from "../Categories";
import AnimeCard from "./AnimeCard";

const ExpandedContent = (props) => {
  const title = props.location.state.title;
  const fullContent = props.location.state.array;
  const renderWarning = (length) => {
    if (length <= 5) {
      return (
        <h4>
          Sorry, I couldn't find more out of the "{`${title}`}" category due the
          way this API operates. If you find a way around it, please contact me
          at
          <span className="contact"> rmcdev@gmail.com</span>
        </h4>
      );
    }
  };
  return (
    <>
      <div className="main content">
        <AnimeSearch logo={title} />
        <div className="secondary container">
          {renderWarning(fullContent.length)}
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

export default ExpandedContent;
