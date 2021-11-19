import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (

    <footer>
      <Container>
        <Row >
          <Col xs={12} sm={true} >
            <i className="fab fa-vimeo-v"></i>
            <i className="fab fa-youtube"></i>
          </Col>
          <Col>hello@yay.com</Col>
          <Col>Copyright 2020</Col>
        </Row>
      </Container>
    </footer>

  )

}

export default Footer;