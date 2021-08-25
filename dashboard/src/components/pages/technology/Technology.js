import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTechnologies, deleteTechnology } from "../../../api/technology";
import Footer from "../../nav/Footer";
import Header from "../../nav/Header";
import SideNav from "../../nav/SideNav";
import Search from "../../search/Search";

const TechnologyUpdate = () => {
  const [technologies, setTechnologies] = useState([]);
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    loadTechnologies();
  }, []);

  const loadTechnologies = () => {
    getTechnologies().then((t) => {
      setTechnologies(t.data);
      console.log(t);
    });
  };

  const handleRemove = async (id) => {
    if (window.confirm("Delete Facility?")) {
      deleteTechnology(id)
        .then((res) => {
          loadTechnologies();
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  const searched = (keyword) => (s) =>
    s.machineName.toLowerCase().includes(keyword);

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
              {technologies.filter(searched(keyword)).map((t) => {
                return (
                  <div key={t._id}>
                    {t.machineName}

                    <span
                      onClick={() => handleRemove(t._id)}
                      className="btn btn-sm float-right"
                    >
                      delete
                    </span>
                    <Link
                      to={{
                        pathname: `/technology/${t._id}`,
                        state: { technology: t },
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

export default TechnologyUpdate;
