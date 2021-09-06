import React, { useEffect, useState } from "react";
import {
  getFacilities,
  getFacilitiesByPagination,
  facilityCount,
} from "../../../api/Facility";
import FacilitySearch from "../../search/FacilitySearch";
import { makeStyles } from "@material-ui/core/styles";
import Pagination from "@material-ui/lab/Pagination";
import FacilityCard from "../../cards/FacilityCard";
const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      marginTop: theme.spacing(2),
    },
  },
}));

const Facility = () => {
  const classes = useStyles();
  const [facilities, setFacilities] = useState([]);
  const [keyword, setKeyword] = useState("");
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [facilitiesCount, setFacilitiesCount] = useState(0);

  useEffect(() => {
    loadFacilities();
  }, [page]);

  useEffect(() => {
    facilityCount().then((res) => setFacilitiesCount(res.data));
  }, []);

  const loadFacilities = () => {
    setLoading(true);
    getFacilitiesByPagination("createdAt", "desc", page).then((f) => {
      setFacilities(f.data);
      console.log(f);
      setLoading(false);
    });
  };

  const searched = (keyword) => (s) =>
    s.facilityName.toLowerCase().includes(keyword);

  return (
    <div>
      <div>
        <FacilitySearch />
      </div>
      {facilities.map((t) => {
        return (
          <div key={t.facilityId}>
            <FacilityCard t={t} />
          </div>
        );
      })}
      <div>
        <Pagination
          page={page}
          onChange={(event, value) => setPage(value)}
          count={Math.ceil(facilitiesCount / 3)}
          color="primary"
        />
      </div>
    </div>
  );
};

export default Facility;
