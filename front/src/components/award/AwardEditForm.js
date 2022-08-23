import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";

const AwardEditForm = ({ setIsEditing }) => {
  return (
    <Form>
      <Form.Group className="mb-3" controlId="formAward">
        <Form.Control type="text" placeholder="수상이력" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formAwardDescription">
        <Form.Control type="text" placeholder="상세내역" />
      </Form.Group>
      <Button variant="primary">확인</Button>{" "}
      <Button
        variant="secondary"
        onClick={(e) => {
          setIsEditing(false);
        }}
      >
        취소
      </Button>{" "}
    </Form>
  );
};

export default AwardEditForm;
