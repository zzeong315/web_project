import React, { useState, useEffect } from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
const CertificateList = ({
  index,
  certificate,
  changeEditMode,
  deleteCertificate,
  isEditable,
}) => {
  const { name, description, date } = certificate;

  return (
    <Row className="d-flex align-items-center mb-4">
      <Col md="10">
        <span className="d-block">{name}</span>
        <span className="d-block text-muted">{description}</span>
        <span className="text-muted">{date}</span>
      </Col>
      {isEditable && (
        <Col className="d-flex justify-content-center" md="2">
          <Button
            className="me-2"
            variant="outline-info"
            size="sm"
            type="click"
            onClick={(e) => {
              changeEditMode(index);
            }}
          >
            편집
          </Button>

          <Button
            variant="outline-danger"
            size="sm"
            type="click"
            onClick={(e) => {
              deleteCertificate(certificate._id);
            }}
          >
            삭제
          </Button>
        </Col>
      )}
    </Row>
  );
};

export default CertificateList;
