import React, { useState } from 'react';
import { Container, Card, Button, Form, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function Devolver() {
  const [devoverAlquiler, setDevolverAlquiler] = useState({
    pelicula: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setDevolverAlquiler({
    ...devoverAlquiler,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Devolver Alquiler:', devoverAlquiler);
    navigate('/devolver');
  };

  return (
    <Container>
      <Card className="mt-5">
        <Card.Header className="text-center">Devolver Alquiler</Card.Header>
        <Card.Body>
            <Form onSubmit={handleSubmit}>

                <Row>
                    <Col md={3}>
                    </Col>

                    <Col md={6}>
                        <Form.Group controlId="pelicula">
                        <Form.Label>ID Pelicula</Form.Label>
                        <Form.Control
                            type="number"
                            name="pelicula"
                            value={devoverAlquiler.pelicula}
                            onChange={handleChange}
                            required
                        />
                        </Form.Group>
                    </Col>

                    <Col md={3}>
                    </Col>
                </Row>

                <div className="d-flex justify-content-center mt-3"> {}
                <Button variant="primary" type="submit" className="me-2">
                    Guardar
                </Button>
                <Link to="/peliculas">
                    <Button variant="secondary">Cancelar</Button>
                </Link>
                </div>

            </Form>
        </Card.Body>
        <Card.Footer className="text-muted text-center">© 2025 ArbolS Tech</Card.Footer>
      </Card>
    </Container>
  );
}

export default Devolver;