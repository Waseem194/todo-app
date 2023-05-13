import React, { useState } from "react";
import { Button, Form, Container, Row, Col, Spinner } from "react-bootstrap";
const ToDoForm = ({ addTask }) => {
  const [userInput, setUserInput] = useState("");

  const handleChange = (e) => {
    setUserInput(e.currentTarget.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addTask(userInput);
    setUserInput("");
  };
  return (
    <Container fluid="md">
      <Form onSubmit={handleSubmit}>
        <Row>
          <Col md={10}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Control
                type="text"
                value={userInput}
                onChange={handleChange}
                placeholder="Enter Task..."
              />
            </Form.Group>
          </Col>
          <Col md={2}>
            <Button variant="primary" type="submit">
              Add Task
            </Button>
          </Col>
        </Row>
      </Form>
      <Spinner animation="border" variant="primary" />
    </Container>
  );
};

export default ToDoForm;
