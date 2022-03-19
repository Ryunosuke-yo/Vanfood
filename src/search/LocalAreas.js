import React from "react";

import ReactDOM from "react-dom";
import SearchOptions from "./SearchOptions";
import SearchResults from "./SearchResults";
import { useState, useEffect } from "react";

const LocalAreas = (props) => {

  return (
    <>
    {props.areas.map((area)=>(
        <option value={area} key={area}>{area}</option>
    ))}</>
  )};

export default LocalAreas;
