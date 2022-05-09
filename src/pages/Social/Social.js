import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import google from '../../images/google.png';
import github from '../../images/github.png';
import auth from '../../firebase.init';
import './Social.css';
import { useNavigate } from 'react-router-dom';
import Loading from '../Loading/Loading';

const Social = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    const [signInWithGithub, user1, loading1, error1] = useSignInWithGithub(auth);
    const navigate = useNavigate;
    let errorElement;

    if (error || error1) {
        errorElement = <div><p className='text-danger'>Error: {error?.message}{error1?.message} </p></div>
    }
    if (user || user1) {
        navigate('/home');
    }
    if (loading || loading1) {
        return <Loading></Loading>
    }

    return (
        <div>
            <div className='divider-container'>
                <div className='divider'></div>
                <p className='divider-text'>or</p>
                <div className='divider'></div>
            </div>
            {errorElement}
            <div>
                <button onClick={() => signInWithGoogle()} className='sign-in-btn'><img style={{ width: '30px' }} src={google} alt="" /> <span className='px-2'>Google SignIn</span></button>
            </div>
            <div>
                <button onClick={() => signInWithGithub()} className='sign-in-btn'><img style={{ width: '30px' }} src={github} alt="" /> <span className='px-2'>GitHub SignIn</span></button>
            </div>
        </div>
    );
};

export default Social;