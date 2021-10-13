import React from "react";
import { Container, Nav, Navbar, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import useAuth from "../../../Hooks/useAuth";
import { HashLink } from "react-router-hash-link";

const Header = () => {
  const { user, logOut } = useAuth();
  return (
    <Navbar
      style={{ height: 50 }}
      sticky="top"
      bg="dark"
      variant="dark"
      expand="lg"
    >
      <Container>
        <Navbar.Brand className="fw-bold" href="/">
          Genius Car Mechanics
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={HashLink} to="/home#home">
              Home
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#services">
              Services
            </Nav.Link>
            <Nav.Link as={HashLink} to="/home#exparts">
              Exparts
            </Nav.Link>
          </Nav>
          {user.displayName ? (
            <>
              <Navbar.Text>
                Signed in as:{" "}
                <small className="fw-bold text-warning">
                  {user.displayName}
                </small>
              </Navbar.Text>
              <Button onClick={logOut} className="ms-3" variant="danger">
                Logout
              </Button>
            </>
          ) : (
            <Button variant="success" as={Link} to="/login">
              Login
            </Button>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Header;
