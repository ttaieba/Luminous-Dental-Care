import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import img from '../../img/avatar-1.png'
import img1 from '../../img/avatar3.png'
import img2 from '../../img/avatar4.png'

const Testimonial = () => {
    return (
        <Container>
            <div className="testimonial text-center   ">
                <p className="text-primary">--Testimonial--</p>
                <h1>All that our clients have said <br />
                    about our work</h1>
                <Row className=" ">

                    <Col md={4} className="testymoni-bg" >

                        <img src={img} alt="" />
                        <h5>Nender myles </h5>

                        <p className=" "> The excellent Doctors have inspired our daughter to set herself goals and achieve. She has loved her time at Greenville. The strong emphasis on moral and character </p>
                    </Col>
                    <Col md={4} className="text-center testymoni-bg ">

                        <img src={img1} alt="" />
                        <h5>Cynthia Jefferson</h5>

                        <p className=" "> The excellent Doctors have inspired us to set herself goals and achieve. She has loved her time at Greenville. The strong emphasis on moral and character development,</p>
                    </Col>
                    <Col md={4} className="text-center testymoni-bg ">

                        <img src={img2} alt="" />
                        <h5>Cynthia Jefferson</h5>

                        <p className=" "> All the entDoctors have has good  our to set care teatment and achieve. She has loved her time at Greenville. The strong emphasis on moral and character development.</p>
                    </Col>
                </Row>
            </div>
        </Container>
    );
};

export default Testimonial;