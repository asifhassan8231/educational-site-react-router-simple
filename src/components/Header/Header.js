import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
            <Container>
                <Navbar.Brand href="#home">Rejection Therapy</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto">
                        <NavLink to="/home"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }} className="nav-link">Home</NavLink>
                        <NavLink to="/services"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }} className="nav-link">
                            Our Services
                        </NavLink>
                        <NavLink to="/blogs"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }} className="nav-link">
                            Reader's Cafe
                        </NavLink>
                        <NavLink to="/about"
                            activeStyle={{
                                fontWeight: "bold",
                                color: "red"
                            }} className="nav-link">
                            About Us
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default Header;