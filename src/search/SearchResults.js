import React, { useState, useEffect } from "react";
import axios from "axios";
import Results from "./Results";

const SearchResults = (props) => {
  const [results, setResults] = useState([]);

  useEffect(
    function getResults() {
      console.log("Inside get results");
      console.log(props.searchOptions);
      axios
        .post("/results", { searchOptions: props.searchOptions })
        .then((result) => {
          console.log("inside axios result");
          console.log(result.data);
          setResults(result.data);
        })
        .catch((error) => console.log(error));
    },
    [props.searchOptions]
  );

  return (
    <>
      <section className="services-section">
        <div className="container">
          <Results results={results} user={props.user}/>
        </div>
      </section>
    </>
  );
};

export default SearchResults;

{/* <div className="single-service">
            <div className="service-img">
              <img src="images/service2.png" />
            </div>
            <div className="service-info"> */}
//               <h3>Program Name: PHS - Washington Community Market</h3>
//               <p>
//                 Low cost essential food and household supplies, open M-F
//                 9am-4pm. For info contact 604-683-0073.
//               </p>
//               <p>Location: 177 E Hastings St, Vancouver, BC</p>
//               <p>ADDRESS EXTRA INFO: Ground Floor</p>
//               <p>Program Status: Open</p>
//               <a href="#" className="btn-default">
//                 Subscribe
//               </a>
//             </div>
//           </div>
//           <div className="single-service subscribed">
//             <div className="service-img">
//               <img src="images/service3.png" />
//             </div>
//             <div className="service-info">
//               <h3>Program Name: PHS - Washington Community Market</h3>
//               <p>
//                 Low cost essential food and household supplies, open M-F
//                 9am-4pm. For info contact 604-683-0073.
//               </p>
//               <p>Location: 177 E Hastings St, Vancouver, BC</p>
//               <p>ADDRESS EXTRA INFO: Ground Floor</p>
//               <p>Program Status: Open</p>
//               <a href="#" className="btn-default">
//                 Subscribed
//               </a>
//             </div>
//           </div>
