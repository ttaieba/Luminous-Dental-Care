import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useFirebase from '../../hooks/useFirebase';
import img from '../../img/contact.png'



const Login = () => {
    const { signInUingGoogle } = useFirebase()
    return (
        <div >
            <h1>Make <span className="text-primary fw-bold">appointment</span>  We <br />
                always welcome new <br />
                patients</h1>

            <Container className="my-5 py-5">

                <Row>
                    <Col className="bg-c p-4 " xs={12} md={6}>

                        <h1 className="text-success p-4">Please Login</h1>
                        <input type="email" placeholder="email " name="" id="" />
                        <br />
                        <br />
                        <input type="password" placeholder="password" name="" id="" />
                        <br /><br />





                        <button onClick={signInUingGoogle} className="btn-warning p-2 ">Log in with Google</button>

                        <br />



                        <Link to="/register" className="text-primary my-4">New user? please Register</Link>

                    </Col>
                    <Col xs={6} md={6}>
                        <img src={img} alt="" />
                    </Col>

                </Row>


            </Container>
        </div >
    );
};

export default Login;