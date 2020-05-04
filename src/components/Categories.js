import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchGenres } from "../actions/fetchActions";
import { connect } from "react-redux";
import "./Categories.css";
import { Dimmer, Loader, Segment } from "semantic-ui-react";

const Categories = (props) => {
  //notice the second block inside the conditional is just the spinner
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
              {props.status ? (
                props.genres.map((el) => (
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
                ))
              ) : (
                <div class="sk-circle">
                  <div class="sk-circle1 sk-child"></div>
                  <div class="sk-circle2 sk-child"></div>
                  <div class="sk-circle3 sk-child"></div>
                  <div class="sk-circle4 sk-child"></div>
                  <div class="sk-circle5 sk-child"></div>
                  <div class="sk-circle6 sk-child"></div>
                  <div class="sk-circle7 sk-child"></div>
                  <div class="sk-circle8 sk-child"></div>
                  <div class="sk-circle9 sk-child"></div>
                  <div class="sk-circle10 sk-child"></div>
                  <div class="sk-circle11 sk-child"></div>
                  <div class="sk-circle12 sk-child"></div>
                </div>
              )}
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};

const mapStateToProps = (state) => ({
  genres: state.fetch.genres,
  status: state.fetch.status,
});

export default connect(mapStateToProps, fetchGenres)(Categories);
