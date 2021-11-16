import Navigation from "../components/Navigation";
import ImageCarousel from "../components/ImageCarousel";
import Information from "../components/Information";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ContentTabs from "../components/ContentTabs";
import ContentAccordion from "../components/ContentAccordion";
import Footer from "../components/Footer";

function Home() {
  return (
    <>
      <Navigation />
      <ImageCarousel />
      <Information />
      <Container>
        <Row>
          <Col >
            <ContentAccordion />
            <div className="d-none d-md-block">
              <ContentTabs />
            </div>
          </Col>
        </Row>
      </Container>
      <Footer />
    </>
  );

}

export default Home;