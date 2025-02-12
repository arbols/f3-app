import React, { useState } from 'react';
import { Container, Card, Button, Form, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function Buscar() {
  const [nuevoBuscar, setNuevoBuscar] = useState({
    pelicula: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setNuevoBuscar({
    ...nuevoBuscar,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Buscar Pelicula:', nuevoBuscar);
    navigate('/peliculas');
  };

  return (
    <Container>
      <Card className="mt-5">
        <Card.Header className="text-center">Buscar Pelicula</Card.Header>
        <Card.Body>
            <Form onSubmit={handleSubmit}>

                <Row>
                    <Col md={3}>
                    </Col>

                    <Col md={6}>
                        <Form.Group controlId="pelicula">
                        <Form.Label>Pelicula</Form.Label>
                        <Form.Control
                            type="text"
                            name="pelicula"
                            value={nuevoBuscar.pelicula}
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

export default Buscar;