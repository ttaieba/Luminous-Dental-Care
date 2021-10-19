import React, { useEffect, useState } from 'react';
import { Card, Container } from 'react-bootstrap';

import {
    Link,
    useParams
} from "react-router-dom";

// imported sources-------------------------------



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

    // -----------------------------------------------

    return (
        <div className="text-start">
            <h1 className="text-primary" > Our service details </h1>
            <Container>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={singldetails?.img} />
                    <Card.Body>
                        <Card.Title>{singldetails?.name}</Card.Title>
                        <h4> ${singldetails?.fee}</h4>
                        <Card.Text>
                            {singldetails?.des}
                        </Card.Text>

                        <Link to="/home"><button className="btn-warning px-4">Go back</button> </Link>


                    </Card.Body>
                </Card>
            </Container>
        </div >
    );
};

export default Details;




