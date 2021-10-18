import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';

const Topbar = () => {
    const { user, logout } = useFirebase()
    return (
        <div>

            <Navbar className="topbar" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Luminous dental care</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">

                        <Nav.Link as={Link} className="text-white" to="/home#home">Home</Nav.Link>
                        <Nav.Link as={Link} className="text-white" to="/home#services">Services</Nav.Link>
                        <Nav.Link as={Link} className="text-white" to="/home#blog"> Blog</Nav.Link>


                        {user?.email ? <Button onClick={logout} className="me-3" variant="light">Logout</Button>


                            : <Nav.Link as={Link} className="text-white" to="/login"> Login</Nav.Link>}




                        <Navbar.Text>
                            user: <a href="#login">{user.displayName}</a>
                        </Navbar.Text>
                    </Navbar.Collapse>

                </Container>
            </Navbar>

        </div>
    );
};

export default Topbar;