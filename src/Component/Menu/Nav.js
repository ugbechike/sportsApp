import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import {Navbar, Nav, NavDropdown, Container, Button} from 'react-bootstrap';
import './Nav.css';
import Logo from '../../Assets/logo.png';

class Navigation extends Component {
    render() {
        return (
            <Navbar bg="light" expand="lg">
                    <Container>
                <Navbar.Brand><Link to="/home"><img className="logo" src={Logo} alt="logo"/></Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto">
                        <Nav><NavLink to="/home">News</NavLink></Nav>
                        <Nav><NavLink to="/fixtures">Fixtures</NavLink></Nav>
                        <Nav><NavLink to="/competitions">Competitions</NavLink></Nav>
                        <Nav><NavLink to="/teams">Teams</NavLink></Nav>
                        <Nav><NavLink to="/transfer">Transfer</NavLink></Nav>
                    </Nav>
                    <Button>Login/Sign Up</Button>
                        {/* <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                            <NavDropdown.Divider />
                            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                        </NavDropdown> */}
                </Navbar.Collapse>
            </Container>
            </Navbar>
        );
    }
}

export default Navigation;