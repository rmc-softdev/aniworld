import React, { useState } from "react";
import AnimeCard from "./AnimeCard";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

// TO DO
export default (ChildComponent) => {
  class ComposedComponent extends React.Component {
    renderContent = (array, title, location, size) => {
      const path = location ? `${location}` : `${title}`;
      const reducedContent = array.slice(0, size);
      return (
        <>
          <h3 className="showcase title">{title}</h3>
          <div className="grid container">
            {reducedContent.map((AnimeData) => (
              <AnimeCard key={AnimeData.id} animeData={AnimeData} />
            ))}

            <div className="expand btn">
              <Link
                className="expanded btn"
                to={{
                  pathname: `/expanded/${path}}`,
                  state: {
                    array,
                    title,
                  },
                }}
              >
                View More
              </Link>
            </div>
          </div>
        </>
      );
    };

    render() {
      return (
        <ChildComponent {...this.props} renderContent={this.renderContent} />
      );
    }
  }

  function mapStateToProps(state) {
    return;
  }

  return connect(mapStateToProps)(ComposedComponent);
};
