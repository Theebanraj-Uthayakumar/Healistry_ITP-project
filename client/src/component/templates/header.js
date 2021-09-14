import React from 'react'
// import Button from '../../../../dashboard/node_modules/@restart/ui/esm/Button';
import Card from 'react-bootstrap/Card';

export default function header() {
    return (
        <div>
            <header className="header-style-two header-style-three">
                <div id="sticky-header" className="main-header menu-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="mobile-nav-toggler">
                                    <i className="fas fa-bars" />
                                </div>
                                <div className="menu-wrap">
                                    <nav className="menu-nav show">
                                        <div className="logo">
                                            <a href="index.html">
                                                <img src="images/LOGO final.png" alt="Logo" width="100px" />
                                            </a>
                                        </div>
                                        <div className="navbar-wrap main-menu d-none d-lg-flex">
                                            <ul className="navigation">
                                                <li className="dropdown">
                                                    <a href="/">Home</a>
                                                </li>
                                                <li className="dropdown">
                                                    <a href="#">Our Services</a>
                                                    <ul className="submenu">
                                                        <li>
                                                            <a href="/doctors">Doctors</a>
                                                        </li>
                                                        <li>
                                                            <a href="/Hospital">Hospital</a>
                                                        </li>
                                                        <li>
                                                            <a href="/BloodBank">Blood Bank</a>
                                                        </li>
                                                        <li>
                                                            <a href="/cleaning">Cleaning Service</a>
                                                        </li>
                                                        <li>
                                                            <a href="/BloodBank_Details">BloodBank Details</a>
                                                        </li>
                                                        <li>
                                                            <a href="/Ambulance_Details">Ambulance Details</a>
                                                        </li>
                                                        <li>
                                                            <a href="/Camping_Details">Camping Details</a>
                                                        </li>
                                                        <li>
                                                            <a href="/technology">Technology Details</a>
                                                        </li>
                                                        <li>
                                                            <a href="/facility">Facility Details</a>
                                                        </li>
                                                        <li>
                                                            <a href="laboratory_details">Laboratory Details</a>
                                                        </li>
                                                        <li>
                                                            <a href="/Disease1">Disease</a>
                                                        </li>
                                                         <li>
                                                            <a href="/check">Pharmacy Details</a>
                                                        </li>
                                                        <li>
                                                            <a href="/Equipments">Equipments Details</a>
                                                        </li>
                                                    </ul>
                                                </li>
                                                {/* <li className="dropdown">
                                                    <a href="#">SHOP</a>
                                                    <ul className="submenu">
                                                        <li className="active">
                                                            <a href="shop-left-sidebar.html">Shop Left Sidebar</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop-right-sidebar.html">Shop Right Sidebar</a>
                                                        </li>
                                                        <li>
                                                            <a href="shop-details.html">Shop Details</a>
                                                        </li>
                                                        <li>
                                                            <a href="wishlist.html">Wishlist page</a>
                                                        </li>
                                                        <li>
                                                            <a href="cart.html">Cart page</a>
                                                        </li>
                                                        <li>
                                                            <a href="checkout.html">Checkout page</a>
                                                        </li>
                                                        <li>
                                                            <a href="order-completed.html">Order completed</a>
                                                        </li>
                                                    </ul>
                                                </li> */}
                                                <li>
                                                    <a href="/about">About Us</a>
                                                </li>
                                                <li>
                                                    <a href="/contact">contacts</a>
                                                </li>
                                            </ul>
                                        </div>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
        </div>
    )
}
