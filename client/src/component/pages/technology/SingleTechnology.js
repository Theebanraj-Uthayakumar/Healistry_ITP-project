import React from "react";
import { useLocation } from "react-router-dom";

const SingleTechnology = (props) => {
  const location = useLocation();
  const {
    image,
    machineName,
    procedure,
    machineId,
    purpose,
    precautions,
    price,
    eta,
  } = location.state.t;

  return (
    <div>
      <div className="col-md-6">
        <img src={image[0].url}></img>
      </div>
      <div className="col-md-6">
        <h1>Details</h1>
        <h3>machine Name: {machineName}</h3>
        <h3>machine ID:{machineId} </h3>
        <h3>purpose:{purpose} </h3>
        <h3>precautions:{precautions} </h3>
        <h3>price:{price} Rs   </h3>
        <h3>estimated time:{eta} </h3>
        <h3>procedure:{procedure} </h3>
      </div>
    </div>
  );
};

export default SingleTechnology;
