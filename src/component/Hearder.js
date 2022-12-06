import React from 'react'
import { Navbar,Container,Nav } from 'react-bootstrap'

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
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/project">Projects</Nav.Link>
            <Nav.Link href="/blogs">Blogs</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
