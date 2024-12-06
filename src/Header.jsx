import React, { useState } from "react";
import { FaCartPlus } from "react-icons/fa";
import { Navbar, Nav, Container, NavDropdown } from "react-bootstrap";
import './App.css'; // Include your custom styles here

const NavbarComponent = () => {
  const [cartCount, setCartCount] = useState(0); // State to manage cart count

  return (
    <Navbar expand="lg" className="navbar">
      <Container>
        {/* Brand Logo */}
        <Navbar.Brand href="#" className="nav-logo text-start">
          <p className="mb-0">KANDHAVILAS</p>
        </Navbar.Brand>

        {/* Toggler for smaller screens */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" className="margin"/>

        <Navbar.Collapse id="basic-navbar-nav">
          {/* Navigation Links with Dropdown Menus */}
          <Nav className="ms-auto align-items-lg-center ">
            <Nav.Link href="#" className="me-3">Home</Nav.Link>

            <NavDropdown title="Sweets" id="sweets-dropdown" className="me-3">
              <NavDropdown.Item href="#pages-action1">Kaju Sweets</NavDropdown.Item>
              <NavDropdown.Item href="#pages-action2">Special Sweets</NavDropdown.Item>
              <NavDropdown.Item href="#pages-action3">Halwa</NavDropdown.Item>
              <NavDropdown.Item href="#pages-action4">Laddu</NavDropdown.Item>
              <NavDropdown.Item href="#pages-action5">Soan Papdi</NavDropdown.Item>
              <NavDropdown.Item href="#pages-action6">Milk Sweet</NavDropdown.Item>
              <NavDropdown.Item href="#pages-action7">Traditional Sweets</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Savories" id="savories-dropdown" className="me-3">
              <NavDropdown.Item href="#savories-action1">Mixtures</NavDropdown.Item>
              <NavDropdown.Item href="#savories-action2">Murukus</NavDropdown.Item>
              <NavDropdown.Item href="#savories-action3">Boondhi</NavDropdown.Item>
              <NavDropdown.Item href="#savories-action4">Masala Nuts</NavDropdown.Item>
              <NavDropdown.Item href="#savories-action5">Sev & Seedai</NavDropdown.Item>
            </NavDropdown>

            <NavDropdown title="Special Items" id="special-items-dropdown" className="me-3">
              <NavDropdown.Item href="#special-items-action1">Coconut Opputtu</NavDropdown.Item>
              <NavDropdown.Item href="#special-items-action2">Parrupu Opputtu</NavDropdown.Item>
              <NavDropdown.Item href="#special-items-action3">Samosa</NavDropdown.Item>
            </NavDropdown>

            <Nav.Link href="#" className="me-3">SweetBox</Nav.Link>
            <Nav.Link href="#" className="me-3">Blog</Nav.Link>
            <Nav.Link href="#" className="me-3">Contact</Nav.Link>

            {/* Login Button inside Nav */}
            <Nav.Link href="#" className="me-3">
              Login
            </Nav.Link>

            {/* Cart Icon with Count inside Nav */}
            <div className="position-relative d-flex align-items-center">
              <FaCartPlus size={30} />
              {/* Cart Count Badge */}
              <span
                className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger"
                style={{ fontSize: "0.75rem" }}
              >
                {cartCount}
              </span>
            </div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
