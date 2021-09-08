import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Col from 'react-bootstrap/esm/Col';
// import Button from '@restart/ui/esm/Button';
import Row from 'react-bootstrap/esm/Row';
import Form from 'react-bootstrap/Form';
import logo from "../../../Healistry.png"

function Blood_bank_add() {
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
                                        <div className="widget-heading">Thuvaraka T.</div>
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
                                    <a href="#">
                                        <i className="metismenu-icon pe-7s-diamond" />
                                       Camping Details
                                        <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="/Camping_add">
                                                <i className="metismenu-icon" />
                                                Camping | Add
                                            </a>
                                        </li>
                                        <li>
                                            <a href="/Camping_update">
                                                <i className="metismenu-icon"></i> Camping | Edit,Delete
                                            </a>
                                        </li>
                                    </ul>
                                </li>
                                <li>
                                    <a href="#" className="mm-active">
                                        <i className="metismenu-icon pe-7s-diamond" />
                                       Blood Bank Details
                                        <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                                    </a>
                                    <ul>
                                        <li>
                                            <a href="/Blood_bank_add" className="mm-active">
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
                                            <a href="/Lab_Details_Update" >
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
                <div className="app-main__outer">
                    <div className="app-main__inner">
                        <div className="app-page-title">
                            <div className="page-title-wrapper">
                                <div className="page-title-heading">
                                    <div className="page-title-icon">
                                        <i className="pe-7s-car icon-gradient bg-mean-fruit"></i>
                                    </div>
                                    <div>
                                        Add Blood Bank Details
                                    </div>
                                </div>
                            </div>
                        </div>
                        <h1>Blood Bank Info | Add</h1>
                        <Form style={{marginLeft:'5%',marginTop:'3%', marginBottom:'3%'}}>
                                <Form.Group as={Row} className="mb-3" controlId="">
                                    <Form.Label column sm={3}>  
                                             Contact Number
                                    </Form.Label>
                                    <Col sm={5}>
                                        <Form.Control type="text" />
                                     </Col>
                                 </Form.Group>
                                 <Form.Group as={Row} className="mb-3" controlId="">
                                    <Form.Label column sm={3}>
                                             A+ Blood Availability
                                    </Form.Label>
                                    <Col sm={5}>
                                        <Form.Control type="text" />
                                     </Col>
                                 </Form.Group>
                                 <Form.Group as={Row} className="mb-3" controlId="">
                                    <Form.Label column sm={3}>
                                             A- Blood Availability
                                    </Form.Label>
                                    <Col sm={5}>
                                        <Form.Control type="text" />
                                     </Col>
                                 </Form.Group>
                                 <Form.Group as={Row} className="mb-3" controlId="">
                                    <Form.Label column sm={3}>
                                             B+ Blood Availability
                                    </Form.Label>
                                    <Col sm={5}>
                                        <Form.Control type="text" />
                                     </Col>
                                 </Form.Group>
                                 <Form.Group as={Row} className="mb-3" controlId="">
                                    <Form.Label column sm={3}>
                                             B- Blood Availability
                                    </Form.Label>
                                    <Col sm={5}>
                                        <Form.Control type="text" />
                                     </Col>
                                 </Form.Group>
                                 <Form.Group as={Row} className="mb-3" controlId="">
                                    <Form.Label column sm={3}>
                                             O+ Blood Availability
                                    </Form.Label>
                                    <Col sm={5}>
                                        <Form.Control type="text" />
                                     </Col>
                                 </Form.Group>
                                 <Form.Group as={Row} className="mb-3" controlId="">
                                    <Form.Label column sm={3}>
                                             O- Blood Availability
                                    </Form.Label>
                                    <Col sm={5}>
                                        <Form.Control type="text" />
                                     </Col>
                                 </Form.Group>
                                 <Form.Group as={Row} className="mb-3" controlId="">
                                    <Form.Label column sm={3}>
                                             AB+ Blood Availability
                                    </Form.Label>
                                    <Col sm={5}>
                                        <Form.Control type="text" />
                                     </Col>
                                 </Form.Group>
                                 <Form.Group as={Row} className="mb-3" controlId="">
                                    <Form.Label column sm={3}>
                                             AB- Blood Availability
                                    </Form.Label>
                                    <Col sm={5}>
                                        <Form.Control type="text" />
                                     </Col>
                                 </Form.Group>
                                <Form.Group as={Row} className="mb-3"controlId="" >
                                    <Form.Label column sm={3}>
                                             Note
                                    </Form.Label>
                                    <Col sm={5}>
                                    <Form.Control as="textarea"  rows={3} />
                                     </Col>
                                 </Form.Group>
                                
                                <Form.Group as={Row} className="mb-3">
                                <div style={{marginTop:'5%', marginLeft:'65%'}}>
                                                
                                                <div class="btn-group mr-2" role="group" aria-label="Second group">
                                                    <button type="button" class="btn btn-secondary">SUBMIT</button>
                                                </div>
                                                
                                            </div>
                                   
                                </Form.Group>
                        </Form>
                        {/* Body Part */}
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

export default Blood_bank_add
