import React, { useState, useEffect } from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
const CertificateList = () => {
  return (
    <Row className="d-flex align-items-center mb-4">
      <Col md="10">
        <span className="d-block">hahaha</span>
        <span className="d-block text-muted">hahahha</span>
        <span className="text-muted">date</span>
      </Col>
      <Col className="d-flex justify-content-center" md="2">
        <Button className="me-2" variant="outline-info" size="sm" type="click">
          편집
        </Button>

        <Button variant="outline-danger" size="sm" type="click">
          삭제
        </Button>
      </Col>
    </Row>
  );
};

export default CertificateList;
