import React from 'react';
import google from '../../images/google.png';
import github from '../../images/github.png';
import './Social.css';

const Social = () => {

    return (
        <div>
            <div className='divider-container'>
                <div className='divider'></div>
                <p className='divider-text'>or</p>
                <div className='divider'></div>
            </div>
            <div>
                <button className='sign-in-btn'><img style={{ width: '30px' }} src={google} alt="" /> <span className='px-2'>Google SignIn</span></button>
            </div>
            <div>
                <button className='sign-in-btn'><img style={{ width: '30px' }} src={github} alt="" /> <span className='px-2'>GitHub SignIn</span></button>
            </div>
            {/* onClick={() => signInWithGoogle()} */}
            {/* onClick={() => signInWithGithub()} */}
        </div>
    );
};

export default Social;