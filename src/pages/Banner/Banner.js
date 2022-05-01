import React from 'react';
import './Banner.css';
import bannerImg from '../../images/banner.jpg'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='banner-section' >
            <div className='banner'>
                <div className='banner-text'>
                    <h1>Let your living space live up to your expectations.</h1>
                    <Link to='/products'>Explore Now</Link>
                </div>
                <div>
                    <img src={bannerImg} alt="" />
                </div>
            </div>
        </div >
    );
};

export default Banner;