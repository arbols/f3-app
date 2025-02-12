import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap'; // Importa componentes de React-Bootstrap
import Home from './components/Home';
import Peliculas from './components/Peliculas';
import Pelicula from './components/Pelicula';
import Clientes from './components/Clientes';
import Cliente from './components/Cliente';
import Alquiler from './components/Alquiler';
import About from './components/About';

function App() {
  return (
    <Router>
      <Navbar bg="light" expand="lg"> {/* Usa componentes de React-Bootstrap */}
        <Container>
          <Navbar.Brand href="/">Mi Aplicación</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/">Inicio</Nav.Link>
              <Nav.Link as={Link} to="/peliculas">Peliculas</Nav.Link>
              <Nav.Link as={Link} to="/pelicula">Nueva Pelicula</Nav.Link>
              <Nav.Link as={Link} to="/clientes">Clientes</Nav.Link>
              <Nav.Link as={Link} to="/about">Acerca de</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/peliculas" element={<Peliculas />} />
        <Route path="/pelicula" element={<Pelicula />} />
        <Route path="/clientes" element={<Clientes />} />
        <Route path="/cliente" element={<Cliente />} />
        <Route path="/Alquiler" element={<Alquiler />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  );
}

export default App;