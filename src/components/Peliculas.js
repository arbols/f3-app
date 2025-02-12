import React from 'react';
import { Container, Card, Button, Table } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

function Peliculas() {
  const peliculas = [
    { id: 1, titulo: 'El Padrino', genero: 'Drama', director: 'Francis Ford Coppola', estado: '0' },
    { id: 2, titulo: 'La La Land', genero: 'Musical', director: 'Damien Chazelle', estado: '1' },
    { id: 3, titulo: 'La La Land', genero: 'Musical', director: 'Damien Chazelle', estado: '0' },
    { id: 4, titulo: 'Interestelar', genero: 'Ciencia Ficción', director: 'Christopher Nolan', estado: '0' },
  ];

  const navigate = useNavigate();

  const handleAlquilar = (pelicula) => {
    if (pelicula.estado === '0') {
      console.log(`Alquilando ${pelicula.titulo}`);
      navigate('/alquiler');
    }
  };

  return (
    <Container>
      <Card className="text-center mt-5">
        <Card.Header>Listado de Peliculas</Card.Header>
        <Card.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Título</th>
                <th>Género</th>
                <th>Director</th>
                <th>Estado</th>
                <th>Acciones</th>
              </tr>
            </thead>
            <tbody>
              {peliculas.map((pelicula) => (
                <tr key={pelicula.id}>
                  <td>{pelicula.id}</td>
                  <td>{pelicula.titulo}</td>
                  <td>{pelicula.genero}</td>
                  <td>{pelicula.director}</td>
                  <td>{pelicula.estado === '0'? 'Disponible': 'Alquilada'}</td>
                  <td>
                    {pelicula.estado === '0' && (
                      <Button 
                        variant="success" 
                        size="sm"
                        onClick={() => handleAlquilar(pelicula)}
                      >
                        Alquilar
                      </Button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Card.Body>
        <Card.Footer className="text-muted">© 2025 ArbolS Tech</Card.Footer>
      </Card>
    </Container>
  );
}

export default Peliculas;