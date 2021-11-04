import React, { useState, useEffect } from "react";
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import GrainIcon from '@material-ui/icons/Grain';
import { makeStyles } from '@material-ui/core/styles';

const useStyles2 = makeStyles((theme) => ({
    link: {
        display: 'flex',
    },
    icon: {
        marginRight: theme.spacing(0.5),
        width: 20,
        height: 20,
    },
}));
function About() {
    const classes = useStyles2();
    return (
        <div>
            <>
                <section className="about-area pt-10 pb-100">
                    <div className="container">
                        <Breadcrumbs aria-label="breadcrumb" className="Breadcrumbs">
                            <Link color="inherit" href="./" className={classes.link}>
                                <HomeIcon className={classes.icon} />
                                Home
                            </Link>
                            <Typography color="textPrimary" className={classes.link}>
                                <GrainIcon className={classes.icon} />
                                Who We Are
                            </Typography>
                        </Breadcrumbs>
                        <div className="row align-items-xl-center">
                            <div className="col-lg-6">
                                <div className="about-img">
                                    <img src="images/about_img.jpg" alt />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="about-content">
                                    <h4 className="title">Our Story</h4>
                                    <p>
                                        The Health organizations must maintain various types of information. The functions of the organization are namely Doctor’s detail management, Hospital detail management, Technologies and facilities details management, Services Detail management, Operation History Management, Pharmacy Detail management, Ambulance detail management & Disease spread information & Guidance. Administrators will be assigned for each and every management sectors. Due to the effect, the health sector of our society has been affected badly. Our system is to access the details of health organizations within a district in a single web application without physically visiting the organization environment. It is also expected to help the organization by organizing the details of each sectors of it. So that the organization can make schedules and maintain needed resources accordingly.
                                    </p>
                                    {/* <div className="our-mission-wrap">
                                        <h4 className="title">Mission of Our Creative House</h4>
                                        <div className="our-mission-list">
                                            <div className="mission-box">
                                                <div className="mission-icon">
                                                    <i className="flaticon-project" />
                                                </div>
                                                <div className="mission-count">
                                                    <h2>
                                                        <span className="odometer" data-count={324}>
                                                            00
                                                        </span>
                                                        +
                                                    </h2>
                                                    <span>Projects</span>
                                                </div>
                                            </div>
                                            <div className="mission-box">
                                                <div className="mission-icon">
                                                    <i className="flaticon-revenue" />
                                                </div>
                                                <div className="mission-count">
                                                    <h2>
                                                        $
                                                        <span className="odometer" data-count={3}>
                                                            00
                                                        </span>
                                                        M
                                                    </h2>
                                                    <span>Revenue</span>
                                                </div>
                                            </div>
                                            <div className="mission-box">
                                                <div className="mission-icon">
                                                    <i className="flaticon-quality" />
                                                </div>
                                                <div className="mission-count">
                                                    <h2>
                                                        <span className="odometer" data-count={379}>
                                                            00
                                                        </span>
                                                        +
                                                    </h2>
                                                    <span>Awards</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* about-area-end */}
                {/* features-area */}
                <section className="features-area theme-bg pt-100 pb-70">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-8">
                                <div className="section-title text-center mb-70">
                                    <span className="sub-title">Why Choose Us</span>
                                    <h2 className="title">experience in setting up</h2>
                                </div>
                            </div>
                        </div>
                        <div className="row justify-content-center">
                            <div className="col-lg-4 col-md-6">
                                <div className="features-wrap-item mb-30">
                                    <div className="features-icon">
                                        <i className="flaticon-shuttle" />
                                    </div>
                                    <div className="features-content">
                                        <h5>Have a Good Work Environment</h5>
                                        <p>
                                            Lorem Ipsum simply dumm the printing and typesetting indust orem
                                            Ipsum has been the industry standard dummy men book.
                                        </p>
                                        <div className="features-item-list">
                                            <ul>
                                                <li>Smart UHD TV</li>
                                                <li>Snow Frost in Freezer</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="features-wrap-item mb-30">
                                    <div className="features-icon">
                                        <i className="flaticon-secure-payment" />
                                    </div>
                                    <div className="features-content">
                                        <h5>Reliable Information</h5>
                                        <p>
                                            A normal person will be able to identify the standards and abilities of the doctors.
                                            With the help of a single website platform to get the health service details in a district.
                                            Get to know about the available facilities and services at hospitals.
                                        </p>
                                        <div className="features-item-list">
                                            <ul>
                                                <li>24/7 Support</li>
                                                <li>Money back in 15 days</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6">
                                <div className="features-wrap-item mb-30">
                                    <div className="features-icon">
                                        <i className="flaticon-24-hours-support" />
                                    </div>
                                    <div className="features-content">
                                        <h5>24/7 Customer Support</h5>
                                        <p>
                                            Lorem Ipsum simply dumm the printing and typesetting indust orem
                                            Ipsum has been the industry standard dummy men book.
                                        </p>
                                        <div className="features-item-list">
                                            <ul>
                                                <li>Smart UHD TV</li>
                                                <li>Snow Frost in Freezer</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* features-area-end */}
            </>
        </div>
    )
}

export default About
