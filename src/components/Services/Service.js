import React from 'react';
import { Card, Col } from 'react-bootstrap';

const Service = (props) => {
    const { name, img, fee, des } = props.service


    return (
        <div>

            <Col>
                <Card>
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>
                        <h4> ${fee}</h4>
                        <Card.Text>
                            {des}
                        </Card.Text>
                        <button>View deails</button>
                    </Card.Body>
                </Card>
            </Col>


        </div>
    );
};

export default Service;