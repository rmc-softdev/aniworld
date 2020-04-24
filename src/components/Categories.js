import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Categories = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenre = () => {
      fetch(
        "https://kitsu.io/api/edge/genres?page%5Blimit%5D=20&page%5Boffset%5D=0"
      )
        .then((res) => res.json())
        .then((newData) => {
          setGenres(newData.data);
        });
    };

    fetchGenre();
  }, []);
  return (
    /* We should wrap it in a <Link with such features: then we'll render them, look out kitsu for more info.
    to={{
          pathname: `/${animeData.attributes.slug}`,
          state: {
            animeData,
          },
        }}
    */
    <>
      <div className="categories">
        <ul>
          {genres.map((el) => (
            <li key={el.id}>
              <Link
                to={{
                  pathname: `/search/${el.attributes.name}`,
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

export default Categories;
