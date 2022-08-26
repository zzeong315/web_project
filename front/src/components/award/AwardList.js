import React, { useState, useEffect } from "react";
import { Button, Row, Col } from "react-bootstrap";

const AwardList = ({
  index,
  award,
  changeEditMode,
  deleteAward,
  isEditable,
}) => {
  const { title, description } = award;
  return (
    <Row className="d-flex align-items-center mb-4">
      <Col md="10">
        <span className="d-block">{title}</span>
        <span className="text-muted">{description}</span>
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
              deleteAward(index);
            }}
          >
            삭제
          </Button>
        </Col>
      )}
    </Row>
  );
};

export default AwardList;
