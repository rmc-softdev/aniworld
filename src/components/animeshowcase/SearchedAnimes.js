import React from "react";

const SearchedAnimes = ({ searchedContent }) => {
  console.log(searchedContent);
  return (
    <>
      <h2> Results: </h2>
      <ul>
        {searchedContent.map((el) => (
          <li key={searchedContent.key}>
            <img src={el.attributes.posterImage.tiny} alt="" />
          </li>
        ))}
      </ul>
    </>
  );
  /*
        <ul>
          <li>{searchedContent.map((el) => el.attributes.coverImage)} </li>
        </ul>
  */
};

export default SearchedAnimes;
