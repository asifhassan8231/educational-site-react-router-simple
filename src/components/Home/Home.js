import React from 'react';
import { Col, Form, Row, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';

const Home = () => {
    const [services] = useServices();
    /* slicing the services array to show only four items */
    const mainServices = services.slice(0, 4);
    return (
        <div className="container">
            <div className="my-5">
                <h2>Our Top Trending Courses:</h2>
            </div>
            <Row xs={1} md={2} className="g-4">
                {
                    mainServices.map(service => <Service key={service.id} service={service}></Service>)
                }
            </Row>
            <div>
                <Link to="/services" className="fs-5">See more...</Link>
            </div>
            {/* bottom section for user engagement */}
            <div className="my-5 bg-info bg-opacity-50 p-2 border border-info rounded">
                <div>
                    <h2>Sign Up for our Exciting 100 Days Rejection Challange, Now!</h2>
                </div>
                <div className="my-5">
                    <Form>
                        <Row className="my-3">
                            <Col>
                                <Form.Control placeholder="First name" />
                            </Col>
                            <Col>
                                <Form.Control placeholder="Last name" />
                            </Col>
                        </Row>
                        <Row className="my-3">
                            <Col>
                                <Form.Control type="email" placeholder="Your email here" /></Col>
                        </Row>
                        <Row className="my-3">
                            <div className="d-grid">
                                <Button variant="primary" size="md" className="text-white fs-5">
                                    Submit
                                </Button>
                            </div>
                        </Row>
                    </Form>
                </div>
            </div>
        </div>
    );
};

export default Home;