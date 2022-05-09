import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    return (
        <footer class="footer-section">
            <div class="container">
                <div class="row">
                    <div class="col-md-4">
                        <div class="footer-item-first">
                            <div class="row">
                                <div>
                                    <Link class="logo" to='/'>Furniture<span>Hut</span></Link>
                                </div>
                            </div>
                            <div class="row">
                                <div class="para">
                                    <p>This is our warehouse site FurnitureHut. Here you can find your all kind of living furnitures on wholesale price.</p>
                                </div>
                            </div>
                            <div class="row">
                                <div class="copyright">
                                    <p>Created by © 2017 <span>FurnitureHut</span></p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="footer-common">
                            <h4>Links</h4>
                            <ul>
                                <li>
                                    <Link to='/'>Home</Link>
                                </li>
                                <li>
                                    <Link to='/products'>Products</Link>
                                </li>
                                <li>
                                    <a href="#">Portfolio</a>
                                </li>
                                <li>
                                    <a href="#">Testimonials</a>
                                </li>
                                <li>
                                    <a href="#">Support</a>
                                </li>
                                <li>
                                    <a href="#">Terms and Conditions</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-2">
                        <div class="footer-common">
                            <h4>About Us</h4>
                            <ul>
                                <li>
                                    <a href="#">Sign in</a>
                                </li>
                                <li>
                                    <a href="#">Register</a>
                                </li>
                                <li>
                                    <a href="#">About Us</a>
                                </li>
                                <li>
                                    <a href="#">Blog</a>
                                </li>
                                <li>
                                    <a href="#">Contact Us</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div class="col-md-4">
                        <div class="footer-item-last">
                            <div class="row">
                                <h4>Contact Us</h4>
                            </div>
                            <div class="row">
                                <div class="para">
                                    <p>Get in touch with us via mail phone.We are waiting for  your call or message</p>
                                </div>
                            </div>
                            <div class="row">
                                <a href="#" class="btn btn-primary">
                                    <div class="btn-edit">
                                        <div class="mail">
                                            mail
                                        </div>
                                        <div class="icon">
                                            <i class="fas fa-arrow-right"></i>
                                        </div>
                                    </div>
                                </a>
                            </div>
                            <div class="row">
                                <div class="social-icons">
                                    <ul>
                                        <li>
                                            <a href="#"><i class="fab fa-facebook-f bg-1"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fab fa-twitter bg-2"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fab fa-google-plus-g bg-3"></i></a>
                                        </li>
                                        <li>
                                            <a href="#"><i class="fab fa-dribbble bg-4"></i></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;