import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import TechnologyForm from "../../forms/TechnologyForm";
import { editTechnology } from "../../../api/technology";
import Header from "../../nav/Header";
import Footer from "../../nav/Footer";
import SideNav from "../../nav/SideNav";

const TechnologyEdit = (match) => {
  const location = useLocation();

  const initailSate = {
    machineName: location.state.technology.machineName,
    machineId: location.state.technology.machineId,
    precaution: location.state.technology.precaution,
    price: location.state.technology.price,
    eta: location.state.technology.eta,
    image: location.state.technology.image,
    purpose: location.state.technology.purpose,
    procedure: location.state.technology.procedure,
  };
  const [technology, setTechnology] = useState(initailSate);

  const handleChange = (e) => {
    setTechnology({ ...technology, [e.target.name]: e.target.value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(event.target.value);
    editTechnology(technology, location.state.technology._id)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
        <Header />
        <div className="app-main">
          <SideNav />
          <div className="app-main__outer">
            <div className="app-main__inner">
              <div className="app-page-title">
                <div className="page-title-wrapper">
                  <div className="page-title-heading">
                    <div className="page-title-icon">
                      <i className="pe-7s-car icon-gradient bg-mean-fruit"></i>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <TechnologyForm
                  technology={technology}
                  setTechnology={setTechnology}
                  submitHandler={submitHandler}
                  handleChange={handleChange}
                />
              </div>
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologyEdit;
