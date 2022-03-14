import React from 'react';

import ReactDOM from 'react-dom'; 


const SearchOptions = props => {
    return(
        <>
        <section class="filter-section">
        <div class="container">
          <div class="searchForm">
            <h3>Check If you any available service in your area</h3>
            <form action="/search" method="GET">
              <div class="fieldWrap">
                <div class="inputWrap">
                  <input type="text" name="searchText" id="searchText"
                    placeholder="Type keyword here or left it blank for all results"></input>
                </div>
              </div>
              <div class="fieldWrap">
                <p>Local Areas</p>
                <div class="inputWrap">
                  <select name="localArea" id="localArea">
                    <option value="Downtown">Downtown</option>
                    <option value="location1">Location 1</option>
                    <option value="location2">Location 2</option>
                    <option value="location3">Location 3</option>
                  </select>
                </div>
              </div>
              <div class="fieldWrap">
                <p>Provide meals</p>
                <div class="inputWrap">
                  <label class="radioWrap">Yes
                    <input type="radio" name="meal" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="radioWrap">No
                    <input type="radio" checked name="meal" />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>
              <div class="fieldWrap">
                <p>Provide Hampers</p>
                <div class="inputWrap">
                  <label class="radioWrap">Yes
                    <input type="radio" name="hamper" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="radioWrap">No
                    <input type="radio" checked name="hamper" />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>
              <div class="fieldWrap">
                <p>Delivery available?</p>
                <div class="inputWrap">
                  <label class="radioWrap">Yes
                    <input type="radio" name="delivery" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="radioWrap">No
                    <input type="radio" checked name="delivery" />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>
              <div class="fieldWrap">
                <p>Wheel Chair accessible?</p>
                <div class="inputWrap">
                  <label class="radioWrap">Yes
                    <input type="radio" name="wheelchair" />
                    <span class="checkmark"></span>
                  </label>
                  <label class="radioWrap">No
                    <input type="radio" checked name="wheelchair" />
                    <span class="checkmark"></span>
                  </label>
                </div>
              </div>
              <button type="submit" class="btn-primary">Search</button>
            </form>
          </div>
        </div>
      </section>

        
        </>
    )
}

export default SearchOptions;