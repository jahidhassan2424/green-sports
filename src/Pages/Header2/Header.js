import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from '../../firebase.init';


import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';

const Header = () => {
    const [user] = useAuthState(auth);

    return (
        <div>

            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container>
                    <Navbar.Brand as={Link} to="home">React-Bootstrap</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">
                            <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
                                <NavDropdown.Item as={Link} to="#action/3.1">Action</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="#action/3.2">Another action</NavDropdown.Item>
                                <NavDropdown.Item as={Link} to="#action/3.3">Something</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item as={Link} to="#action/3.4">Separated link</NavDropdown.Item>
                            </NavDropdown>
                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} to="home">Home</Nav.Link>
                            {
                                user
                                    ?
                                    <>
                                        <Nav.Link as={Link} to="#pricing">Manage Items</Nav.Link>
                                        <Nav.Link as={Link} to="#deets">My Items</Nav.Link>
                                    </>
                                    :
                                    <Nav.Link as={Link} to="login">Login</Nav.Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;