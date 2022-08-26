import React, { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";

const AwardAddForm = ({ addAward }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  const clearForm = () => {
    setIsAdding(false);
    setName("");
    setDescription("");
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();

    if (name && description) {
      addAward(name, description);
      clearForm();
    }
  };

  return (
    <Col className="mt-3 text-center">
      <button
        type="button"
        className="btn btn-primary mb-3"
        onClick={(e) => setIsAdding(true)}
      >
        +
      </button>

      {isAdding && (
        <Form onSubmit={handleAddSubmit}>
          <Form.Group className="mb-3" controlId="awardEditTitle">
            <Form.Control
              type="text"
              placeholder="수상이력"
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="awardEditDescription">
            <Form.Control
              type="text"
              placeholder="상세내역"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
          </Form.Group>
          <Row className="mb-5">
            <Col className="text-center">
              <Button className="me-3" variant="primary" type="submit">
                확인
              </Button>{" "}
              <Button
                variant="secondary"
                onClick={(e) => {
                  clearForm();
                }}
              >
                취소
              </Button>{" "}
            </Col>
          </Row>
        </Form>
      )}
    </Col>
  );
};
export default AwardAddForm;
