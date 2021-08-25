import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getFacilities, deleteFacility } from "../../../api/facility";
import Footer from "../../nav/Footer";
import Header from "../../nav/Header";
import SideNav from "../../nav/SideNav";
import Search from "../../search/Search";

const Facility = () => {
  const [facilities, setFacilities] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    loadFacilities();
  }, []);

  const loadFacilities = () => {
    getFacilities().then((f) => {
      setFacilities(f.data);
      console.log(f);
    });
  };

  const handleRemove = async (id) => {
    if (window.confirm("Delete Facility?")) {
      deleteFacility(id)
        .then((res) => {
          loadFacilities();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const searched = (keyword) => (s) =>
    s.facilityName.toLowerCase().includes(keyword);

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
                <Search keyword={keyword} setKeyword={setKeyword} />
              </div>
              {facilities.filter(searched(keyword)).map((f) => {
                return (
                  <div key={f._id}>
                    {f.facilityName}

                    <span
                      onClick={() => handleRemove(f._id)}
                      className="btn btn-sm float-right"
                    >
                      delete
                    </span>
                    <Link
                      to={{
                        pathname: `/facility/${f._id}`,
                        state: { facility: f },
                      }}
                      className="btn btn-sm float-right"
                    >
                      edit
                    </Link>
                  </div>
                );
              })}
            </div>
            <Footer />
          </div>
        </div>
      </div>
    </div>
    // <div>

    // </div>
  );
};

export default Facility;
