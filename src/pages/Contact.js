import React from "react";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import Container from "react-bootstrap/Container";

function Contact() {
  return (
    <Container>
      <div className="contact--container">
        <div>
          <ContactInfo />
        </div>
        <div >
          <h1>Submit your details</h1>
          <div className="contact--container__form">
            <ContactForm />
          </div>
        </div>
      </div>
    </Container>


  );

}

export default Contact;