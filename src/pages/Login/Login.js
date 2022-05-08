import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Social from '../Social/Social';
import './Login.css'
import { async } from '@firebase/util';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
    const emailRef = useRef('');
    const passwordRef = useRef('');
    const location = useLocation();
    const navigate = useNavigate();
    let from = location.state?.from?.pathname || '/';
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);
    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);

    if (user) {
        navigate(from, { replace: true });
    }
    if (error) {
        errorElement = <div><p className='text-danger'>Error: {error?.message}</p></div>
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        signInWithEmailAndPassword(email, password);
    }
    const navigateRegister = event => {
        navigate('/register');
    }
    const resetPassword = async () => {
        const email = emailRef.current.value;
        if (email) {
            await sendPasswordResetEmail(email);
            toast('sent email');
        } else {
            toast('Please enter your email address!')
        }
    }
    return (
        <div className='login-section'>
            <div className='login-inner'>
                <h2 className='form-title'>Login</h2>
                <Form className='form' onSubmit={handleSubmit}>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control className='form-input' type="email" ref={emailRef} placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control className='form-input' type="password" ref={passwordRef} placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Check me out" />
                    </Form.Group>
                    <div className='form-btn-div'>
                        <Button className='form-btn' variant="primary" type="submit">
                            Login
                        </Button>
                    </div>
                    <p>New Here? <Link className='form-link' to='/register' onClick={navigateRegister}>Please Register</Link></p>
                    <p>Forget Password? <Link className='form-link' to='/login' onClick={resetPassword}>Reset Password</Link></p>
                </Form>
                {errorElement}
                <Social></Social>
                <ToastContainer />
            </div>
        </div>
    );
};

export default Login;