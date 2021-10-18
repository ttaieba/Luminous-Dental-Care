import React from 'react';
import { Card, Col, Row, Container, Button } from 'react-bootstrap';
import img1 from '../../img/blog-2.jpg'
import img2 from '../../img/blog-3.jpg'
import img from '../../img/wave1.png'

const Blogs = () => {
    return (
        <div className="p-5">
            <Container>
                <h5><small><img className="wave" src={img} alt="" />News & Article<img className="wave" src={img} alt="" />
                </small></h5>
                <h1>Read the  <span className="text-primary">updated news</span>  about <br />
                    dental treatment</h1>

                <Row xs={1} lg={3} className="g-4">
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={img1} />
                            <Card.Body>
                                <Card.Title>Working in emergency medicine</Card.Title>

                                <Card.Text >
                                    Aug 23, 2020 <span className="ps-4 ">Posted by: Albert Brian</span>

                                </Card.Text>
                                <Button variant="outline-info">Read more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={img2} />
                            <Card.Body>
                                <Card.Title>Individual treatment & assistance</Card.Title>

                                <Card.Text>
                                    Aug 21, 2020 <span className="ps-4 ">Posted by: James Lewis</span>

                                </Card.Text>
                                <Button variant="outline-info">Read more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col>
                        <Card>
                            <Card.Img variant="top" src={img1} />
                            <Card.Body>
                                <Card.Title>Child’s first hospital visit</Card.Title>

                                <Card.Text >
                                    Aug 22, 2020 <span className="ps-4">Posted by: William Juarez</span>

                                </Card.Text>
                                <Button variant="outline-info">Read more</Button>
                            </Card.Body>
                        </Card>
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Blogs;