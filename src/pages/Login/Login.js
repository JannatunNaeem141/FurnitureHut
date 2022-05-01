import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Social from '../Social/Social';
import './Login.css'

const Login = () => {

    const handleSubmit = event => {
        event.preventDefault();
    }
    return (
        <div className='login-section'>
            <h2>Login</h2>
            <Form className='form' onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Enter email" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Login
                </Button>
                <p>New Here? <Link to='/register'>Please Register</Link></p>
                <p>Forget Password? <Link to='/login'>Reset Password</Link></p>
            </Form>
            <Social></Social>
        </div>
    );
};

export default Login;