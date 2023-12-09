import React from "react";
import { Button, Card, Form } from "react-bootstrap";

const InputCities = () => {
  return (
    <>
      <div
        style={{
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Card style={{ width: "18rem" }}>
          <Card.Body>
            <Card.Title>Calulate Toll</Card.Title>
            <Card.Text>put 2 address to calculate Tolls</Card.Text>
            <Form>
              <Form.Group className="mb-3" controlId="formGroupEmail">
                <Form.Label>From </Form.Label>
                <Form.Control type="text" placeholder="Enter From Address" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formGroupPassword">
                <Form.Label>To</Form.Label>
                <Form.Control type="text" placeholder="Enter to Address" />
              </Form.Group>
            </Form>
            <Button variant="primary">Kitna paisa</Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default InputCities;
