import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';


import {
    Link,
    useParams
} from "react-router-dom";





const Details = () => {
    let { detailsId } = useParams();
    const [details, setDetails] = useState([]);
    const [singldetails, setsingldetails] = useState({});

    useEffect(() => {
        fetch('/singleservice.json')
            .then(res => res.json())
            .then(data => setDetails(data))
    }, [])


    useEffect(() => {
        const singledata = details.find(detail => detail.id === detailsId)
        setsingldetails(singledata)

    }, [details])



    return (
        <div className="text-start">
            <h1 className="text-primary" > Our service details </h1>
            <Container>
                <Row md={2} xs={12}  >
                    <Col className="bg-secondary typo">
                        <Card className="py-4 bg-light">
                            <Card.Img className="pic" variant="top" src={singldetails?.img} />
                            <Card.Body className="">
                                <Card.Title>{singldetails?.name}</Card.Title>
                                <h4> ${singldetails?.fee}</h4>
                                <Card.Text>
                                    {singldetails?.des}
                                </Card.Text>

                                <Link to="/home"><button className="btn-warning px-4">Go back</button> </Link>
                            </Card.Body>

                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Details;