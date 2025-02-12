import React from 'react';
import { Container, Card, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function About() {
  return (
    <Container>
      <Card className="about mt-5 text-center"> 
        <Card.Header className="about__header">Acerca de</Card.Header> 
        <Card.Body className="about__body"> 
          <Card.Title className="about__title">Información sobre nosotros.</Card.Title> 
          <Card.Text className="about__text"> {}
            Arturo Jose Bolivar Sanchez<br />
            Actividad Extraordinaria<br />
            Master En Ingenieria del Software y Sistemas Informaticos<br />
            Desarrollo Web Full Stack<br />
            MISSI - PER 9208 - Febrero 2024<br />
          </Card.Text>
          <Link to="/peliculas" className="about__link"> 
            <Button variant="primary">Ir a Coleccion de Peliculas</Button>
          </Link>
        </Card.Body>
        <Card.Footer className="about__footer text-muted">© 2025 ArbolS Tech</Card.Footer> 
      </Card>
    </Container>
  );
}

export default About;