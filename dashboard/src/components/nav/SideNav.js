import React from "react";
import { Link } from "react-router-dom";

const SideNav = () => {
  return (
    <>
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
                  Cleaning Company
                  <i className="metismenu-state-icon pe-7s-angle-down caret-left" />
                </a>
                <ul>
                  <li>
                    <a href="/cleaning_add">
                      <i className="metismenu-icon" />
                      Cleaning Company | Add
                    </a>
                  </li>
                  <li>
                    <a href="/cleaning_update">
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
                  Technology
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
                      <i className="metismenu-icon"></i> Technologies
                    </a>
                  </li>
                </ul>
              </li>
              <li>
                <a href="#">
                  <i className="metismenu-icon pe-7s-diamond" />
                  Facility
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
                      <i className="metismenu-icon"></i> Facilities
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
    </>
  );
};

export default SideNav;
