import React from 'react';
import { Card } from 'react-bootstrap';
import useBlogs from '../../hooks/useBlogs';

const Blogs = () => {
    const [blogs] = useBlogs();
    return (
        <div className="container">
            {/* blog section */}
            <h2>Welcome To Reader's Cafe</h2>
            <h4>Total Contribution: {blogs.length}</h4>
            {
                blogs.map(blog => (
                    <Card key={blog.title} className="bg-info p-2 text-dark bg-opacity-25">
                        <Card.Body>
                            <Card.Title>{blog.title}</Card.Title>
                            <Card.Subtitle className="mb-2 text-muted">{blog.author}</Card.Subtitle>
                            <Card.Text>{blog.description}</Card.Text>
                        </Card.Body>
                    </Card>
                ))
            }
        </div>
    );
};

export default Blogs;