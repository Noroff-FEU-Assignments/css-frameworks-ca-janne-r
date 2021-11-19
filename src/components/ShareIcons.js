import React from "react";

import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function ShareIcons() {
  return (

    <Row className="shareIcons">
      <Col xs={12} sm={true} >
        <p>SHARE</p>
        <i className="fab fa-facebook-f"></i>
        <i className="fab fa-twitter"></i>
      </Col>
    </Row>
  );

}

export default ShareIcons;


