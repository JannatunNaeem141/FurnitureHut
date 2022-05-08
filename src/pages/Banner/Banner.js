import React from 'react';
import './Banner.css';
import bannerImg from '../../images/banner.jpg'
import { Link } from 'react-router-dom';

const Banner = () => {
    return (
        <div className='banner-section' >
            <div className='banner'>
                <div className='banner-text'>
                    <h1>Let your <span>living space live</span> up to your expectations.</h1>
                    <Link to='/products' className='explore-btn'>Explore Now <svg className='explore-svg' xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg></Link>
                </div>
                <div className='banner-img'>
                    <img src={bannerImg} alt="" />
                </div>
            </div>
        </div >
    );
};

export default Banner;