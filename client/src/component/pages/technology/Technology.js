import React, { useState, useEffect } from "react";
import {
  getTechnologies,
  getTechnologiesByPagination,
  technologyCount,
} from "../../../api/Technology";
import Pagination from "@material-ui/lab/Pagination";
import TechnologyCard from "../../cards/TechnologyCard";
import TechnologySearch from "../../search/TechnologySearch";

const Technology = () => {
  const [technologies, setTechnologies] = useState([]);

  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [technologiesCount, setTechnologiesCount] = useState(0);

  useEffect(() => {
    loadTechnologies();
  }, [page]);

  useEffect(() => {
    technologyCount().then((res) => setTechnologiesCount(res.data));
  }, []);

  const loadTechnologies = () => {
    console.log("innnnnnn");

    setLoading(true);
    getTechnologiesByPagination("createdAt", "desc", page).then((t) => {
      setTechnologies(t.data);
      console.log(t);
      setLoading(false);
    });
  };

  // useEffect(
  //   () =>
  //     ,
  //   [handleSearchChange]
  // );

  return (
    <div className="shop-area gray-bg pt-10 pb-100">
      <div className="custom-container-two">
        <div>
          <TechnologySearch />
        </div>
        {technologies.map((t) => {
          return (
            <div key={t.machineID}>
              <TechnologyCard t={t} />
            </div>
          );
        })}
        <div className="pagination1">
          <Pagination
            page={page}
            onChange={(event, value) => setPage(value)}
            count={Math.ceil(technologiesCount / 3)}
            color="primary"
          />
        </div>
      </div>
    </div>
  );
};

export default Technology;
