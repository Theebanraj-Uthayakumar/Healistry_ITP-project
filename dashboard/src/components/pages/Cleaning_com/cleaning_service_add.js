import React, { useState, useEffect } from "react";
import axios from 'axios';
import logo from "../../../Healistry.png"
import Form from 'react-bootstrap/Form'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import RadioGroup from '@material-ui/core/RadioGroup';
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/esm/Col';
// import Button from '@restart/ui/esm/Button';
import Row from 'react-bootstrap/esm/Row';
// import Form from 'react-bootstrap/Form';
import swal from 'sweetalert';


function Cleaning_service_add() {

    const useStyles = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
            margin: 50
        },
        paper: {
            padding: theme.spacing(5),
            margin: 'auto',
            maxWidth: 1000,
        },
    }));
    const classes = useStyles();
    const [name, setName] = useState('')
    const [location, setLocation] = useState('')
    const [noe, setNoe] = useState('')
    const [cnumber, setCnumber] = useState('')
    const [since, setSince] = useState('')
    const [image, setImage] = useState('')
    const [description, setDescription] = useState('')
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);

    let [errors_dname, seterrors_dname] = useState('')
    let [errors_location, seterrors_location] = useState('')
    let [errors_noe, seterrors_noe] = useState('')
    let [errors_since, seterrors_since] = useState('')
    let [errors_description, seterrors_description] = useState('')
    let [errors_cnumber, seterrors_cnumber] = useState('')

    function CreateCleaningCompany() {
        console.log("working");
        let item = { name, location, noe, cnumber, since, image, description }
        console.log(item);

        setError(null);
        setLoading(true);

        let errors = {};

        //Form Validation
        if (!name.trim()) {
            errors.name = 'Company Name field required';
            seterrors_dname(errors.name)
        }
        if (!location.trim()) {
            errors.location = 'Location field required';
            seterrors_location(errors.location)
        }
        if (!noe.trim()) {
            errors.noe = 'Number of Employee field required';
            seterrors_noe(errors.noe)
        }
        if (!since.trim()) {
            errors.since = 'Since field required';
            seterrors_since(errors.since)
        }
        if (!description.trim()) {
            errors.description = 'Description field required';
            seterrors_description(errors.description)
        }
        if (!cnumber.trim()) {
            errors.cnumber = 'Contact Number field required';
            seterrors_cnumber(errors.cnumber)
        }

        if (name === "" || location === "" || noe === "" || since === "" || description === "") {
            setLoading(false);
        }
        else {
            axios.post("http://localhost:5000/cleaning",
                {
                    CName: name,
                    Location: location,
                    NOE: noe,
                    CNumber: cnumber,
                    Since: since,
                    // Image: image,
                    Description: description,
                }
            ).then(response => {
                setLoading(false);
                alert("Your data has been successfully added...");
                window.location.reload();
            }).catch(error => {
                setLoading(false);
                alert("Sorry, Something Error...");
            })
        }
    }

    return (
        <div>
            <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
                <div className="app-header header-shadow">
                    <div className="app-header__logo">
                        <img src={logo} style={{ width: 110 }} />
                        <div className="header__pane ml-auto">
                            <div>
                                <button
                                    type="button"
                                    className="hamburger close-sidebar-btn hamburger--elastic"
                                    data-class="closed-sidebar">
                                    <span className="hamburger-box">
                                        <span className="hamburger-inner" />
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="app-header__mobile-menu">
                        <div>
                            <button
                                type="button"
                                className="hamburger hamburger--elastic mobile-toggle-nav">
                                <span className="hamburger-box">
                                    <span className="hamburger-inner" />
                                </span>
                            </button>
                        </div>
                    </div>
                    <div className="app-header__menu">
                        <span>
                            <button
                                type="button"
                                className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav"
                            >
                                <span className="btn-icon-wrapper">
                                    <i className="fa fa-ellipsis-v fa-w-6" />
                                </span>
                            </button>
                        </span>
                    </div>
                    <div className="app-header__content">
                        <div className="app-header-left">
                            <div className="search-wrapper">
                                <div className="input-holder">
                                    <input
                                        type="text"
                                        className="search-input"
                                        placeholder="Type to search"
                                    />
                                    <button className="search-icon">
                                        <span />
                                    </button>
                                </div>
                                <button className="close" />
                            </div>
                        </div>
                        <div className="app-header-right">
                            <div className="header-btn-lg pr-0">
                                <div className="widget-content p-0">
                                    <div className="widget-content-wrapper">
                                        <div className="widget-content-left">
                                            <div className="btn-group">
                                                <a
                                                    data-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                    className="p-0 btn"
                                                >
                                                    <i className="fa fa-angle-down ml-2 opacity-8" />
                                                </a>
                                                <div
                                                    tabIndex={-1}
                                                    role="menu"
                                                    aria-hidden="true"
                                                    className="dropdown-menu dropdown-menu-right"
                                                >
                                                    <button
                                                        type="button"
                                                        tabIndex={0}
                                                        className="dropdown-item"
                                                    >
                                                        User Account
                                                    </button>
                                                    <button
                                                        type="button"
                                                        tabIndex={0}
                                                        className="dropdown-item"
                                                    >
                                                        Settings
                                                    </button>
                                                    <h6 tabIndex={-1} className="dropdown-header">
                                                        Header
                                                    </h6>
                                                    <button
                                                        type="button"
                                                        tabIndex={0}
                                                        className="dropdown-item"
                                                    >
                                                        Actions
                                                    </button>
                                                    <div tabIndex={-1} className="dropdown-divider" />
                                                    <button
                                                        type="button"
                                                        tabIndex={0}
                                                        className="dropdown-item"
                                                    >
                                                        Dividers
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="widget-content-left  ml-3 header-user-info">
                                            <div className="widget-heading">Theebanraj U.</div>
                                            <div className="widget-subheading">Full-Stack Developer</div>
                                        </div>
                                        <div className="widget-content-right header-user-info ml-3">
                                            <button
                                                type="button"
                                                className="btn-shadow p-1 btn btn-primary btn-sm show-toastr-example"
                                            >
                                                <i className="fa text-white fa-calendar pr-1 pl-1" />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="app-main">
                    <div className="app-sidebar sidebar-shadow">
                        <div className="app-header__logo">
                            <div className="logo-src" />
                            <div className="header__pane ml-auto">
                                <div>
                                    <button
                                        type="button"
                                        className="hamburger close-sidebar-btn hamburger--elastic"
                                        data-class="closed-sidebar"
                                    >
                                        <span className="hamburger-box">
                                            <span className="hamburger-inner" />
                                        </span>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div className="app-header__mobile-menu">
                            <div>
                                <button
                                    type="button"
                                    className="hamburger hamburger--elastic mobile-toggle-nav"
                                >
                                    <span className="hamburger-box">
                                        <span className="hamburger-inner" />
                                    </span>
                                </button>
                            </div>
                        </div>
                        <div className="app-header__menu">
                            <span>
                                <button
                                    type="button"
                                    className="btn-icon btn-icon-only btn btn-primary btn-sm mobile-toggle-header-nav"
                                >
                                    <span className="btn-icon-wrapper">
                                        <i className="fa fa-ellipsis-v fa-w-6" />
                                    </span>
                                </button>
                            </span>
                        </div>
                        <div className="scrollbar-sidebar">
                            <div className="app-sidebar__inner">
                                <ul className="vertical-nav-menu">
                                    <li className="app-sidebar__heading">Dashboards</li>
                                    <li>
                                        <a href="/">
                                            <i className="metismenu-icon pe-7s-rocket" />
                                            Dashboard
                                        </a>
                                    </li>
                                    <li className="app-sidebar__heading">Components</li>
                                    <li>
                                        <a href="#">
                                            <i className="metismenu-icon pe-7s-diamond" />
                                            Doctors' Details
                                            <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="/Doctors_Add">
                                                    <i className="metismenu-icon" />
                                                    Doctors | Add
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/Doctors_update">
                                                    <i className="metismenu-icon"></i> Doctors | Edit,Delete
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="metismenu-icon pe-7s-diamond" />
                                            Hospitals Details
                                            <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="Hospital_add">
                                                    <i className="metismenu-icon" />
                                                    Hospitals | Add
                                                </a>
                                            </li>
                                            <li>
                                                <a href="Hospital_update">
                                                    <i className="metismenu-icon"></i> Hospitals | Edit,Delete
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#" className="mm-active">
                                            <i className="metismenu-icon pe-7s-diamond" />
                                            Cleaning Company
                                            <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="cleaning_add" className="mm-active">
                                                    <i className="metismenu-icon" />
                                                    Cleaning Company | Add
                                                </a>
                                            </li>
                                            <li>
                                                <a href="cleaning_update">
                                                    <i className="metismenu-icon"></i> Cleaning Co... | Update
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="metismenu-icon pe-7s-diamond" />
                                            Ambulance Details
                                            <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="/Ambulance_Add">
                                                    <i className="metismenu-icon" />
                                                    Ambulance | Add
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/Ambulance_update">
                                                    <i className="metismenu-icon"></i> Ambulance |
                                                    Edit,Delete
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="metismenu-icon pe-7s-diamond" />
                                            Camping Details
                                            <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="/Camping_Add">
                                                    <i className="metismenu-icon" />
                                                    Camping | Add
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/Camping_update">
                                                    <i className="metismenu-icon"></i> Camping |
                                                    Edit,Delete
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="metismenu-icon pe-7s-diamond" />
                                            Blood Bank Details
                                            <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="/Blood_bank_add">
                                                    <i className="metismenu-icon" />
                                                    Blood Bank | Add
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/blood_bank_update">
                                                    <i className="metismenu-icon"></i> Blood Bank |
                                                    Edit,Delete
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="metismenu-icon pe-7s-diamond" />
                                            Laboratory Details
                                            <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="/Lab_Details_Add">
                                                    <i className="metismenu-icon" />
                                                    Laboratory detail | Add
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/Lab_Details_Update">
                                                    <i className="metismenu-icon"></i> Laboratory detail |
                                                    Edit,Delete
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="metismenu-icon pe-7s-diamond" />
                                            Facility Details
                                            <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="/facility/add">
                                                    <i className="metismenu-icon" />
                                                    Facility | Add
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/facility/update">
                                                    <i className="metismenu-icon"></i> Facility detail |
                                                    Edit,Delete
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="metismenu-icon pe-7s-diamond" />
                                            Technology Details
                                            <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="/technology/add">
                                                    <i className="metismenu-icon" />
                                                    Technology | Add
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/technology/update">
                                                    <i className="metismenu-icon"></i> Technology detail |
                                                    Edit,Delete
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="metismenu-icon pe-7s-diamond" />
                                            Pharmacy Details
                                            <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="/Pharmacyadd">
                                                    <i className="metismenu-icon" />
                                                    Pharmacy detail | Add
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/Pharmacy_update">
                                                    <i className="metismenu-icon"></i> Pharmacy detail |
                                                    Edit,Delete
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="metismenu-icon pe-7s-diamond" />
                                            Disease Details
                                            <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="/Disease_add">
                                                    <i className="metismenu-icon" />
                                                    Disease Details | Add
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/Lab_Details_Update">
                                                    <i className="metismenu-icon"></i> Disease Details |
                                                    Edit,Delete
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="metismenu-icon pe-7s-diamond" />
                                            Operation History Details
                                            <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="/Operationadd">
                                                    <i className="metismenu-icon" />
                                                    Operation | Add
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/Operationupdate">
                                                    <i className="metismenu-icon"></i> Operation | Update
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#">
                                            <i className="metismenu-icon pe-7s-display2" />
                                            Tables
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="app-main__outer">
                        <div className="app-main__inner">
                            <div className="app-page-title">
                                <div className="page-title-wrapper">
                                    <div className="page-title-heading">
                                        <div className="page-title-icon">
                                            <i className="pe-7s-car icon-gradient bg-mean-fruit"></i>
                                        </div>
                                        <div>
                                            Add Cleaning Company Details
                                            <div className="page-title-subheading">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis risus massa, tempor a imperdiet vel, faucibus sit amet arcu.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Add Form Here */}
                            <div className={classes.root}>
                                <Paper className={classes.paper}>
                                    <Form>
                                        <Form.Group as={Row} className="mb-3" controlId="" >
                                            <Form.Label column sm={3}>
                                                Company Name
                                            </Form.Label>
                                            <Col sm={9}>
                                                <Form.Control type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Company Name" />
                                                {errors_dname && <span style={{ color: "red" }} className="errors">{errors_dname}</span>}
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row} className="mb-3" controlId="">
                                            <Form.Label column sm={3}>
                                                Location
                                            </Form.Label>
                                            <Col sm={9}>
                                                <Form.Control type="text" value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Location" />
                                                {errors_location && <span style={{ color: "red" }} className="errors">{errors_location}</span>}
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row} className="mb-3" controlId="">
                                            <Form.Label column sm={3}>
                                                Number of Employees
                                            </Form.Label>
                                            <Col sm={9}>
                                                <Form.Control type="number" value={noe} onChange={(e) => setNoe(e.target.value)} placeholder="Number of Employees" />
                                                {errors_noe && <span style={{ color: "red" }} className="errors">{errors_noe}</span>}
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row} className="mb-3" controlId="">
                                            <Form.Label column sm={3}>
                                                Contact Number
                                            </Form.Label>
                                            <Col sm={9}>
                                                <Form.Control type="number" value={cnumber} onChange={(e) => setCnumber(e.target.value)} placeholder="Contact Number" />
                                                {errors_cnumber && <span style={{ color: "red" }} className="errors">{errors_cnumber}</span>}
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row} className="mb-3" controlId="">
                                            <Form.Label column sm={3}>
                                                Since Year
                                            </Form.Label>
                                            <Col sm={9}>
                                                <Form.Control type="number" value={since} onChange={(e) => setSince(e.target.value)} placeholder="Since Year" />
                                                {errors_since && <span style={{ color: "red" }} className="errors">{errors_since}</span>}
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row} className="mb-3" controlId="">
                                            <Form.Label column sm={3}>
                                                Description
                                            </Form.Label>
                                            <Col sm={9}>
                                                <Form.Control type="text" value={description} onChange={(e) => setDescription(e.target.value)} placeholder="Description" />
                                                {errors_description && <span style={{ color: "red" }} className="errors">{errors_description}</span>}
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row} className="mb-3" controlId="">
                                            <Form.Label column sm={3}>
                                                Image
                                            </Form.Label>
                                            <Col sm={9}>
                                                <Form.Control type="file" value={image} onChange={(e) => setName(e.target.value)} />
                                            </Col>
                                        </Form.Group>
                                        <center>
                                            <div className="button">
                                                <input type="button" className="Login-Button" onClick={CreateCleaningCompany} value={loading ? "Loading... Please Wait!" : "SUBMIT"} className="btn btn-block app-sidebar__heading" />
                                            </div>
                                        </center>
                                    </Form>
                                </Paper>
                            </div>
                        </div >
                        <div className="app-wrapper-footer">
                            <div className="app-footer">
                                <div className="app-footer__inner">
                                    <div className="app-footer-left">
                                        {/* <ul className="nav">
                      <li className="nav-item">
                        <a href="javascript:void(0);" className="nav-link">
                          Copyright 2019-2021 Healistry.io. All rights reserved
                        </a>
                      </li>
                    </ul> */}
                                    </div>
                                    <div className="app-footer-right">
                                        <ul className="nav">
                                            <li className="nav-item">
                                                <a href="javascript:void(0);" className="nav-link">
                                                    Copyright 2019-2021 Healistry.io. All rights reserved
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </div >
            </div >

        </div >
    )
}
export default Cleaning_service_add