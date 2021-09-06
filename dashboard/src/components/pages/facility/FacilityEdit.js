import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import FacilityForm from "../../forms/FacilityForm";
import { editFacility } from "../../../api/facility";
import Header from "../../nav/Header";
import Footer from "../../nav/Footer";
import SideNav from "../../nav/SideNav";

const FacilityEdit = (match) => {
  const location = useLocation();

  const initailSate = {
    facilityName: location.state.facility.facilityName,
    facilityId: location.state.facility.facilityId,
    purpose: location.state.facility.purpose,
    price: location.state.facility.price,
    image: location.state.facility.image,
    features: location.state.facility.features,
  };
  const [facility, setFacility] = useState(initailSate);

  const handleChange = (e) => {
    setFacility({ ...facility, [e.target.name]: e.target.value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    console.log(event.target.value);
    editFacility(facility, location.state.facility._id)
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
                <FacilityForm
                  facility={facility}
                  setFacility={setFacility}
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

export default FacilityEdit;
