import React from 'react';
import { Row } from 'react-bootstrap';
import useServices from '../../hooks/useServices';
import Service from '../Service/Service';

const Services = () => {
    const [services] = useServices();
    return (
        <div className="container">
            {/* main service section */}
            <h2>Welcome To Course Section</h2>
            <h4>Our Main lessons: {services.length}</h4>
            <Row xs={1} md={3} className="g-4">
                {
                    services.map(service => <Service key={service.id} service={service}></Service>)
                }
            </Row>
        </div>
    );
};

export default Services;