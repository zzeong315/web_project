import React, { useState, useEffect } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import Award from "./Award";

const AwardList = ({ setIsEditing }) => {
  const [award, setAward] = useState("");
  const [description, setDescription] = useState("");

  return (
    <Form className="d-flex align-items-center">
      <Col>
        <Form.Text className="d-block">수상내역</Form.Text>
        <Form.Text className="d-block">상세내역</Form.Text>
      </Col>
      <Col>
        <Button
          variant="outline-info"
          type="click"
          onClick={(e) => {
            e.preventDefault();
            setIsEditing(true);
          }}
        >
          편집
        </Button>
      </Col>
    </Form>
  );
};

export default AwardList;
