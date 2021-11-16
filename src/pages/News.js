import React from "react";
import NewsCard from "../components/NewsCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonNum from "../components/ButtonNum"

function News() {
  return (

    <Container fluid="sm">
      <h1>News</h1>
      <ButtonNum />
      <Row xs={1} sm={2} lg={4}>
        <Col>
          <NewsCard />
        </Col>
        <Col>
          <NewsCard />
        </Col>
        <Col>
          <NewsCard />
        </Col>
        <Col>
          <NewsCard />
        </Col>
        <Col>
          <NewsCard />
        </Col>
        <Col>
          <NewsCard />
        </Col>
        <Col>
          <NewsCard />
        </Col>
        <Col>
          <NewsCard />
        </Col>
      </Row>
      <ButtonNum />
    </Container >

  );

}

export default News;