import React, { useState, useEffect } from "react";
import Container from '@material-ui/core/Container';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';
import Col from 'react-bootstrap/esm/Col';
import Form from 'react-bootstrap/Form';
import Button from '@restart/ui/esm/Button';
import Row from 'react-bootstrap/esm/Row';
import Pagination from 'react-bootstrap/Pagination'
import axios from "axios";
const useStyles = makeStyles((theme) => ({
    link: {
        display: 'flex',
    },
    icon: {
        marginRight: theme.spacing(0.5),
        width: 20,
        height: 20,
    },
}));

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

function Ambulance() {
    const classes = useStyles();
    const [searchTerm, setSearchTerm] = useState("");
    const [ambulance, setAmbulance] = useState([]);

    const getRequest = () => {
        axios
            .get('http://localhost:5000/ambulance')
            .then(response => {
                setAmbulance(response.data);

            });
    }

    useEffect(() => {
        getRequest()
    }, [ambulance]);

    return (
        <div>
            <Container>
                <main>
                    
                    <div></div>
                    <div className="shop-area gray-bg pt-10 pb-100">
                        <div className="custom-container-two">
                            <Breadcrumbs aria-label="breadcrumb" className="Breadcrumbs">
                                <Link color="inherit" href="/" onClick={handleClick} className={classes.link}>
                                    <HomeIcon className={classes.icon} />
                                    Home
                                </Link>
                                <Typography color="textPrimary" className={classes.link}>
                                    <GrainIcon className={classes.icon} />
                                    Ambulance Deatails
                                </Typography>
                            </Breadcrumbs>
                           
                            <div>
                            <form >
                                  
                                  <Form.Group as={Row} className="mb-3"controlId="" >
                                  <Col sm={2} className="ambform">
                                          <Form.Control type="text" onChange={(e) => { setSearchTerm(e.target.value) }} />
                                          </Col>
                                      <Col sm={1}>
                                      <Button className="searchbtn">Search</Button>
                                       </Col>
                                   </Form.Group>
                                 
                                  </form>
                            </div>
                                
                            <div className="row justify-content-center"> 
                               

                                <div className="col-xl-9 col-lg-8">
                                {ambulance.filter((val) => {
                                        if (searchTerm == "") {
                                            return val;
                                        } else if (val.organizationName.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())) {
                                            return val;
                                        }
                                    }).map((item) => ( 
                                <div className="card mb-3 melri_card" style={{margin: '3%'}}>
                            <div className="row no-gutters" width="100%">
                                <div className="col-md-4">
                                    <img src={item.ambImg} className="ambulance" alt="..." />
                                </div>
                                <div className="col-md-8 text">
                                    <div className="card-body">
                                    
                                        <p className="ambtitle">{item.organizationName}</p>
                                         
                                       <table  className="ambtable">
                                           <tr style={{padding:'25px'}}>
                                               <td style={{paddingLeft:'10px', paddingTop:'10px;'}}>Contact Number</td>
                                               <td style={{paddingLeft:'15px', paddingTop:'10px;'}}>{item.aContact}</td>
                                           </tr >
                                           <tr style={{padding:'25px'}}>
                                               <td style={{paddingLeft:'10px', paddingTop:'10px;'}}>Address</td>
                                               <td style={{paddingLeft:'15px', paddingTop:'10px;'}}>{item.Location}</td>
                                           </tr >
                                           <tr style={{padding:'25px'}}>
                                               <td style={{paddingLeft:'10px', paddingTop:'10px;'}}>No of ambulance</td>
                                               <td style={{paddingLeft:'15px', paddingTop:'10px;'}}> {item.noOfAmbulance}</td>
                                           </tr>
                                           <tr style={{padding:'25px'}}>
                                               <td style={{paddingLeft:'10px', paddingTop:'10px;'}}>Registered since</td>
                                               <td style={{paddingLeft:'15px', paddingTop:'10px;'}}>  {item.regSince}</td>
                                           </tr>
                                           <tr style={{padding:'25px'}}>
                                               <td style={{paddingLeft:'10px', paddingTop:'10px;'}}>Duty hours</td>
                                               <td style={{paddingLeft:'15px', paddingTop:'10px;'}}> {item.dutyHrs}</td>
                                           </tr>
                                           <tr style={{padding:'25px'}}>
                                               <td style={{paddingLeft:'10px', paddingTop:'10px;'}}>Duty Hospitals</td>
                                               <td style={{paddingLeft:'15px', paddingTop:'10px;'}}> {item.workingHos}</td>
                                           </tr>

                                       </table>
                                        
                                    </div>
                                </div>
                            </div>
                        </div>
                        ))}                                        
                        
                        <div className="pagination-wrap" style={{width:'90%', margin:'auto'}}>
                                        <ul>
                                            <li className="prev">
                                                <a href="#">
                                                    <i className="fas fa-long-arrow-alt-left" /> Prev
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">1</a>
                                            </li>
                                            <li className="active">
                                                <a href="#">2</a>
                                            </li>
                                            <li>
                                                <a href="#">3</a>
                                            </li>
                                            <li>
                                                <a href="#">4</a>
                                            </li>
                                            <li>
                                                <a href="#">...</a>
                                            </li>
                                            <li>
                                                <a href="#">10</a>
                                            </li>
                                            <li className="next">
                                                <a href="#">
                                                    Next <i className="fas fa-long-arrow-alt-right" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    

                                </div>
                            </div>
                        </div>
                    </div>
                    {/* shop-area-end */}
                </main>
            </Container>
        </div>
    )
}

export default Ambulance
