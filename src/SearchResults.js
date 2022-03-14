import React from 'react';

import ReactDOM from 'react-dom'; 


const SearchResults = props => {
    return(
        <>
        <section class="services-section">
        <div class="container">

          <div class="single-service">
            <div class="service-img"><img src="images/service2.png" /></div>
            <div class="service-info">
              <h3>Program Name: PHS - Washington Community Market</h3>
              <p>Low cost essential food and household supplies, open M-F 9am-4pm. For info contact 604-683-0073.</p>
              <p>Location: 177 E Hastings St, Vancouver, BC</p>
              <p>ADDRESS EXTRA INFO: Ground Floor</p>
              <p>Program Status: Open</p>
              <a href="#" class="btn-default">Subscribe</a>
            </div>
          </div>
          <div class="single-service subscribed">
            <div class="service-img"><img src="images/service3.png" /></div>
            <div class="service-info">
              <h3>Program Name: PHS - Washington Community Market</h3>
              <p>Low cost essential food and household supplies, open M-F 9am-4pm. For info contact 604-683-0073.</p>
              <p>Location: 177 E Hastings St, Vancouver, BC</p>
              <p>ADDRESS EXTRA INFO: Ground Floor</p>
              <p>Program Status: Open</p>
              <a href="#" class="btn-default">Subscribed</a>
            </div>
          </div>
        </div>
      </section> 
        </>
    )
}

export default SearchResults;