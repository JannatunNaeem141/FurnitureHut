import React from 'react';
import './NotFound.css';

const NotFound = () => {
    return (
        <div className='not-found'>
            <div>
                <h1 className='not-found-head'>404</h1>
                <p className='not-found-text1'><span>OOPS!</span> Page not found</p>
                <p className='not-found-text2'>Sorry, the page you are looking for is not found. Please, make sure you have typed the correct URL</p>
            </div>
        </div>
    );
};

export default NotFound;