import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import SearchButton from "./SearchButton";
import PageHeading from "./headings/PageHeading";


function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <PageHeading href="#home">The YAY Company</PageHeading>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#news">News</Nav.Link>
            <Nav.Link href="#contact">Contact</Nav.Link>
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <SearchButton variant="outline-success">Go</SearchButton>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>

  );

}

export default Navigation;