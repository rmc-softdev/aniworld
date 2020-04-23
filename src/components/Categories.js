import React, { useState, useEffect } from "react";

const Categories = () => {
  const [genres, setGenres] = useState([]);

  useEffect(() => {
    const fetchGenre = (genre) => {
      fetch(
        "https://kitsu.io/api/edge/genres?page%5Blimit%5D=20&page%5Boffset%5D=0"
        //"https://kitsu.io/api/edge/anime?filter[genres]=adventure"
      )
        .then((res) => res.json())
        .then((newData) => setGenres(newData.data));
    };

    fetchGenre();
  }, []);

  return (
    <>
      <div className="categories">
        <ul>
          {genres.map((el) => (
            <li key={genres.id}>{el.attributes.name}</li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Categories;
