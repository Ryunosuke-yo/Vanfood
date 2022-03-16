import React from 'react';

import ReactDOM from 'react-dom'; 


const SearchOptions = props => {
    return(
        <>
        <section className="filter-section">
        <div className="container">
          <div className="searchForm">
            <h3>Check If you any available service in your area</h3>
            <form action="/search" method="GET">
              <div className="fieldWrap">
                <div className="inputWrap">
                  <input type="text" name="searchText" id="searchText"
                    placeholder="Type keyword here or left it blank for all results"></input>
                </div>
              </div>
              <div className="fieldWrap">
                <p>Local Areas</p>
                <div className="inputWrap">
                  <select name="localArea" id="localArea">
                    <option value="Downtown">Downtown</option>
                    <option value="location1">Location 1</option>
                    <option value="location2">Location 2</option>
                    <option value="location3">Location 3</option>
                  </select>
                </div>
              </div>
              <div className="fieldWrap">
                <p>Provide meals</p>
                <div className="inputWrap">
                  <label className="radioWrap">Yes
                    <input type="radio" name="meal" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="radioWrap">No
                    <input type="radio" checked name="meal" />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>
              <div className="fieldWrap">
                <p>Provide Hampers</p>
                <div className="inputWrap">
                  <label className="radioWrap">Yes
                    <input type="radio" name="hamper" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="radioWrap">No
                    <input type="radio" checked name="hamper" />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>
              <div className="fieldWrap">
                <p>Delivery available?</p>
                <div className="inputWrap">
                  <label className="radioWrap">Yes
                    <input type="radio" name="delivery" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="radioWrap">No
                    <input type="radio" checked name="delivery" />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>
              <div className="fieldWrap">
                <p>Wheel Chair accessible?</p>
                <div className="inputWrap">
                  <label className="radioWrap">Yes
                    <input type="radio" name="wheelchair" />
                    <span className="checkmark"></span>
                  </label>
                  <label className="radioWrap">No
                    <input type="radio" checked name="wheelchair" />
                    <span className="checkmark"></span>
                  </label>
                </div>
              </div>
              <button type="submit" className="btn-primary">Search</button>
            </form>
          </div>
        </div>
      </section>

        
        </>
    )
}

export default SearchOptions;