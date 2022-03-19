import React from "react";

import ReactDOM from "react-dom";
import SearchOptions from "./SearchOptions";
import SearchResults from "./SearchResults";
import { useState } from "react";

const Results = (props) => {
    
  console.log(props.results[0]);
    console.log(`inside results ${props.user?.name}`);


  return (
    <>
      {props.results[0] ? (
        props.results.map((element) => (
          <div className="single-service" key={element.fields.program_name}>
            <div className="service-img">
              <img src="images/service2.png" />
            </div>
            <div className="service-info">
              <h3>Program Name: {element.fields.program_name}</h3>
              <p>{element.fields.description}</p>
              <p>Location: {element.fields.location_address}</p>
              <p>Program Status: {element.fields.program_status}</p>
              <a href="#" className="btn-default" >
                Subscribe
              </a>
            </div>
          </div>
        ))
      ) : (
        <></>
      )}
    </>
  );
};

export default Results;
