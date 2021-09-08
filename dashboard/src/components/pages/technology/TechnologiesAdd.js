import React, { useState } from "react";
import SideNav from "../../nav/SideNav";
import Header from "../../nav/Header";
import logo from "../../../Healistry.png";
import Footer from "../../nav/Footer";
import TechnologyForm from "../../forms/TechnologyForm";
import { addTechnology } from "../../../api/technology";

const initailSate = {
  machineName: "",
  machineId: "",
  precaution: "",
  eta: "",
  purpose: "",
  procedure: "",
  price: "",
  image: [],
};
const TechnologiesAdd = ({ history }) => {
  const [technology, setTechnology] = useState(initailSate);
  const [validated, setValidated] = useState(false);

  const handleChange = (e) => {
    setTechnology({ ...technology, [e.target.name]: e.target.value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.stopPropagation();
    }

    setValidated(true);
    // event.preventDefault();
    console.log(event.target.value);
    addTechnology(technology)
      .then((res) => {
        console.log("technology res", res);
        if (res.data.error === "duplicate key") {
          window.alert("Duplicate key error");
        } else history.push("/technology/update");
        setTechnology(initailSate);
        // history.push("/technology/update");
      })
      .catch((err) => {
        console.log(err);
        window.alert("Error", err);
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
                    <div>
                      Add Technology Details
                      <div className="page-title-subheading">
                        This is an example dashboard created using build-in
                        elements and components.
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              {/* Add Form Here */}

              <TechnologyForm
                validated={validated}
                submitHandler={submitHandler}
                setTechnology={setTechnology}
                technology={technology}
                handleChange={handleChange}
              />
              {/* Body Part */}
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TechnologiesAdd;
