import React from "react";

const SearchedAnimes = ({ searchedContent }) => {
  console.log(searchedContent);
  return (
    <>
      <ul>
        {searchedContent.map((el) => (
          <li>
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
