import React from "react";
import NewsCard from "../components/NewsCard";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ButtonNum from "../components/ButtonNum";

function News() {
  return (

    <Container fluid="sm">
      <h1>News</h1>
      <ButtonNum />
      <Row xs={1} sm={2} lg={4}>
        <Col>
          <NewsCard src="images/news/news-1.jpg" />
        </Col>
        <Col>
          <NewsCard src="images/news/news-2.jpg" />
        </Col>
        <Col>
          <NewsCard src="images/news/news-3.jpg" />
        </Col>
        <Col>
          <NewsCard src="images/news/news-4.jpg" />
        </Col>
        <Col>
          <NewsCard src="images/news/news-5.jpg" />
        </Col>
        <Col>
          <NewsCard src="images/news/news-6.jpg" />
        </Col>
        <Col>
          <NewsCard src="images/news/news-7.jpg" />
        </Col>
        <Col>
          <NewsCard src="images/news/news-8.jpg" />
        </Col>
      </Row>
      <ButtonNum />
    </Container >

  );

}

export default News;