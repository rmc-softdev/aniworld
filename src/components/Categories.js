import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchGenres } from "../actions/fetchActions";
import { connect } from "react-redux";
import "./Categories.css";

const Categories = ({ genres }) => {
  useEffect(() => {
    fetchGenres();
  }, []);
  return (
    <>
      <div className="categories">
        <div className="categories-container">
          <p class="category slogan">MY FAVORITE CATEGORIES</p>
          <div>
            <span class="project alert">
              This is an ongoing personal project of mine. Authentication is yet
              to be implemented.
            </span>
          </div>
          <div className="category showcase">
            <p class="category slogan">CATEGORIES</p>
            <ul className="category list">
              {genres.map((el) => (
                <li key={el.id}>
                  <Link
                    to={{
                      pathname: `/category/${el.attributes.name}`,
                      state: {
                        id: el.id,
                      },
                    }}
                  >
                    <button>{el.attributes.name}</button>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  genres: state.fetch.genres,
});

export default connect(mapStateToProps, fetchGenres)(Categories);
