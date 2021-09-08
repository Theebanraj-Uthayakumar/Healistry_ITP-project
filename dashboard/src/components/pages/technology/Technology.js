import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getTechnologies, deleteTechnology } from "../../../api/technology";
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

const TechnologyUpdate = () => {
  const classes = useStyles();

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
                  // <div key={t._id}>
                  //   {t.machineName}

                  //   <span
                  //     onClick={() => handleRemove(t._id)}
                  //     className="btn btn-sm float-right"
                  //   >
                  //     delete
                  //   </span>
                  //   <Link
                  //     to={{
                  //       pathname: `/technology/${t._id}`,
                  //       state: { technology: t },
                  //     }}
                  //     className="btn btn-sm float-right"
                  //   >
                  //     edit
                  //   </Link>
                  // </div>

                  <div>
                    <br />
                    <Accordion key={t._id}>
                      <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1a-content"
                        id="panel1a-header"
                      >
                        <Typography className={classes.heading}>
                          {t.machineName}
                        </Typography>
                      </AccordionSummary>
                      <AccordionDetails>
                        <table>
                          <tr>
                            <td>
                              <img src={t.image[0].url} />
                            </td>
                          </tr>
                          <tr>
                            <th>Machine Name </th>
                            <td> {t.machineName}</td>
                          </tr>
                          <tr>
                            <th>Machine ID </th>
                            <td>{t.machineId}</td>
                          </tr>
                          <tr>
                            <th>Purpose </th>
                            <td>{t.purpose}</td>
                          </tr>
                          <tr>
                            <th>Price </th>
                            <td>{t.price}</td>
                          </tr>
                          <tr>
                            <th>Precation </th>
                            <td>{t.precation}</td>
                          </tr>
                          <tr>
                            <th>Procedure </th>
                            <td>{t.procedure}</td>
                          </tr>
                          <tr>
                            <th>Estimated Time </th>
                            <td>{t.eta}</td>
                          </tr>
                          <tr>
                            <th>Created At </th>
                            <td> - 26th Aug 2021</td>
                          </tr>
                          <tr>
                            <td>
                              <Link
                                to={{
                                  pathname: `/technology/${t._id}`,
                                  state: { technology: t },
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
                                onClick={() => handleRemove(t._id)}
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
