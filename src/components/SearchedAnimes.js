import React from "react";

const SearchedAnimes = ({ searchedContent }) => {
  console.log(searchedContent);
  return (
    <>
      <ul>
        {searchedContent.map((el) => (
          <li>{el.attributes.titles.en_jp}</li>
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
