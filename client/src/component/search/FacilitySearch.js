import React, { useState, useEffect } from "react";
import { getFacilities } from "../../api/Facility";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  option: {
    fontSize: 15,
    "& > span": {
      marginRight: 10,
      fontSize: 18,
    },
  },
});
const FacilitySearch = () => {
  const [facilities, setFacilities] = useState([]);
  const [item, setItem] = useState([]);
  const [keyword, setKeyword] = useState("");
  const classes = useStyles();

  useEffect(() => {
    loadFecilities();
  }, []);

  const loadFecilities = () => {
    getFacilities().then((t) => {
      setFacilities(t.data);
      console.log(t);
    });
  };

  const handleSearchChange = (t) => {
    if (!t) {
      setItem([]);
    } else {
      let matching = facilities.filter((fecility) => {
        const regex = new RegExp(`${t}`);
        return fecility.fecilityName.match(regex);
      });

      setItem(matching);
    }
  };

  const searched = (keyword) => (s) =>
    s.machineName.toLowerCase().includes(keyword);
  return (
    <div>
      <input
        type="search"
        placeholder="search"
        onChange={(e) => handleSearchChange(e.target.value)}
      />

      {item &&
        item.map((i, index) => {
          return (
            <Link to={{ pathname: `/technology/${i._id}`, state: { t: i } }}>
              <option key={index}>Fecility Name: {i.fecilityName}</option>
            </Link>
          );
        })}
    </div>
  );
};

export default FacilitySearch;
