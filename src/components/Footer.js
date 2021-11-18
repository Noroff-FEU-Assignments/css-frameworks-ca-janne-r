import React from "react";
import Container from "react-bootstrap/Container";

function Footer() {
  return (

    <footer>
      <Container>
        <div className="footer--content">
          <div className="footer--content__icons">
            <i className="fab fa-vimeo-v"></i>
            <i className="fab fa-youtube"></i>
          </div>
          <div>hello@yay.com</div>
          <div>Copyright 2020</div>
        </div>
      </Container>
    </footer>

  )

}

export default Footer;