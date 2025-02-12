import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Container, Navbar, Nav } from 'react-bootstrap';

import Home from './components/Home';
import Peliculas from './components/Peliculas';
import Pelicula from './components/Pelicula';
import Clientes from './components/Clientes';
import Cliente from './components/Cliente';
import Alquiler from './components/Alquiler';
import Devolver from './components/Devolver';
import About from './components/About';
import Buscar from './components/Buscar';

function App() {
  return (
    <Router>
      <Navbar bg="light" expand="lg"> {}
        <Container>
          <Navbar.Brand href="/">Mi Peli</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as={Link} to="/">Inicio</Nav.Link>
              <Nav.Link as={Link} to="/peliculas">Peliculas</Nav.Link>
              <Nav.Link as={Link} to="/buscar">Buscar Peliculas</Nav.Link>
              <Nav.Link as={Link} to="/pelicula">Nueva Pelicula</Nav.Link>
              <Nav.Link as={Link} to="/clientes">Clientes</Nav.Link>
              <Nav.Link as={Link} to="/cliente">Nuevo Cliente</Nav.Link>
              <Nav.Link as={Link} to="/devolver">Devolver Pelicula</Nav.Link>
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
        <Route path="/alquiler" element={<Alquiler />} />
        <Route path="/devolver" element={<Devolver />} />
        <Route path="/about" element={<About />} />
        <Route path="/buscar" element={<Buscar />} />
      </Routes>
    </Router>
  );
}

export default App;