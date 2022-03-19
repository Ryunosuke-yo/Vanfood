import React from "react";

import ReactDOM from "react-dom";
import SearchOptions from "./SearchOptions";
import SearchResults from "./SearchResults";
import { useState } from "react";

const Search = (props) => {
  const [searchOptions, setSearchOptions] = useState({
    searchText: "",
    localArea: "Downtown",
    meal: "false",
    hamper: "false",
    delivery: "false",
    wheelchair: "false",
  });

  const handleSearchOptionsChange = function (event) {
    let updatedOptions = { ...searchOptions };
    updatedOptions[event.target.name] = event.target.value;
    setSearchOptions(updatedOptions);
  };
  return (
    <>
      <h1>Text: {searchOptions.searchText}
      </h1>
      
      <h1>LocalArea: {searchOptions.localArea}
      </h1>
      
      <h1>Meal: {searchOptions.meal}
      </h1>
      
      <h1>Hamper: {searchOptions.hamper}
      </h1>
      
      <h1>Delivery: {searchOptions.delivery}
      </h1>
      
      <h1>WheelChair: {searchOptions.wheelchair}
      </h1>
      <SearchOptions
        searchOptions={searchOptions}
        handleSearchOptionsChange={handleSearchOptionsChange}
      />
      <SearchResults searchOptions={searchOptions} />
    </>
  );
};

export default Search;
