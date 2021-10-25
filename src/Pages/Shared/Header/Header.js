import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';

const Header = () => {
    const { user, logOut } = useAuth();
    return (
        <>
            <Navbar bg="dark" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand as={HashLink} to="/home#home">Genius Car Mechanics</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav" className="justify-content-end">
                        <Nav className="me-auto">
                            <Nav.Link as={HashLink} to="/home#home">Home</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#services">Services</Nav.Link>
                            <Nav.Link as={HashLink} to="/home#experts">Experts</Nav.Link>
                            <Nav.Link as={HashLink} to="/addService">Add Sevice</Nav.Link>
                        </Nav>
                        <Nav className="me-3">
                            {user.displayName ?
                                <Nav.Link as={Link} to="/login"><Button variant="outline-light" onClick={logOut}>Logout</Button></Nav.Link> :
                                <Nav.Link as={Link} to="/login"><Button variant="outline-light">Login</Button></Nav.Link>}
                        </Nav>
                        <Navbar.Text>
                            Signed in as: <a href="#login">{user.displayName && user.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    );
};

export default Header;