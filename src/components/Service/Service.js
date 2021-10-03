import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import './Service.css'

const Service = (props) => {
    const { name, img, price, details } = props.service;
    return (
        /* individual item */
        <Col>
            <Card className="bg-info p-2 text-dark bg-opacity-25">
                <Card.Img variant="top" className="img-style" src={img} />
                <Card.Body>
                    <Card.Title className="fs-3">{name}</Card.Title>
                    <Card.Text>
                        {details}
                    </Card.Text>
                    <h4>Price: <span className="text-primary">${price}</span></h4>
                </Card.Body>
                <Card.Footer>
                    <div className="d-grid">
                        <Button variant="outline-primary" size="lg">
                            Enroll Now!
                        </Button>
                    </div>
                </Card.Footer>
            </Card>
        </Col>
    );
};

export default Service;