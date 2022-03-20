import React, { useEffect } from "react";

import { useState } from "react";
import axios from "axios";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";


const Results = (props) => {
  console.log(props.results[0]);
  console.log(`inside results ${props.user?.name}`);

  const [subcribedIDs, setSubcribedIDs] = useState([]);

  useEffect(
    function getSuscribedIDs() {
      axios
        .post("/subscriptions", { username: props.user?.name })
        .then((result) => {
          console.log(result);
          setSubcribedIDs(result.data);
        })
        .catch((error) => console.log(error));
    },
    [props.user?.name]
  );

  const handleSubscribeButton = function (event, recordid) {
    event.preventDefault();
    
    // if (true) {
    //   ReactDOM.render(<Route path="login" element={<LoginForm />} />);
    // }
    console.log(recordid);
    // console.log("Inside handleSubscribeButton");
    const subscriptions = [];
    axios
      .post("/subscriptions", { username: props.user?.name })
      .then((result) => {
        console.log(`The results are ${result.data}`);
        // subscriptions = [...result.data];
        // console.log(subscriptions);
        if (result.data.includes(recordid)) {
          axios
            .patch("/deleteSubscriptions", {
              username: props.user?.name,
              subscriptionID: recordid,
            })
            .then((result) => {
              console.log(result.data);
              setSubcribedIDs([...result.data]);
            })
            .catch((error) => console.log(error));
        } else {
          axios
            .patch("/subscriptions", {
              username: props.user?.name,
              subscriptionID: recordid,
            })
            .then((result) => {
              console.log(result.data);
              setSubcribedIDs([...result.data]);
            })
            .catch((error) => console.log(error));
        }
      })
      .catch((error) => console.log(error));
  };

  return (
    <>
      {props.results[0] ? (
        props.results.map((element) =>
          subcribedIDs.includes(element.recordid) ? (
            <div
              className="single-service subscribed"
              key={element.fields.program_name}
            >
              <div className="service-img">
                <img src="images/service2.png" />
              </div>
              <div className="service-info">
                <h3>Program Name: {element.fields.program_name}</h3>
                <p>{element.fields.description}</p>
                <p>Location: {element.fields.location_address}</p>
                <p>Program Status: {element.fields.program_status}</p>
                <button
                  className="btn-default"
                  onClick={(event) =>
                    handleSubscribeButton(event, element.recordid)
                  }
                >
                  Unsubscribe
                </button>
              </div>
            </div>
          ) : (
            <div className="single-service" key={element.fields.program_name}>
              <div className="service-img">
                <img src="images/service2.png" />
              </div>
              <div className="service-info">
                <h3>Program Name: {element.fields.program_name}</h3>
                <p>{element.fields.description}</p>
                <p>Location: {element.fields.location_address}</p>
                <p>Program Status: {element.fields.program_status}</p>
                <button
                  className="btn-default"
                  onClick={(event) =>
                    handleSubscribeButton(event, element.recordid)
                  }
                >
                  Subscribe
                </button>
              </div>
            </div>
          )
        )
      ) : (
        <></>
      )}
    </>
  );
};

export default Results;

{
  /* <div className="single-service" key={element.fields.program_name}>
<div className="service-img">
  <img src="images/service2.png" />
</div>
<div className="service-info">
  <h3>Program Name: {element.fields.program_name}</h3>
  <p>{element.fields.description}</p>
  <p>Location: {element.fields.location_address}</p>
  <p>Program Status: {element.fields.program_status}</p>
  <a href="#" className="btn-default">
    Subscribe
  </a>
</div>
</div> */
}
