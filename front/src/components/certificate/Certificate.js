import React, { useState, useEffect } from "react";
import { Card, Col } from "react-bootstrap";
import CertificateEditForm from "./CertificateEditForm";
import CertificateList from "./CertificateList";
import CertificateAddForm from "./CertificateAddForm";

const Certificate = () => {
  return (
    <Card style={{ width: "80rem" }}>
      <Card.Body>
        <Card.Title>자격증</Card.Title>
        {/* <CertificateList />
        <CertificateEditForm />
        <CertificateAddForm /> */}
      </Card.Body>
    </Card>
  );
};

export default Certificate;
