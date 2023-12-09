import React, { useState } from "react";
import { Button, Card, Form } from "react-bootstrap";
import { calculateToll } from "../Utils/ApiUtils";

const InputCities = () => {
  const [address, setAddress] = useState({
    to: "",
    from: "",
  });
  const setdata = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setAddress((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };
  const handleSubmit = async (e) => {
    calculateToll(address.from, address.to);
  };
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
              <Form.Group className="mb-3" controlId="fromAdd">
                <Form.Label>From </Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter From Address"
                  onChange={setdata}
                  name="from"
                  value={address.from}
                />
              </Form.Group>
              <Form.Group className="mb-3" controlId="toAdd">
                <Form.Label>To</Form.Label>
                <Form.Control
                  type="text"
                  placeholder="Enter to Address"
                  onChange={setdata}
                  name="to"
                  value={address.to}
                />
              </Form.Group>
            </Form>
            <Button variant="primary" onClick={handleSubmit}>
              Kitna paisa
            </Button>
          </Card.Body>
        </Card>
      </div>
    </>
  );
};

export default InputCities;
