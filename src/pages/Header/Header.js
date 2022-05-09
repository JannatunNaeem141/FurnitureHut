import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css'

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className='nav-bar'>
            <Container>
                <Navbar.Brand href="#home" as={Link} to='/'>Furniture<span>Hut</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link as={Link} to='/products' href="#products">All Furnitures</Nav.Link>
                        <Nav.Link as={Link} to='/blogs' href="#products">Blogs</Nav.Link>
                        <Nav.Link as={Link} to='/addproduct' href="#addProducts">Add Furniture</Nav.Link>
                        <Nav.Link as={Link} to='/manageall' href="#manageall">Manage All</Nav.Link>
                    </Nav>
                    <Nav>
                        <Nav.Link href="#login" as={Link} to='/login'>Login</Nav.Link>
                        <Nav.Link href="#register" as={Link} to='/register'>Register</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;