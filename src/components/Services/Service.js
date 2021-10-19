import React from 'react';
import { Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = (props) => {
    const { id, name, img, fee, des } = props.service


    return (
        <div>

            <Col>
                <Card className="py-4">
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <h4> ${fee}</h4>
                        <Card.Text>
                            {des}
                        </Card.Text>


                    </Card.Body>
                    <Link to={`/details/${id}`}><button className="btn-warning px-5">View Detail</button> </Link>
                </Card>
            </Col>


        </div >
    );
};

export default Service;