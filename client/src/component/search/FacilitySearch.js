import React, { useState, useEffect } from "react";
import { getFacilities } from "../../api/Facility";
import { Link } from "react-router-dom";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";
import Col from "react-bootstrap/esm/Col";
import Form from "react-bootstrap/Form";
import Button from "@restart/ui/esm/Button";
import Row from "react-bootstrap/esm/Row";
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
      let matching = facilities.filter((facility) => {
        const regex = new RegExp(`${t}`);
        return facility.facilityName.match(regex);
      });

      setItem(matching);
    }
  };

  // const searched = (keyword) => (s) =>
  //   s.facilityName.toLowerCase().includes(keyword);
  return (
    <>
      <div>
        <Form>
          <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
            <Form.Label column sm={2}>
              Search
            </Form.Label>
            <Col sm={10}>
              <Form.Control
                type="search"
                placeholder="facilities"
                onChange={(e) => handleSearchChange(e.target.value)}
              />
            </Col>
            {item &&
              item.map((i, index) => {
                return (
                  <Col>
                    <Link
                      style={{ textDecoration: "none" }}
                      to={{ pathname: `/facility/${i._id}`, state: { t: i } }}
                    >
                      <option key={index}>{i.facilityName}</option>
                    </Link>
                  </Col>
                );
              })}
          </Form.Group>
        </Form>
      </div>
    </>
  );
};

export default FacilitySearch;
