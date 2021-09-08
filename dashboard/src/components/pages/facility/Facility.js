import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getFacilities, deleteFacility } from "../../../api/facility";
import Footer from "../../nav/Footer";
import Header from "../../nav/Header";
import SideNav from "../../nav/SideNav";
import Search from "../../search/Search";
import { makeStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

const Facility = () => {
  const classes = useStyles();

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
              <div className={classes.root}>
                {facilities.filter(searched(keyword)).map((f) => {
                  return (
                    // <div key={f._id}>
                    //   {f.facilityName}

                    //   <span
                    //     onClick={() => handleRemove(f._id)}
                    //     className="btn btn-sm float-right"
                    //   >
                    //     delete
                    //   </span>
                    //   <Link
                    //     to={{
                    //       pathname: `/facility/${f._id}`,
                    //       state: { facility: f },
                    //     }}
                    //     className="btn btn-sm float-right"
                    //   >
                    //     edit
                    //   </Link>
                    // </div>

                    <div>
                      <br />

                      <Accordion key={f._id}>
                        <AccordionSummary
                          expandIcon={<ExpandMoreIcon />}
                          aria-controls="panel1a-content"
                          id="panel1a-header"
                        >
                          <Typography className={classes.heading}>
                            {f.facilityName}
                          </Typography>
                        </AccordionSummary>
                        <AccordionDetails>
                          <table>
                            <tr>
                              <td>
                                <img src={f.image[0].url} />
                              </td>
                            </tr>
                            <tr>
                              <th>Facility Name </th>
                              <td>{f.facilityName}</td>
                            </tr>
                            <tr>
                              <th>Facility ID </th>
                              <td>{f.facilityId}</td>
                            </tr>
                            <tr>
                              <th>Purpose </th>
                              <td>{f.purpose}</td>
                            </tr>
                            <tr>
                              <th>Price </th>
                              <td>{f.price}</td>
                            </tr>
                            <tr>
                              <th>Feature </th>
                              <td>{f.features}</td>
                            </tr>
                            <tr>
                              <th>Created At </th>
                              <td> - 26th Aug 2021</td>
                            </tr>
                            <tr>
                              <td>
                                <Link
                                  to={{
                                    pathname: `/facility/${f._id}`,
                                    state: { facility: f },
                                  }}
                                  variant="outlined"
                                  color="primary"
                                  style={{ textDecoration: "none" }}
                                >
                                  <Button variant="outlined" color="primary">
                                    Edit
                                  </Button>
                                </Link>
                              </td>
                              <td>
                                <Link
                                  onClick={() => handleRemove(f._id)}
                                  variant="outlined"
                                  color="secondary"
                                  style={{ textDecoration: "none" }}
                                >
                                  <Button variant="outlined" color="secondary">
                                    Delete
                                  </Button>
                                </Link>
                              </td>
                            </tr>
                          </table>
                        </AccordionDetails>
                      </Accordion>
                      <br />
                    </div>
                  );
                })}
              </div>
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
