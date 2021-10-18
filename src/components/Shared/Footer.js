import React from 'react';
import { Col, Row } from 'react-bootstrap';
import img from '../../img/award1.png'

const Footer = () => {
    return (
        <div className=" mt-5">

            <Row xs={1} lg={4} className="g-4 bg-success p-5 text-start">

                <Col>
                    <>
                        <h3>Luminous Dental care</h3>

                        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Sint officia, atque distinctio deserunt maxime impedit quod neque omnis? Voluptates ratione tempore, voluptas animi ipsa placeat voluptatum blanditiis velit nobis laudantium.</p>
                    </>
                </Col>
                <Col>
                    <>
                        <h3>Useful Links</h3>
                        <p>FAQs</p>
                        <p>Blog</p>
                        <p>Weekly timetable</p>
                        <p>Terms & Conditions</p>
                    </>
                </Col>
                <Col>
                    <>
                        <h3>Contacts</h3>
                        <p>1223 Fulton Street Sanb
                            <br />
                            Diego CA 941-23 USA</p>
                        <p>luminousto@Gmail.Com</p>
                        <p>(+01) - 234 567 890
                            <br />
                            (+01) - 345 678 901</p>

                    </>
                </Col>
                <Col>
                    <>
                        <h3>Quality check
                        </h3>
                        <img src={img} alt="" />

                    </>
                </Col>

            </Row>

        </div>
    );
};

export default Footer;