import React from 'react';
import { Button, Card, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'


const element = <FontAwesomeIcon icon={faArrowRight} />
const Service = (props) => {
    const { id, name, img, des } = props.service


    return (
        <div>

            <Col>
                <Card className="py-4">
                    <Card.Img variant="top" src={img} />
                    <Card.Body>
                        <Card.Title>{name}</Card.Title>

                        <Card.Text>
                            {des}
                        </Card.Text>


                    </Card.Body>
                    <Link to={`/details/${id}`}><Button variant="warning">View Detail {element}</Button> </Link>
                </Card>
            </Col>


        </div >
    );
};

export default Service;