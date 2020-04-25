import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { fetchGenres } from "../actions/fetchActions";
import { connect } from "react-redux";

const Categories = (props) => {
  useEffect(() => {
    fetchGenres();
  }, []);
  return (
    <>
      <div className="categories">
        <ul>
          {props.genres.map((el) => (
            <li key={el.id}>
              <Link
                to={{
                  pathname: `/category/${el.attributes.name}`,
                }}
              >
                <button>{el.attributes.name}</button>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
const mapStateToProps = (state) => ({
  genres: state.fetch.genres,
});
export default connect(mapStateToProps, fetchGenres)(Categories);
