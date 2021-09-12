import React from "react";
import { useLocation } from "react-router-dom";

const SingleFacility = (t) => {
  const location = useLocation();
  const { image, facilityName, facilityId, purpose, features, price } =
    location.state.t;

  return (
    <div>
      <div className="col-md-6">
        <img src={image[0].url}></img>
      </div>
      <div className="col-md-6">
        <h1>Details</h1>
        <h3>facility Name: {facilityName} </h3>
        <h3>facility ID:{facilityId} </h3>
        <h3>purpose:{purpose} </h3>
        <h3>feature:{features} </h3>
        <h3>price:{price} Rs </h3>
      </div>
    </div>
  );
};

export default SingleFacility;
