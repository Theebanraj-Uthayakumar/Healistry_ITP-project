import React from 'react'
import { Link } from 'react-router-dom'

const SideNav = () => {
    return (
       
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
                                        <Link to="http://localhost:3001/">
                                            <i className="metismenu-icon pe-7s-rocket" />
                                            Dashboard
                                        </Link>
                                    </li>
                                    <li className="app-sidebar__heading">Components</li>
                                    <li>
                                        <Link to="#" className="mm-active">
                                            <i className="metismenu-icon pe-7s-diamond" />
                                            Doctors' Details
                                            <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                                        </Link>
                                        <ul>
                                            <li>
                                                <Link  to="/Doctors_Add" className="mm-active">
                                                    <i className="metismenu-icon" />
                                                    Doctors | Add
                                                </Link>
                                            </li>
                                            <li>
                                                <Link  to="/Doctors_update">
                                                    <i className="metismenu-icon"></i> Doctors | Edit,Delete
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link  to="#">
                                            <i className="metismenu-icon pe-7s-diamond" />
                                            Hospitals Details
                                            <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                                        </Link>
                                        <ul>
                                            <li>
                                                <Link  to="#">
                                                    <i className="metismenu-icon" />
                                                    Hospitals | Add
                                                </Link>
                                            </li>
                                            <li>
                                                <Link  to="#">
                                                    <i className="metismenu-icon"></i> Hospitals | Edit,Delete
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link  to="#" className="mm-active">
                                            <i className="metismenu-icon pe-7s-diamond" />
                                            Technology Details
                                            <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                                        </Link>
                                        <ul>
                                            <li>
                                                <Link  to="/technology/add" className="mm-active">
                                                    <i className="metismenu-icon" />
                                                    Technology | Add
                                                </Link>
                                            </li>
                                            <li>
                                                <Link  to="/technology/update">
                                                    <i className="metismenu-icon"></i> Technology | Edit,Delete
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link  to="#" className="mm-active">
                                            <i className="metismenu-icon pe-7s-diamond" />
                                            Facilty Details
                                            <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                                        </Link>
                                        <ul>
                                            <li>
                                                <Link  to="/facility/add" className="mm-active">
                                                    <i className="metismenu-icon" />
                                                    Facility | Add
                                                </Link>
                                            </li>
                                            <li>
                                                <Link  to="/facility/update">
                                                    <i className="metismenu-icon"></i> Facility | Edit,Delete
                                                </Link>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <Link  to="#">
                                            <i className="metismenu-icon pe-7s-display2" />
                                            Tables
                                        </Link>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
      
    )
}

export default SideNav
