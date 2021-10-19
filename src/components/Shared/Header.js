import React from 'react';
import { Carousel } from 'react-bootstrap';
import img from '../../img/bannar-12-4.jpg'
import img1 from '../../img/bannar-12.jpg'


const Header = () => {
    return (
        <div>
            <Carousel>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img}
                        alt="First slide"
                    />
                    <Carousel.Caption>
                        <h1 className="text-dark ">
                            Our hospital always
                            Provides high quality </h1>
                        <h3 className="text-primary fw-bold">Dental services
                        </h3>
                    </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                    <img
                        className="d-block w-100"
                        src={img1}
                        alt="Second slide"
                    />

                    <Carousel.Caption>
                        <h1 className="text-dark">
                            Way to get happy. <br />
                            Best promises.
                        </h1>
                    </Carousel.Caption>
                </Carousel.Item>

            </Carousel>
        </div>
    );
};

export default Header;