import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import img from '../../img/about.png'
import img2 from '../../img/wave2.png'

const About = () => {
    return (

        <Container>

            <h1 className="mt-5 pt-4">Learn about our <span className="text-primary"
            >hospital</span><br />
                activities</h1>

            <h5><small><img className="wave" src={img2} alt="" />About us<img className="wave" src={img2} alt="" />
            </small></h5>
            <Row >
                <Col sm={8} lg={6}>
                    <img className="w-75" src={img} alt="" />

                </Col>
                <Col sm={4} lg={6} className="py-5 ">
                    <h1>We have been working in <br /> the dental treatment <br /> profession for about 25 years long.</h1>
                    <p>Dentistry, also known as dental medicine and oral medicine, is a branch of medicine that consists of the study, diagnosis, prevention, and treatment of diseases, disorders, and conditions of the oral .Dentistry, also known as dental medicine and oral medicine, is a branch of medicine that consists of the study, diagnosis, prevention, and treatment of diseases, disorders, and conditions of the oral .</p>

                    <Link to="/about"><button className="btn-warning px-5"
                    >Read more</button></Link>


                </Col>

            </Row>
        </Container>

    );
};

export default About;