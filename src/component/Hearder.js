import React from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap'
import { Link } from "react-router-dom";

export default function Hearder() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
        <Navbar.Brand href="#home">Dhruvi Joshi</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
          </Nav>
          <Nav>
            
            <Link className='nav-link' to={'/'}>Home</Link>
            <Link className='nav-link' to={'/project'}>Projects</Link>
            <Link className='nav-link' to={'/blogs'}>Blogs</Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
