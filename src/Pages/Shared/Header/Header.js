import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <Navbar sticky="top" bg="dark" variant="dark" expand="lg">
      <Container>
        <Navbar.Brand className="fw-bold" href="/">
          Genius Car Mechanics
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/home#home">
              Home
            </Nav.Link>
            <Nav.Link as={Link} to="/home#services">
              Services
            </Nav.Link>
            <Nav.Link as={Link} to="/home#exparts">
              Exparts
            </Nav.Link>
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
          </Nav>
          <Navbar.Text>
            Signed in as: <a href="#login">Mark Otto</a>
          </Navbar.Text>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
