import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';


const Topbar = () => {
    const { user, logout } = useAuth()
    return (
        <div>

            <Navbar className="topbar" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home">Luminous dental care</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">


                        <Nav.Link as={Link} className="text-white" to="/home#home">Home</Nav.Link>

                        <Nav.Link as={Link} className="text-white" to="/details">Details</Nav.Link>


                        <Nav.Link as={Link} className="text-white" to="/doctors">Our Doctors</Nav.Link>





                        <Nav.Link as={Link} className="text-white" to="/home#services">Services</Nav.Link>

                        <Nav.Link as={Link} className="text-white" to="/blogs"> Blogs</Nav.Link>


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