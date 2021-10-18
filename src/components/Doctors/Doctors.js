import React from 'react';
import { Card, Col, Row, Container, Button } from 'react-bootstrap';
import img1 from '../../img/member1.jpg'
import img2 from '../../img/member2.png'
import img3 from '../../img/member3.png'
import img from '../../img/wave1.png'

const Doctors = () => {
    return (
        <div className="p-5">
            <Container>
                <h5><small><img className="wave" src={img} alt="" />Our Doctors<img className="wave" src={img} alt="" />
                </small></h5>
                <h1>Professional staff at our <br />  <span className="text-primary">dental</span>  hospital

                </h1>

                <Row xs={1} lg={3} className="g-4">
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={img1} />
                            <Card.Body>
                                <Card.Title>Dr. Vera Hasson</Card.Title>

                                <Card.Text >
                                    Cardiology

                                </Card.Text>
                                <Button variant="outline-info">Appointment</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={img3} />
                            <Card.Body>
                                <Card.Title>Dr.Jeanetty Hoff</Card.Title>

                                <Card.Text>
                                    Surgery

                                </Card.Text>
                                <Button variant="outline-info">Appointment</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={img2} />
                            <Card.Body>
                                <Card.Title>Dr. Philip Balley</Card.Title>

                                <Card.Text >
                                    Urology
                                </Card.Text>
                                <Button variant="outline-info">Appointment</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Doctors;