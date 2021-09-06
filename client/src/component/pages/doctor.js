import React from 'react'
import Container from '@material-ui/core/Container';
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import Link from '@material-ui/core/Link';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';

const useStyles = makeStyles((theme) => ({
    link: {
        display: 'flex',
    },
    icon: {
        marginRight: theme.spacing(0.5),
        width: 20,
        height: 20,
    },
}));

function handleClick(event) {
    event.preventDefault();
    console.info('You clicked a breadcrumb.');
}

function Doctor() {
    const classes = useStyles();
    return (
        <div>
            <Container>
                <main>
                    {/* shop-area */}
                    <div className="shop-area gray-bg pt-10 pb-100">
                        <div className="custom-container-two">
                            <Breadcrumbs aria-label="breadcrumb" className="Breadcrumbs">
                                <Link color="inherit" href="/" onClick={handleClick} className={classes.link}>
                                    <HomeIcon className={classes.icon} />
                                    Home
                                </Link>
                                <Typography color="textPrimary" className={classes.link}>
                                    <GrainIcon className={classes.icon} />
                                    Dectors Details
                                </Typography>
                            </Breadcrumbs>
                            <div className="row justify-content-center">
                                <div className="col-xl-3 col-lg-4 col-md-6 col-sm-8 order-2 order-lg-0">
                                    <aside className="shop-sidebar">
                                        <div className="widget shop-widget mb-30">
                                            <div className="shop-widget-title">
                                                <h6 className="title">CONSULTANT</h6>
                                            </div>
                                            <div className="sidebar-brand-list">
                                                <ul>
                                                    <li>
                                                        <a href="#">Consultant Cardiothoracic Surgeon</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Dentist</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Dermatologist</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">ENT Surgeon</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Eye Surgeon</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Physician</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Surgon</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Chest Physician</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Technisian</a>
                                                    </li>
                                                    <li>
                                                        <a href="#">Others</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="widget">
                                            <div className="shop-widget-banner special-offer-banner">
                                                <a href="shop-left-sidebar.html">
                                                    <img src="images/sidebar_banner_ad.jpg" alt />
                                                </a>
                                            </div>
                                        </div>
                                    </aside>
                                </div>
                                <div className="col-xl-9 col-lg-8">
                                    <div className="pagination-wrap">
                                        <div className="pagination-wrap_column1">
                                            <img src="img/profiles/Profile01.jpg" alt="Profile01" className="pagination-wrap_image" />
                                        </div>
                                        <div className="pagination-wrap_column2">
                                            <h2>Theebanraj Uthayakumar</h2>
                                            <p>BSc(Hons) in Information Techonology</p>
                                            <table>
                                                <tr>
                                                    <th>SLNC</th>
                                                    <td>1963324</td>
                                                    <th>Gender</th>
                                                    <td>Male</td>
                                                </tr>
                                                <tr>
                                                    <th >Experience</th>
                                                    <td colspan="3">Jan 2021 to Present, Full-Stack Developer at AathyHqC</td>
                                                </tr>
                                                <tr>
                                                    <th >Current Position</th>
                                                    <td>Full-Stack Developer</td>
                                                    <th>Working Hospital</th>
                                                    <td>AathyHqC</td>
                                                </tr>
                                                <tr>
                                                    <th>Working History</th>
                                                    <td colspan="3">Freelancer</td>
                                                </tr>
                                                <tr>
                                                    <th colspan="2"><p>26th Aug 2021</p></th>
                                                    <td colspan="2"><p className="Like"><ThumbUpAltIcon /> Like</p></td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="pagination-wrap">
                                        <div className="pagination-wrap_column1">
                                            <img src="img/profiles/Profile02.jpg" alt="Profile01" className="pagination-wrap_image" />
                                        </div>
                                        <div className="pagination-wrap_column2">
                                            <h2>Thuvaraga Thayaparan</h2>
                                            <p>BSc(Hons) in Information Techonology</p>
                                            <table>
                                                <tr>
                                                    <th>SLNC</th>
                                                    <td>1963324</td>
                                                    <th>Gender</th>
                                                    <td>Male</td>
                                                </tr>
                                                <tr>
                                                    <th >Experience</th>
                                                    <td colspan="3">Jan 2021 to Present, Full-Stack Developer at AathyHqC</td>
                                                </tr>
                                                <tr>
                                                    <th >Current Position</th>
                                                    <td>Full-Stack Developer</td>
                                                    <th>Working Hospital</th>
                                                    <td>AathyHqC</td>
                                                </tr>
                                                <tr>
                                                    <th>Working History</th>
                                                    <td colspan="3">Freelancer</td>
                                                </tr>
                                                <tr>
                                                    <th colspan="2"><p>26th Aug 2021</p></th>
                                                    <td colspan="2"><p className="Like"><ThumbUpAltIcon /> Like</p></td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="pagination-wrap">
                                        <div className="pagination-wrap_column1">
                                            <img src="img/profiles/Profile03.jpg" alt="Profile01" className="pagination-wrap_image" />
                                        </div>
                                        <div className="pagination-wrap_column2">
                                            <h2>Abinaya Thayaparan</h2>
                                            <p>BSc(Hons) in Information Techonology</p>
                                            <table>
                                                <tr>
                                                    <th>SLNC</th>
                                                    <td>1963324</td>
                                                    <th>Gender</th>
                                                    <td>Male</td>
                                                </tr>
                                                <tr>
                                                    <th >Experience</th>
                                                    <td colspan="3">Jan 2021 to Present, Full-Stack Developer at AathyHqC</td>
                                                </tr>
                                                <tr>
                                                    <th >Current Position</th>
                                                    <td>Full-Stack Developer</td>
                                                    <th>Working Hospital</th>
                                                    <td>AathyHqC</td>
                                                </tr>
                                                <tr>
                                                    <th>Working History</th>
                                                    <td colspan="3">Freelancer</td>
                                                </tr>
                                                <tr>
                                                    <th colspan="2"><p>26th Aug 2021</p></th>
                                                    <td colspan="2"><p className="Like"><ThumbUpAltIcon /> Like</p></td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="pagination-wrap">
                                        <div className="pagination-wrap_column1">
                                            <img src="img/profiles/Profile04.jpg" alt="Profile01" className="pagination-wrap_image" />
                                        </div>
                                        <div className="pagination-wrap_column2">
                                            <h2>Meltri</h2>
                                            <p>BSc(Hons) in Information Techonology</p>
                                            <table>
                                                <tr>
                                                    <th>SLNC</th>
                                                    <td>1963324</td>
                                                    <th>Gender</th>
                                                    <td>Male</td>
                                                </tr>
                                                <tr>
                                                    <th >Experience</th>
                                                    <td colspan="3">Jan 2021 to Present, Full-Stack Developer at AathyHqC</td>
                                                </tr>
                                                <tr>
                                                    <th >Current Position</th>
                                                    <td>Full-Stack Developer</td>
                                                    <th>Working Hospital</th>
                                                    <td>AathyHqC</td>
                                                </tr>
                                                <tr>
                                                    <th>Working History</th>
                                                    <td colspan="3">Freelancer</td>
                                                </tr>
                                                <tr>
                                                    <th colspan="2"><p>26th Aug 2021</p></th>
                                                    <td colspan="2"><p className="Like"><ThumbUpAltIcon /> Like</p></td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="pagination-wrap">
                                        <div className="pagination-wrap_column1">
                                            <img src="img/profiles/Profile05.jpg" alt="Profile01" className="pagination-wrap_image" />
                                        </div>
                                        <div className="pagination-wrap_column2">
                                            <h2>Jerry</h2>
                                            <p>BSc(Hons) in Information Techonology</p>
                                            <table>
                                                <tr>
                                                    <th>SLNC</th>
                                                    <td>1963324</td>
                                                    <th>Gender</th>
                                                    <td>Male</td>
                                                </tr>
                                                <tr>
                                                    <th >Experience</th>
                                                    <td colspan="3">Jan 2021 to Present, Full-Stack Developer at AathyHqC</td>
                                                </tr>
                                                <tr>
                                                    <th >Current Position</th>
                                                    <td>Full-Stack Developer</td>
                                                    <th>Working Hospital</th>
                                                    <td>AathyHqC</td>
                                                </tr>
                                                <tr>
                                                    <th>Working History</th>
                                                    <td colspan="3">Freelancer</td>
                                                </tr>
                                                <tr>
                                                    <th colspan="2"><p>26th Aug 2021</p></th>
                                                    <td colspan="2"><p className="Like"><ThumbUpAltIcon /> Like</p></td>
                                                </tr>
                                            </table>
                                        </div>
                                    </div>
                                    <div className="pagination-wrap">
                                        <ul>
                                            <li className="prev">
                                                <a href="#">
                                                    <i className="fas fa-long-arrow-alt-left" /> Prev
                                                </a>
                                            </li>
                                            <li>
                                                <a href="#">1</a>
                                            </li>
                                            <li className="active">
                                                <a href="#">2</a>
                                            </li>
                                            <li>
                                                <a href="#">3</a>
                                            </li>
                                            <li>
                                                <a href="#">4</a>
                                            </li>
                                            <li>
                                                <a href="#">...</a>
                                            </li>
                                            <li>
                                                <a href="#">10</a>
                                            </li>
                                            <li className="next">
                                                <a href="#">
                                                    Next <i className="fas fa-long-arrow-alt-right" />
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* shop-area-end */}
                </main>
            </Container>
        </div>
    )
}

export default Doctor
