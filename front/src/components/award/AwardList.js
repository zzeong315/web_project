import React, { useState, useEffect } from "react";
import { Button, Row, Col } from "react-bootstrap";
import Award from "./Award";

const AwardList = ({ setIsEditing }) => {
  const [award, setAward] = useState("");
  const [description, setDescription] = useState("");

  return (
    <Row className="d-flex align-items-center mb-4">
      <Col>
        <span className="d-block">수상내역</span>
        <span className="text-muted">상세내역</span>
      </Col>
      <Col lg="2">
        <Button
          variant="outline-info"
          size="sm"
          type="click"
          onClick={(e) => {
            e.preventDefault();
            setIsEditing(true);
          }}
        >
          편집
        </Button>
      </Col>
    </Row>
  );
};

export default AwardList;
