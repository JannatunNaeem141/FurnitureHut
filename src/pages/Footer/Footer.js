import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRightIcon } from '@heroicons/react/solid'
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-4">
                        <div className="footer-item-first">
                            <div className="row">
                                <div>
                                    <Link className="logo" to='/'>Furniture<span>Hut</span></Link>
                                </div>
                            </div>
                            <div className="row">
                                <div className="para">
                                    <p>This is our warehouse site FurnitureHut. Here you can find your all kind of living furnitures on wholesale price.</p>
                                </div>
                            </div>
                            <div className="row">
                                <div className="copyright">
                                    <p>&copy; Created by <span>FurnitureHut </span>  -2022</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="footer-common">
                            <h4>Links</h4>
                            <ul>
                                <li>
                                    <Link to='/'>Home</Link>
                                </li>
                                <li>
                                    <Link to='/products'>Products</Link>
                                </li>
                                <li>
                                    <Link to='/blogs'>Blogs</Link>
                                </li>
                                <li>
                                    <Link to='/login'>Login</Link>
                                </li>
                                <li>
                                    <Link to='/register'>Register</Link>
                                </li>
                                <li>
                                    <a href="#">Terms and Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="footer-common">
                            <h4>About Us</h4>
                            <p>FurnitureHut is now considered as a well-known furniture brand in Bangladesh. With the utmost promise to provide the finest home and office furniture Regal started its journey in January, 2022.</p>
                        </div>
                    </div>
                    {/* <div className="col-md-4">
                        <div className="footer-item-last">
                            <div className="row">
                                <h4>Contact Us</h4>
                            </div>
                            <div className="row">
                                <div className="para">
                                    <p>Get in touch with us via mail phone.We are waiting for  your call or message</p>
                                </div>
                            </div>

                            <div className="row">
                                <div className="social-icons">
                                    <ul>
                                        <li>
                                            <a href="#"><i className="fab fa-facebook-f bg-1"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fab fa-twitter bg-2"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fab fa-google-plus-g bg-3"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i className="fab fa-dribbble bg-4"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>
        </footer>
    );
};

export default Footer;