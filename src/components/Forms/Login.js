import React, { } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import img from '../../img/contact.png'

// ------------imported link--------------------

const Login = () => {
    const { signInUingGoogle, handleLogin, handleEmail, handlePassword } = useAuth()

    //  redirect on page after reload------------------/

    const location = useLocation();
    const history = useHistory()
    // console.log(location.state?.form)
    const redirect_url = location.state?.from || "/"

    const googleloginhandle = () => {
        signInUingGoogle()
            .then(result => {
                history.push(redirect_url)

            })


    }

    return (
        <div >
            <h1 className="pt-4">Make <span className="text-primary fw-bold ">appointment</span></h1>

            <Container className="my-5 py-5">

                <Row>
                    <Col className="bg-c p-4 " xs={12} md={6}>

                        <h1 className="text-success p-4">Please Login</h1>

                        {/* loging form */}


                        <form onSubmit={handleLogin}

                        >
                            <input onChange={handleEmail}
                                type="email"
                                placeholder="email "
                                name=""
                                id="" />
                            <br />
                            <br />
                            <input
                                onChange={handlePassword}
                                type="password"
                                placeholder="password"
                                name=""
                                id="" />
                            <br /><br />
                            <button type="submit" className="px-4 m-2 btn-success">Log In</button>

                            <br />
                            <br />
                            <button onClick={googleloginhandle} className="btn-warning p-2 ">Log in with Google</button>
                        </form>





                        <br />

                        {/* toggol text you can go registe route by click it */}

                        <Link to="/register" className="text-primary my-4">New user?please Register</Link>

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