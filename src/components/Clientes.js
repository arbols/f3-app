import React from 'react';
import { Container, Card, Table } from 'react-bootstrap';

function Clientes() {
  const clientes = [
    { id: 1, documento: '1084729587', nombre: 'Arturo Jose', apellido: 'Bolivar', telefono: '3014070852', direccion:'Calle 7', email:'arturobol@gmail.com' },
    { id: 2, documento: '19610345', nombre: 'Rafael', apellido: 'Bolivar', telefono: '3126152034', direccion:'Calle 5', email:'rafaelboli@hotmail.com' },
  ];

  return (
    <Container>
      <Card className="text-center mt-5">
        <Card.Header>Listado de Clientes</Card.Header>
        <Card.Body>
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>ID</th>
                <th>Documento</th>
                <th>Nombre</th>
                <th>Apellido</th>
                <th>Telefono</th>
                <th>Dirección</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {clientes.map((cliente) => (
                <tr key={cliente.id}>
                  <td>{cliente.id}</td>
                  <td>{cliente.documento}</td>
                  <td>{cliente.nombre}</td>
                  <td>{cliente.apellido}</td>
                  <td>{cliente.telefono}</td>
                  <td>{cliente.direccion}</td>
                  <td>{cliente.email}</td>
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

export default Clientes;