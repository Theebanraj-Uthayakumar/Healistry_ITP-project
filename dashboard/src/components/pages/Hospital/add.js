import React from 'react'
import logo from "../../../Healistry.png"
import './add.css'
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


function Dashbord() {

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
    return (
        <div>
            <div className="app-container app-theme-white body-tabs-shadow fixed-sidebar fixed-header">
                <div className="app-header header-shadow">
                    <div className="app-header__logo">
                        {/* <div className="logo-src" /> */}
                        <img src={logo} style={{ width: 110 }} />
                        {/* <div style={{ fontFamily: "lyncer", fontSize: "10" }}>Healistry</div> */}
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
                            {/* <ul class="header-menu nav">
                      <li class="nav-item">
                          <a href="javascript:void(0);" class="nav-link">
                              <i class="nav-link-icon fa fa-database"> </i>
                              Statistics
                          </a>
                      </li>
                      <li class="btn-group nav-item">
                          <a href="javascript:void(0);" class="nav-link">
                              <i class="nav-link-icon fa fa-edit"></i>
                              Projects
                          </a>
                      </li>
                      <li class="dropdown nav-item">
                          <a href="javascript:void(0);" class="nav-link">
                              <i class="nav-link-icon fa fa-cog"></i>
                              Settings
                          </a>
                      </li>
                  </ul> */}
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
                                                    {/* <img
                                                        width={42}
                                                        className="rounded-circle"
                                                        src="assets/images/avatars/1.jpg"
                                                        alt
                                                    /> */}
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
                                            <div className="widget-heading">Abinaya.T</div>
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
                                        <a href="#">
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
                                        <a href="#" className="mm-active">
                                            <i className="metismenu-icon pe-7s-diamond" />
                                            Hospitals Details
                                            <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="Hospital_add" className="mm-active">
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
                                        <a href="#">
                                            <i className="metismenu-icon pe-7s-diamond" />
                                            Cleaning Company
                                            <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="cleaning_add">
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
                                                    <i className="metismenu-icon"></i> Ambulance | Edit,Delete
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#" >
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
                                                <a href="/Camping_update" >
                                                    <i className="metismenu-icon"></i> Camping | Edit,Delete
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
                                                    <i className="metismenu-icon"></i> Blood Bank | Edit,Delete
                                                </a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="#" >
                                            <i className="metismenu-icon pe-7s-diamond" />
                                            Laboratory Details
                                            <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                                        </a>
                                        <ul>
                                            <li>
                                                <a href="/Lab_Details_Add" >
                                                    <i className="metismenu-icon" />
                                                    Laboratory detail | Add
                                                </a>
                                            </li>
                                            <li>
                                                <a href="/Lab_Details_Update">
                                                    <i className="metismenu-icon"></i> Laboratory detail | Edit,Delete
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
                    {/* <Form> */}
                    <div className="app-main__outer">
                        <div className="app-main__inner">
                            <div className="app-page-title">
                                <div className="page-title-wrapper">
                                    <div className="page-title-heading">
                                        <div className="page-title-icon">
                                            <i className="pe-7s-car icon-gradient bg-mean-fruit"></i>
                                        </div>
                                        <div>
                                            Add Hospital Details
                                            <div className="page-title-subheading">
                                                This is an example dashboard created using build-in elements
                                                and components.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Add Form Here */}
                            <div className={classes.root}>
                                <Paper className={classes.paper}>
                                    <h2 className="Login_heading">Add Details</h2>
                                    <Form>
                                        <Form.Group as={Row} className="mb-3" controlId="" >
                                            <Form.Label column sm={3}>
                                                ADD Hospital Name
                                            </Form.Label>
                                            <Col sm={9}>
                                                <Form.Control type="text" placeholder="ADD Hospital Name" />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row} className="mb-3" controlId="">
                                            <Form.Label column sm={3}>
                                                Location Details
                                            </Form.Label>
                                            <Col sm={9}>
                                                <Form.Control type="number" placeholder="Location Details" />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row} className="mb-3" controlId="">
                                            <Form.Label column sm={3}>
                                                Contact Number
                                            </Form.Label>
                                            <Col sm={9}>
                                                <Form.Control type="number" placeholder="Contact Number" />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row} className="mb-3" controlId="">
                                            <Form.Label column sm={3}>
                                                Ward Details
                                            </Form.Label>
                                            <Col sm={9}>
                                                <Form.Control type="text" placeholder="Ward Details" />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row} className="mb-3" controlId="">
                                            <Form.Label column sm={3}>
                                                Staff Count
                                            </Form.Label>
                                            <Col sm={9}>
                                                <Form.Control type="text" placeholder="Staff Count" />
                                            </Col>
                                        </Form.Group>
                                        <Form.Group as={Row} className="mb-3" controlId="">
                                            <Form.Label column sm={3}>
                                                Image
                                            </Form.Label>
                                            <Col sm={9}>
                                                <Form.Control type="file" />
                                            </Col>
                                        </Form.Group>
                                        <center>
                                            <div className="button">
                                                <input type="button" className="Login-Button" value="Submit" className="btn btn-block app-sidebar__heading" />
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
                                        <ul className="nav">
                                            <li className="nav-item">
                                                <a href="javascript:void(0);" className="nav-link">
                                                    Footer Link 1
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="javascript:void(0);" className="nav-link">
                                                    Footer Link 2
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="app-footer-right">
                                        <ul className="nav">
                                            <li className="nav-item">
                                                <a href="javascript:void(0);" className="nav-link">
                                                    Footer Link 3
                                                </a>
                                            </li>
                                            <li className="nav-item">
                                                <a href="javascript:void(0);" className="nav-link">
                                                    <div className="badge badge-success mr-1 ml-0">
                                                        <small>NEW</small>
                                                    </div>
                                                    Footer Link 4
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div >
                </div>
            </div>
        </div>
    )
}

export default Dashbord