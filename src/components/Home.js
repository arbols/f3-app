import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <Container>
      <Card className="text-center mt-5">
        <Card.Header>Página de inicio</Card.Header>
        <Card.Body>
          <Card.Title>Bienvenido a nuestra aplicación</Card.Title>
          <Card.Text>{}
          </Card.Text>
          <Link to="/peliculas"> {}
            <Button variant="primary">Ir a Coleccion de Peliculas</Button>
          </Link>
        </Card.Body>
        <Card.Footer className="text-muted">© 2025 ArbolS Tech</Card.Footer>
      </Card>
    </Container>
  );
}

export default Home;