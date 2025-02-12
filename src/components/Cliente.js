import React, { useState } from 'react';
import { Container, Card, Button, Form, Row, Col } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';

function Cliente() {
  const [nuevoCliente, setNuevoCliente] = useState({
    doc: '',
    nombre: '',
    apellido: '',
    telefono: '',
    direccion: '',
    email: '',
  });

  const navigate = useNavigate();

  const handleChange = (e) => {
    setNuevoCliente({
    ...nuevoCliente,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log('Nuevo cliente:', nuevoCliente);
    navigate('/clientes');
  };

  return (
    <Container>
      <Card className="mt-5">
        <Card.Header className="text-center">Nuevo Cliente</Card.Header>
        <Card.Body>
          <Form onSubmit={handleSubmit}>

            <Row>
                <Col md={6}>

                    <Form.Group controlId="doc">
                    <Form.Label>Numero de Documento *</Form.Label>
                    <Form.Control
                        type="number"
                        name="doc"
                        value={nuevoCliente.doc}
                        onChange={handleChange}
                        required
                    />
                    </Form.Group>

                    <Form.Group controlId="nombre">
                    <Form.Label>Nombres *</Form.Label>
                    <Form.Control
                        type="text"
                        name="nombre"
                        value={nuevoCliente.nombre}
                        onChange={handleChange}
                        required
                    />
                    </Form.Group>

                    <Form.Group controlId="apellido">
                    <Form.Label>Apellidos *</Form.Label>
                    <Form.Control
                        type="text"
                        name="apellido"
                        value={nuevoCliente.apellido}
                        onChange={handleChange}
                        required
                    />
                    </Form.Group>

                </Col>
                <Col md={6}>

                    <Form.Group controlId="telefono">
                    <Form.Label>Numero de Telefono *</Form.Label>
                    <Form.Control
                        type="number"
                        name="telefono"
                        value={nuevoCliente.telefono}
                        onChange={handleChange}
                        required
                    />
                    </Form.Group>

                    <Form.Group controlId="direccion">
                    <Form.Label>Dirección *</Form.Label>
                    <Form.Control
                        type="text"
                        name="direccion"
                        value={nuevoCliente.direccion}
                        onChange={handleChange}
                        required
                    />
                    </Form.Group>

                    <Form.Group controlId="email">
                    <Form.Label>Email *</Form.Label>
                    <Form.Control
                        type="email"
                        name="email"
                        value={nuevoCliente.email}
                        onChange={handleChange}
                        required
                    />
                    </Form.Group>

                </Col>
            </Row>

            <div className="d-flex justify-content-center mt-3"> {}
              <Button variant="primary" type="submit" className="me-2">
                Guardar
              </Button>
              <Link to="/clientes">
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

export default Cliente;