import React, { useState } from "react";
import SideNav from "../../nav/SideNav";
import Header from "../../nav/Header";
import FacilityForm from "../../forms/FacilityForm";
import Footer from "../../nav/Footer";
import { addFacility } from "../../../api/facility";

const initailSate = {
  facilityName: "",
  facilityId: "",
  purpose: "",
  price: "",
  image: [],
  features: "",
};

const FacilitiesAdd = ({ history }) => {
  const [facility, setFacility] = useState(initailSate);

  const handleChange = (e) => {
    setFacility({ ...facility, [e.target.name]: e.target.value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }
    // event.preventDefault();
    console.log(event.target.value);
    addFacility(facility)
      .then((res) => {
        console.log(res);
        if (res.data.error === "duplicate key") {
          window.alert("Duplicate key error");
        } else history.push("/facility/update");
      })
      .catch((err) => {
        console.log(err);
        window.alert("Error", err);
      });
  };

  return (
    <>
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
                    <div>
                      Add Faility Details
                      <div className="page-title-subheading">
                        This is an example dashboard created using build-in
                        elements and components.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Add Form Here */}

              <FacilityForm
                facility={facility}
                setFacility={setFacility}
                submitHandler={submitHandler}
                handleChange={handleChange}
              />
              {/* Body Part */}
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </>
  );
};

export default FacilitiesAdd;
