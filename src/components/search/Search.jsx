import React from "react";
import "../search/search.css"
import Home from "../../pages/home";
const Search = (props) => {
  return (
    <div className="search-wrapper">
      <input onChange={props.onSearch} className="search-input" type="search" placeholder="Search.." />
    </div>
  );
};
export default Search;
