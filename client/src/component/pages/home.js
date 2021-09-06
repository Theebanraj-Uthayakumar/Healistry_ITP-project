import React from 'react'
import Container from '@material-ui/core/Container';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { makeStyles } from '@material-ui/core/styles';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

function home() {
    var settings = {
        autoplay: true,
        autoplaySpeed: 2000,
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };
    const styles_home = makeStyles((theme) => ({
        root: {
            flexGrow: 1,
        },
        paper: {
            padding: theme.spacing(2),
            textAlign: 'center',
            color: theme.palette.text.secondary,
        },
    }));
    const classes = styles_home();
    return (
        <div>
            <Container>
                <table className="Home_1">
                    <tr>
                        <td><img src="/images/Home1.png" alt="Home 1"></img></td>
                        <td className="home1_link">
                            <h1 className="home1">
                                <sapn>Lorem ipsum</sapn><br />
                                <sapn>dolor sit elit amet</sapn>
                            </h1>
                            <p className="home1_link">Lorem ipsum dolor sit <ArrowForwardIcon style={{ color: "#4AD7D1" }} /></p>
                        </td>
                    </tr>
                </table>
            </Container>
            <Container>
                <div>
                    <h1 className="home2_heading">Lorem ipsum </h1>
                </div>
                <Slider {...settings}>

                    <div className="contact-info-box text-center mb-30">
                        <div className="contact-box-icon">
                            <center>
                                <img src="img/icon/doctor.png" width="45px" style={{ paddingTop: "10px" }}></img>
                            </center>
                        </div>
                        <div className="contact-info-content">
                            <h5>Doctors Details</h5>
                            <p>
                                W898 RTower Stat, Suite 56 Brockland, CA 9622 United States
                            </p>
                        </div>
                    </div>
                    <div className="contact-info-box text-center mb-30">
                        <div className="contact-box-icon">
                            <center>
                                <img src="img/icon/hospital.png" width="45px" style={{ paddingTop: "10px" }}></img>
                            </center>
                        </div>
                        <div className="contact-info-content">
                            <h5>Hospital Details</h5>
                            <p>
                                W898 RTower Stat, Suite 56 Brockland, CA 9622 United States
                            </p>
                        </div>
                    </div>
                    <div className="contact-info-box text-center mb-30">
                        <div className="contact-box-icon">
                            <center>
                                <img src="img/icon/ambulance.png" width="45px" style={{ paddingTop: "10px" }}></img>
                            </center>
                        </div>
                        <div className="contact-info-content">
                            <h5>Ambulance Details</h5>
                            <p>
                                W898 RTower Stat, Suite 56 Brockland, CA 9622 United States
                            </p>
                        </div>
                    </div>
                    <div className="contact-info-box text-center mb-30">
                        <div className="contact-box-icon">
                            <center>
                                <img src="img/icon/Camping.png" width="45px" style={{ paddingTop: "10px" }}></img>
                            </center>
                        </div>
                        <div className="contact-info-content">
                            <h5>Camping Details</h5>
                            <p>
                                W898 RTower Stat, Suite 56 Brockland, CA 9622 United States
                            </p>
                        </div>
                    </div>
                    <div className="contact-info-box text-center mb-30">
                        <div className="contact-box-icon">
                            <center>
                                <img src="img/icon/nanotechnology.png" width="45px" style={{ paddingTop: "10px" }}></img>
                            </center>
                        </div>
                        <div className="contact-info-content">
                            <h5>Technology Details</h5>
                            <p>
                                W898 RTower Stat, Suite 56 Brockland, CA 9622 United States
                            </p>
                        </div>
                    </div>
                    <div className="contact-info-box text-center mb-30">
                        <div className="contact-box-icon">
                            <center>
                                <img src="img/icon/amenities.png" width="45px" style={{ paddingTop: "10px" }}></img>
                            </center>
                        </div>
                        <div className="contact-info-content">
                            <h5>Facility Details</h5>
                            <p>
                                W898 RTower Stat, Suite 56 Brockland, CA 9622 United States
                            </p>
                        </div>
                    </div>
                    <div className="contact-info-box text-center mb-30">
                        <div className="contact-box-icon">
                            <center>
                                <img src="img/icon/surgery-room.png" width="45px" style={{ paddingTop: "10px" }}></img>
                            </center>
                        </div>
                        <div className="contact-info-content">
                            <h5>Operation History</h5>
                            <p>
                                W898 RTower Stat, Suite 56 Brockland, CA 9622 United States
                            </p>
                        </div>
                    </div>
                    <div className="contact-info-box text-center mb-30">
                        <div className="contact-box-icon">
                            <center>
                                <img src="img/icon/technical-support.png" width="45px" style={{ paddingTop: "10px" }}></img>
                            </center>
                        </div>
                        <div className="contact-info-content">
                            <h5>Cleaning Compines</h5>
                            <p>
                                W898 RTower Stat, Suite 56 Brockland, CA 9622 United States
                            </p>
                        </div>
                    </div>
                    <div className="contact-info-box text-center mb-30">
                        <div className="contact-box-icon">
                            <center>
                                <img src="img/icon/pharmacy.png" width="45px" style={{ paddingTop: "10px" }}></img>
                            </center>
                        </div>
                        <div className="contact-info-content">
                            <h5>Pharmacy Details</h5>
                            <p>
                                W898 RTower Stat, Suite 56 Brockland, CA 9622 United States
                            </p>
                        </div>
                    </div>
                    <div className="contact-info-box text-center mb-30">
                        <div className="contact-box-icon">
                            <center>
                                <img src="img/icon/coronavirus.png" width="45px" style={{ paddingTop: "10px" }}></img>
                            </center>
                        </div>
                        <div className="contact-info-content">
                            <h5>Disease spread information & Guidance</h5>
                            <p>
                                W898 RTower Stat, Suite 56 Brockland, CA 9622 United States
                            </p>
                        </div>
                    </div>
                    <div className="contact-info-box text-center mb-30">
                        <div className="contact-box-icon">
                            <center>
                                <img src="img/icon/blood-bank.png" width="45px" style={{ paddingTop: "10px" }}></img>
                            </center>
                        </div>
                        <div className="contact-info-content">
                            <h5>Blood Bank Details</h5>
                            <p>
                                W898 RTower Stat, Suite 56 Brockland, CA 9622 United States
                            </p>
                        </div>
                    </div>
                    <div className="contact-info-box text-center mb-30">
                        <div className="contact-box-icon">
                            <center>
                                <img src="img/icon/microscope.png" width="45px" style={{ paddingTop: "10px" }}></img>
                            </center>
                        </div>
                        <div className="contact-info-content">
                            <h5>laboratory Details</h5>
                            <p>
                                W898 RTower Stat, Suite 56 Brockland, CA 9622 United States
                            </p>
                        </div>
                    </div>

                </Slider>
            </Container>
            <Container>
                <table className="Home_1">
                    <tr>
                        <td className="home4_link">
                            <h1 className="home4_left">
                                <sapn>Lorem ipsum</sapn><br />
                                <sapn>dolor sit elit amet</sapn>
                                <img src="/images/logo.png" className="home4_img"></img>
                            </h1>
                        </td>
                        <td className="home4_link">
                            <h1 className="home4_right">
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum auctor, purus non sagittis malesuada, elit ante rhoncus velit, non ornare odio massa non dolor. Fusce in diam id mi ultrices lacinia. Praesent bibendum varius lobortis. Praesent libero enim, mattis congue ornare a, congue vitae enim. Nunc non porttitor magna. Mauris sit amet fringilla magna. Proin sit amet nisi efficitur, malesuada purus sit amet, sodales orci. Morbi vel elit nec felis gravida scelerisque ut sed metus. Integer molestie varius lobortis. Nam a blandit dui. Duis eget efficitur purus. Ut in diam a sapien aliquet fringilla. Aliquam eu imperdiet augue, eu faucibus velit. Suspendisse vitae consequat risus, in tristique magna. Donec tempor mattis mollis. Nam rhoncus leo volutpat metus dignissim, a euismod tellus pulvinar. </p>
                            </h1>
                        </td>
                    </tr>
                </table>
            </Container>

        </div>
    )
}

export default home
