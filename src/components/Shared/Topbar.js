import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { HashLink } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBuilding, faUser } from '@fortawesome/free-solid-svg-icons'

// imported ---------------------------------------------/

const element = <FontAwesomeIcon icon={faUser} />
// -----------font awsome------------

const Topbar = () => {

    const { user, logout } = useAuth()

    // -----------------------------/
    return (
        <div>

            {/* link to all pages */}

            <Navbar className="topbar" variant="dark" sticky="top" collapseOnSelect expand="lg">
                <Container>
                    <Navbar.Brand href="#home"><FontAwesomeIcon icon={faBuilding} /> Luminous dental care</Navbar.Brand>
                    <Navbar.Toggle />
                    <Navbar.Collapse className="justify-content-end">


                        <Nav.Link as={HashLink} className="text-white" to="/home#home">Home</Nav.Link>



                        <Nav.Link as={Link} className="text-white" to="/doctors">Our Doctors</Nav.Link>





                        <Nav.Link as={Link} className="text-white" to="/services">Services</Nav.Link>

                        <Nav.Link as={Link} className="text-white" to="/blogs"> Blogs</Nav.Link>


                        <Nav.Link as={Link} className="text-white" to="/testimonial"> Testimonial</Nav.Link>


                        {user?.email ? <Button onClick={logout} className="me-3" variant="light">Logout</Button>


                            : <Nav.Link as={Link} className="text-white" to="/login"> Login</Nav.Link>}


                        {/* display use name */}

                        <Navbar.Text>
                            {element} <a href="#login">{user.displayName}</a>

                        </Navbar.Text>
                    </Navbar.Collapse>

                </Container>
            </Navbar>

        </div>
    );
};

export default Topbar;