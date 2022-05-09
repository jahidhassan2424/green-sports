import React from 'react';
import './Header.css'
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { signOut } from 'firebase/auth';
import auth from '../../firebase.init';

const Header = () => {
    const navigate = useNavigate();
    const [user, loading, error] = useAuthState(auth);

    const handleSignOut = () => {

        const confirmation = window.confirm('Are you sure?')
        if (confirmation) {
            signOut(auth);
        }
        else {
            navigate('/');
        }

    }
    return (
        <div>

            <Navbar sticky="top" collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Container >
                    <Navbar.Brand className='fs-1' as={Link} to="/home">GREEN SPORTS</Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="me-auto">


                        </Nav>
                        <Nav>
                            <Nav.Link as={Link} className='text-uppercase  text-white hover-effect' to="/">HOME</Nav.Link>
                            <Nav.Link as={Link} className='text-uppercase  text-white hover-effect ' to="/manageItems">Manage Items</Nav.Link>
                            <Nav.Link as={Link} className='text-uppercase  text-white hover-effect ' to="/blogs">Blogs</Nav.Link>

                            {
                                user ?
                                    <>
                                        <Nav.Link as={Link} className='text-uppercase  text-white hover-effect' to="/myItem">My Items</Nav.Link>
                                        <Nav.Link onClick={handleSignOut} as={Link} className='text-uppercase  text-white hover-effect' to="/login">Logout</Nav.Link>

                                    </>
                                    :
                                    <Nav.Link as={Link} className='text-uppercase  text-white hover-effect' to="/login">LOGIN</Nav.Link>
                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
};

export default Header;