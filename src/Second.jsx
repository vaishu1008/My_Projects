import React from 'react';
import { Row, Col, Dropdown, Navbar, Nav } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa'; // React Icons

const Second = () => {
  return (
    <header className="header">
      <Navbar expand="lg" className="navbar-custom">
        <Row className="w-100">
          {/* Language Dropdown */}
          <Col xs={6} sm={4} className="d-flex align-items-center">
            <Dropdown>
              <Dropdown.Toggle variant="light" id="dropdown-basic">
                Language
              </Dropdown.Toggle>

              <Dropdown.Menu>
                <Dropdown.Item href="#/action-1">English</Dropdown.Item>
                <Dropdown.Item href="#/action-2">Spanish</Dropdown.Item>
                <Dropdown.Item href="#/action-3">French</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>
          </Col>

          {/* Phone Number */}
          <Col xs={6} sm={4} className="d-flex justify-content-center align-items-center">
            <a href="tel:+1234567890" className="phone-number">
              +1 (234) 567-890
            </a>
          </Col>

          {/* Social Icons */}
          <Col xs={12} sm={4} className="d-flex justify-content-center align-items-center">
            <Nav className="social-icons">
              <Nav.Link href="https://facebook.com" target="_blank">
                <FaFacebookF size={20} />
              </Nav.Link>
              <Nav.Link href="https://twitter.com" target="_blank">
                <FaTwitter size={20} />
              </Nav.Link>
              <Nav.Link href="https://instagram.com" target="_blank">
                <FaInstagram size={20} />
              </Nav.Link>
            </Nav>
          </Col>
        </Row>
      </Navbar>
    </header>
  );
};

export default Second;
