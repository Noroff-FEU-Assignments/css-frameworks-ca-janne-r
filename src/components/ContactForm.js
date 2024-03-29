import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";


function ContactForm() {
  return (

    <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Website</Form.Label>
        <Form.Control type="url" />
      </Form.Group>


      <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
        <Form.Label>Message</Form.Label>
        <Form.Control as="textarea" rows={6} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Allow us to sell your personal details
to whomever we want" />
      </Form.Group>

      <Button variant="submit" type="submit">
        Submit
      </Button>
    </Form>

  );
}

export default ContactForm;