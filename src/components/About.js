import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function About() {
  return (
    <Container>
      <Card className="text-center mt-5">
        <Card.Header>Acerca de</Card.Header>
        <Card.Body>
          <Card.Title>Información sobre nosotros.</Card.Title>
          <Card.Text>{}
                Arturo Jose Bolivar Sanchez<br />
                Actividad Extraordinaria<br />
                Master En Ingenieria del Software y Sistemas Informaticos<br />
                Desarrollo Web Full Stack<br />
                MISSI - PER 9208 - Febrero 2024<br />
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

export default About;