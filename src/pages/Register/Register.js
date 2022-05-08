import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useNavigate } from 'react-router-dom';
import Social from '../Social/Social';
import './Register.css';
import auth from '../../firebase.init';

const Register = () => {
    const navigate = useNavigate();

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

    const handleRegister = async (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        await createUserWithEmailAndPassword(email, password);
        navigate('/');
    }
    const navigateLogin = event => {
        navigate('/login');
    }
    if (user) {
        console.log('user', user);
    }

    return (
        <div className='register-section'>
            <div className='reg-inner'>
                <h2 className='form-title'>Register</h2>
                <Form className='form' onSubmit={handleRegister}>
                    <Form.Control name='name' className="mb-3 form-input" type="text" placeholder="Your Name" required />
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Control className='form-input' name='email' type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Control className='form-input' name='password' type="password" placeholder="Password" required />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                        <Form.Check type="checkbox" label="Accept Terms and Conditions" />
                    </Form.Group>
                    <div className='form-btn-div'>
                        <Button className='form-btn ' variant="primary" type="submit">
                            Register
                        </Button>
                    </div>
                    <p>Already have an account? <Link className='form-link' to='/login' onClick={navigateLogin}>Please Login</Link></p>
                </Form>
                <Social></Social>
            </div>
        </div>
    );
};

export default Register;