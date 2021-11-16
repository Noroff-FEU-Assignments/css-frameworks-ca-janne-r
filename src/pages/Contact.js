import React from "react";
import ContactForm from "../components/ContactForm";
import ContactInfo from "../components/ContactInfo";
import Container from "react-bootstrap/Container";

function Contact() {
  return (
    <Container>
      <ContactInfo />
      <h1>Submit your details</h1>
      <div>
        <ContactForm />
      </div>

    </Container>


  );

}

export default Contact;