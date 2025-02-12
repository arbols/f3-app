import React, { useState } from 'react';
import { Container, Card, Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function Pelicula() {
  const [nuevaPelicula, setNuevaPelicula] = useState({
    titulo: '',
    genero: '',
    director: '',
    estado: '0',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setNuevaPelicula({
    ...nuevaPelicula,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Nueva película:', nuevaPelicula);
    navigate('/peliculas');
  };

  return (
    <Container>
      <Card className="mt-5">
        <Card.Header className="text-center">Nueva Pelicula</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="titulo">
              <Form.Label>Título</Form.Label>
              <Form.Control
                type="text"
                name="titulo"
                value={nuevaPelicula.titulo}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="genero">
              <Form.Label>Género</Form.Label>
              <Form.Control
                type="text"
                name="genero"
                value={nuevaPelicula.genero}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="director">
              <Form.Label>Director</Form.Label>
              <Form.Control
                type="text"
                name="director"
                value={nuevaPelicula.director}
                onChange={handleChange}
                required
              />
            </Form.Group>

            <Form.Group controlId="estado">
              <Form.Label>Estado</Form.Label>
              <Form.Control
                as="select"
                name="estado"
                value={nuevaPelicula.estado}
                onChange={handleChange}
              >
                <option value="0">Disponible</option>
                <option value="1">Alquilada</option>
              </Form.Control>
            </Form.Group>

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

export default Pelicula;