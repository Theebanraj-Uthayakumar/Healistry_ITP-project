import React from 'react'
import logo from "../../../Healistry.png"
import Table from 'react-bootstrap/Table'
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import Button from '@material-ui/core/Button';


const use_style = makeStyles((theme) => ({
    root: {
        width: '100%',
    },
    heading: {
        fontSize: theme.typography.pxToRem(15),
        fontWeight: theme.typography.fontWeightRegular,
    },
}));

function cleaning_update() {
    const classes = use_style();

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
                                        <a href="http://localhost:3001/">
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
                                                <a href="#">
                                                    <i className="metismenu-icon" />
                                                    Hospitals | Add
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">
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
                                                <a href="cleaning_add">
                                                    <i className="metismenu-icon" />
                                                    Cleaning Company | Add
                                                </a>
                                            </li>
                                            <li>
                                                <a href="cleaning_update" className="mm-active">
                                                    <i className="metismenu-icon"></i> Cleaning Co... | Update
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
                                            Doctors Details Edit and Delete
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
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel1a-content"
                                        id="panel1a-header"
                                    >
                                        <Typography className={classes.heading}>SLIIT</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <table>
                                            <tr>
                                                <th>Company Name </th>
                                                <td> - SLIIT</td>
                                            </tr>
                                            <tr>
                                                <th>Location </th>
                                                <td> - Kandy Road, Malebe, Colombo, Sri Lanka.</td>
                                            </tr>
                                            <tr>
                                                <th>Number of Employees </th>
                                                <td> - 112</td>
                                            </tr>
                                            <tr>
                                                <th>Contact Numeber </th>
                                                <td> - 0212229895</td>
                                            </tr>
                                            <tr>
                                                <th>Since </th>
                                                <td> - 1999</td>
                                            </tr>
                                            <tr>
                                                <th>Image </th>
                                                <td> - image.jpg</td>
                                            </tr>
                                            <tr>
                                                <th>Description </th>
                                                <td> - Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum nibh quis ipsum dictum, vel semper massa ultricies. Curabitur ut finibus tortor. Aliquam nulla sem, sodales at massa ac, iaculis placerat leo. </td>
                                            </tr>
                                            <tr>
                                                <th>Likes </th>
                                                <td> - 112</td>
                                            </tr>
                                            <tr>
                                                <th>Created At </th>
                                                <td> - 26th Aug 2021</td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <Button variant="outlined" color="primary">
                                                        Edit
                                                    </Button>
                                                </td>
                                                <td>
                                                    <Button variant="outlined" color="secondary">
                                                        Delete
                                                    </Button>
                                                </td>
                                            </tr>
                                        </table>
                                    </AccordionDetails>
                                </Accordion>
                                <Accordion>
                                    <AccordionSummary
                                        expandIcon={<ExpandMoreIcon />}
                                        aria-controls="panel2a-content"
                                        id="panel2a-header"
                                    >
                                        <Typography className={classes.heading}>IIT</Typography>
                                    </AccordionSummary>
                                    <AccordionDetails>
                                        <AccordionDetails>
                                            <table>
                                                <tr>
                                                    <th>Company Name </th>
                                                    <td> - SLIIT</td>
                                                </tr>
                                                <tr>
                                                    <th>Location </th>
                                                    <td> - Kandy Road, Malebe, Colombo, Sri Lanka.</td>
                                                </tr>
                                                <tr>
                                                    <th>Number of Employees </th>
                                                    <td> - 112</td>
                                                </tr>
                                                <tr>
                                                    <th>Contact Numeber </th>
                                                    <td> - 0212229895</td>
                                                </tr>
                                                <tr>
                                                    <th>Since </th>
                                                    <td> - 1999</td>
                                                </tr>
                                                <tr>
                                                    <th>Image </th>
                                                    <td> - image.jpg</td>
                                                </tr>
                                                <tr>
                                                    <th>Description </th>
                                                    <td> - Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dictum nibh quis ipsum dictum, vel semper massa ultricies. Curabitur ut finibus tortor. Aliquam nulla sem, sodales at massa ac, iaculis placerat leo. </td>
                                                </tr>
                                                <tr>
                                                    <th>Likes </th>
                                                    <td> - 112</td>
                                                </tr>
                                                <tr>
                                                    <th>Created At </th>
                                                    <td> - 26th Aug 2021</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <Button variant="outlined" color="primary">
                                                            Edit
                                                        </Button>
                                                    </td>
                                                    <td>
                                                        <Button variant="outlined" color="secondary">
                                                            Delete
                                                        </Button>
                                                    </td>
                                                </tr>
                                            </table>
                                        </AccordionDetails>
                                    </AccordionDetails>
                                </Accordion>
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
                </div >
            </div >

        </div >
    )
}

export default cleaning_update