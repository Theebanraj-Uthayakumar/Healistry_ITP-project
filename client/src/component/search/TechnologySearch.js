import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { getTechnologies } from "../../api/Technology";
import { makeStyles } from "@material-ui/core/styles";
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/Form';
import Button from '@restart/ui/esm/Button';
import Row from 'react-bootstrap/esm/Row';

const useStyles = makeStyles({
  option: {
    fontSize: 15,
    "& > span": {
      marginRight: 10,
      fontSize: 18,
    },
  },
});
const TechnologySearch = () => {
  const [technologies, setTechnologies] = useState([]);
  const [item, setItem] = useState([]);
  const [keyword, setKeyword] = useState("");
  const classes = useStyles();

  useEffect(() => {
    loadTechnologies();
  }, []);

  const loadTechnologies = () => {
    getTechnologies().then((t) => {
      setTechnologies(t.data);
      console.log(t);
    });
  };

  const handleSearchChange = (t) => {
    if (!t) {
      setItem([]);
    } else {
      let matching = technologies.filter((technology) => {
        const regex = new RegExp(`${t}`);
        return technology.machineName.match(regex);
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
              <option key={index}>machine Name: {i.machineName}</option>
            </Link>
          );
        })}
    </div>
  );
};

export default TechnologySearch;
