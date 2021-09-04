import React from 'react'

function about() {
    return (
        <div>
            <>
                <section className="about-area pt-100 pb-100">
                    <div className="container">
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
                                        Lorem Ipsum is simply dummy text of the printing and typesetting
                                        indust orem Ipsum has been the industry's standard dummy texever
                                        since the when anunknown printer took a galley of type and
                                        scrambled it to make a type specimen book.
                                    </p>
                                    <p>
                                        Dorem Ipsum is simply dummy consectetur adipisicing elit, sed do
                                        eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                                        enim ad minim veniam
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
                                        <h5>Home Fast Delivery</h5>
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
                                        <h5>Secure Payment</h5>
                                        <p>
                                            Lorem Ipsum simply dumm the printing and typesetting indust orem
                                            Ipsum has been the industry standard dummy men book.
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

export default about
