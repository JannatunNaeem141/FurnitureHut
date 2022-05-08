import React from 'react';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import HomeProducts from '../HomeProducts/HomeProducts';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <HomeProducts></HomeProducts>
            <Contact></Contact>
        </div>
    );
};

export default Home;