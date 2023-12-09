import React from "react";
import InputCities from "./InputCities";
import { Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";

const LandingPage = () => {
  return (
    <>
      <Nav variant="tabs" defaultActiveKey="/home">
        <Nav.Item>
          <Nav.Link href="/tollGuru">TollGuru</Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link href="/tollGuru/calulate" eventKey="link-1">
            Info
          </Nav.Link>
        </Nav.Item>
        <Nav.Item>
          <Nav.Link eventKey="disabled" disabled>
            Disabled
          </Nav.Link>
        </Nav.Item>
      </Nav>

      <Routes>
        <Route path="calulate/" element={<InputCities />} />
      </Routes>
    </>
  );
};

export default LandingPage;
