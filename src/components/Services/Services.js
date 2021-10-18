import React, { useEffect, useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import Service from './Service';
import img from '../../img/wave2.png'

const Services = () => {
    const [services, setServices] = useState([])


    useEffect(() => {
        fetch('./services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <Container>
                <div className="py-4 text-primary">
                    <h5><small><img className="wave" src={img} alt="" />Services<img className="wave" src={img} alt="" />
                    </small></h5>
                    <h1>The main feature of our service <br />
                        is to serve the patient.</h1>
                </div>
                <Row xs={1} lg={3} className="g-4">

                    {
                        services.map(service => <Service

                            key={service.id}
                            service={service}


                        ></Service>)
                    }

                </Row>






            </Container>

        </div>
    );
};

export default Services;