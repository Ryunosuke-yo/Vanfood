import axios from "axios";
import React, { useEffect, useState } from "react";

import ReactDOM from "react-dom";
import { set } from "react-hook-form";
import program from "../lib/program";
import LocalAreas  from "./LocalAreas";

const SearchOptions = (props) => {
  const [areas, setAreas] = useState([]);

  useEffect(function loadAreas() {
    axios
      .get("/locations")
      .then((result) => {
        console.log(result.data.location);
        setAreas(result.data.location);
        
        
      })
      .catch((error) => console.log(error));
      console.log(areas);
    }, []);

  return (
    <>
      <section className="filter-section">
        <div className="container">
          <div className="searchForm">
            <h3>Check If you any available service in your area</h3>
            <form action="/search" method="GET">
              <div className="fieldWrap">
                <div className="inputWrap">
                  <input
                    type="text"
                    name="searchText"
                    id="searchText"
                    placeholder="Type keyword here or left it blank for all results"
                    onChange={(event) => props.handleSearchOptionsChange(event)}
                  ></input>
                </div>
              </div>
              <div className="fieldWrap">
                <p>Local Areas</p>
                <div className="inputWrap">
                  <select
                    name="localArea"
                    id="localArea"
                    onChange={(event) => props.handleSearchOptionsChange(event)}
                  >
                    <LocalAreas areas={areas} />
                  </select>
                </div>
              </div>
              <div className="fieldWrap">
                <p>Provide meals</p>
                <div className="inputWrap">
                  <label className="radioWrap">
                    Yes
                    <input
                      type="radio"
                      name="meal"
                      value="true"
                      onClick={(event) =>
                        props.handleSearchOptionsChange(event)
                      }
                    />
                    <span className="checkmark"></span>
                  </label>
                  <label className="radioWrap">
                    No
                    <input
                      type="radio"
                      name="meal"
                      value="false"
                      onClick={(event) =>
                        props.handleSearchOptionsChange(event)
                      }
                    />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>
              <div className="fieldWrap">
                <p>Provide Hampers</p>
                <div className="inputWrap">
                  <label className="radioWrap">
                    Yes
                    <input
                      type="radio"
                      name="hamper"
                      value="true"
                      onChange={(event) =>
                        props.handleSearchOptionsChange(event)
                      }
                    />
                    <span className="checkmark"></span>
                  </label>
                  <label className="radioWrap">
                    No
                    <input
                      type="radio"
                      name="hamper"
                      value="false"
                      onChange={(event) =>
                        props.handleSearchOptionsChange(event)
                      }
                    />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>
              <div className="fieldWrap">
                <p>Delivery available?</p>
                <div className="inputWrap">
                  <label className="radioWrap">
                    Yes
                    <input
                      type="radio"
                      name="delivery"
                      value="true"
                      onChange={(event) =>
                        props.handleSearchOptionsChange(event)
                      }
                    />
                    <span className="checkmark"></span>
                  </label>
                  <label className="radioWrap">
                    No
                    <input
                      type="radio"
                      name="delivery"
                      value="false"
                      onChange={(event) =>
                        props.handleSearchOptionsChange(event)
                      }
                    />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>
              <div className="fieldWrap">
                <p>Wheel Chair accessible?</p>
                <div className="inputWrap">
                  <label className="radioWrap">
                    Yes
                    <input
                      type="radio"
                      name="wheelchair"
                      value="true"
                      onChange={(event) =>
                        props.handleSearchOptionsChange(event)
                      }
                    />
                    <span className="checkmark"></span>
                  </label>
                  <label className="radioWrap">
                    No
                    <input
                      type="radio"
                      name="wheelchair"
                      value="false"
                      onChange={(event) =>
                        props.handleSearchOptionsChange(event)
                      }
                    />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>
              <button type="submit" className="btn-primary">
                Search
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default SearchOptions;
