import React, { useState, useEffect } from "react";
import { Button, Row, Col } from "react-bootstrap";

const AwardList = ({ index, award, onEditMode }) => {
  const { title, description } = award;
  return (
    <Row className="d-flex align-items-center mb-4">
      <Col>
        <span className="d-block">{title}</span>
        <span className="text-muted">{description}</span>
      </Col>
      <Col lg="1">
        <Button
          variant="outline-info"
          size="sm"
          type="click"
          onClick={(e) => {
            e.preventDefault();
            onEditMode(index);
          }}
        >
          편집
        </Button>
      </Col>
    </Row>
  );
};

export default AwardList;
