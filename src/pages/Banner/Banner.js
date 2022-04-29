import React from 'react';
import './Banner.css';
import bannerImg from '../../images/banner.jpg'

const Banner = () => {
    return (
        <div className='banner-section' >
            <div className='banner'>
                <div className='banner-text'>
                    <h1>Let your living space live up to your expectations.</h1>
                    <button>Explore Now</button>
                </div>
                <div>
                    <img src={bannerImg} alt="" />
                </div>
            </div>
        </div >
    );
};

export default Banner;