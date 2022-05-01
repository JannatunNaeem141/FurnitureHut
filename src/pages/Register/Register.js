import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Social from '../Social/Social';
import './Register.css';

const Register = () => {

    return (
        <div className='register-section'>
            <h2>Register</h2>
            <Form className='form'>
                <Form.Control className="mb-3" type="text" placeholder="Your Name" />
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Accept Terms and Conditions" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Register
                </Button>
                <p>Already have an account? <Link to='/login'>Please Login</Link></p>
            </Form>
            <Social></Social>
        </div>
    );
};

export default Register;