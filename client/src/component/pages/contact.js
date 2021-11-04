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
function Contact() {
    const classes = useStyles2();
    return (
        <div>
            <>
                <div className="container">
                    <Breadcrumbs aria-label="breadcrumb" className="Breadcrumbs">
                        <Link color="inherit" href="./" className={classes.link}>
                            <HomeIcon className={classes.icon} />
                            Home
                        </Link>
                        <Typography color="textPrimary" className={classes.link}>
                            <GrainIcon className={classes.icon} />
                            Contact
                        </Typography>
                    </Breadcrumbs>
                </div>
                <section className="contact-area primary-bg pt-100 pb-70">
                    <div className="container">
                        <div className="contact-wrap-padding">
                            <div className="row justify-content-center">
                                <div className="col-lg-4 col-md-6 col-sm-8">
                                    <div className="contact-info-box text-center mb-30">
                                        <div className="contact-box-icon">
                                            <i className="flaticon-placeholder" />
                                        </div>
                                        <div className="contact-info-content">
                                            <h5>Our Location</h5>
                                            <p>
                                                W898 RTower Stat, Suite 56 Brockland, CA 9622 United States
                                            </p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-8">
                                    <div className="contact-info-box text-center mb-30">
                                        <div className="contact-box-icon">
                                            <i className="flaticon-mail" />
                                        </div>
                                        <div className="contact-info-content">
                                            <h5>Our Email</h5>
                                            <p>Email Us: Support@info.Com</p>
                                            <p>Vanamsupport.com</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-4 col-md-6 col-sm-8">
                                    <div className="contact-info-box text-center mb-30">
                                        <div className="contact-box-icon">
                                            <i className="flaticon-telephone" />
                                        </div>
                                        <div className="contact-info-content">
                                            <h5>Phone Number</h5>
                                            <p>Contacr Numbers: 458-965-3224</p>
                                            <p>458-965-3224</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
                {/* contact-area-end */}
                {/* contact-area */}
                <section className="contact-area pt-100 pb-100">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-xl-5 col-lg-7 col-md-9">
                                <div className="contact-title text-center mb-60">
                                    <div className="section-title text-center">
                                        <span className="sub-title">LET’S TALK</span>
                                        <h2 className="title">Send Us a Massage</h2>
                                    </div>
                                    <p>
                                        We are always happy to talk with you. Be sure to write to us if
                                        you have any questions or need help and support.
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div className="contact-wrap-padding">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="contact-form">
                                        {/* <form action="#">
                                            <div className="row">
                                                <div className="col-sm-6">
                                                    <div className="form-grp">
                                                        <input type="text" placeholder="First Name*" />
                                                        <i className="far fa-user" />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-grp">
                                                        <input type="text" placeholder="Last Name*" />
                                                        <i className="far fa-user" />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-grp">
                                                        <input type="email" required placeholder="Your Email*" />
                                                        <i className="far fa-envelope" />
                                                    </div>
                                                </div>
                                                <div className="col-sm-6">
                                                    <div className="form-grp">
                                                        <input type="text" placeholder="Phone*" />
                                                        <i className="fas fa-mobile-alt" />
                                                    </div>
                                                </div>
                                            </div>
                                            <textarea
                                                name="message"
                                                id="message"
                                                placeholder="Enter Your Massage"
                                                defaultValue={""}
                                            />
                                            <button type="submit" className="btn">
                                                submit
                                            </button>
                                        </form> */}
                                        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSdUxzWXRtpFFReTWn_j88ZIZfQKtxL-deMmiPe2obEh7sHweQ/viewform?embedded=true" width="540" height="450" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="contact-map">
                                        <img src="images/map.jpg" alt />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </>

        </div>
    )
}

export default Contact
