import React, { useState, useEffect } from "react";
import { Button, Card, Row, Col } from "react-bootstrap";
const CertificateList = ({ index, certificate, onEditMode, onDelete }) => {
  const { title, description, date } = certificate;

  const dateFormat = (date) => {
    let month = date.getMonth() + 1;
    let day = date.getDate();

    month = month >= 10 ? month : "0" + month;
    day = day >= 10 ? day : "0" + day;

    return date.getFullYear() + "-" + month + "-" + day;
  };

  return (
    <Row className="d-flex align-items-center mb-4">
      <Col md="10">
        <span className="d-block">{title}</span>
        <span className="d-block text-muted">{description}</span>
        <span className="text-muted">{dateFormat(date)}</span>
      </Col>
      <Col className="d-flex justify-content-center" md="2">
        <Button
          className="me-2"
          variant="outline-info"
          size="sm"
          type="click"
          onClick={(e) => {
            onEditMode(index);
          }}
        >
          편집
        </Button>

        <Button
          variant="outline-danger"
          size="sm"
          type="click"
          onClick={(e) => {
            onDelete(index);
          }}
        >
          삭제
        </Button>
      </Col>
    </Row>
  );
};

export default CertificateList;