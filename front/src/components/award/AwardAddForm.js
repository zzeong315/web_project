import React, { useState } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";

const AwardAddForm = ({ addAward }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isAdding, setIsAdding] = useState(false);

  // 수상이력 이름이 2글자 이상인가 확인
  const isNameValid = name.length >= 2;
  // 상세내역이 5글자 이상인가 확인
  const isDescriptionValid = description.length >= 5;
  // 위 2개 조건이 모두 동시에 만족하는지 확인
  const isFormValid = isNameValid && isDescriptionValid;

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
    <Col className="mt-3 ">
      <Col className="text-center">
      <button
        type="button"
        className="btn btn-primary mb-3"
        onClick={(e) => setIsAdding(true)}
      >
        +
      </button>
      </Col>
      {isAdding && (
        <Form onSubmit={handleAddSubmit}>
          <Form.Group className="mb-3" controlId="awardEditTitle">
            <Form.Control
              type="text"
              placeholder="수상이력"
              autoFocus
              onChange={(e) => setName(e.target.value)}
              value={name}
            />
            {!isNameValid && (
              <Form.Text className="text-success">
                수상이력을 2글자 이상으로 작성해 주세요.
              </Form.Text>
            )}
          </Form.Group>
          <Form.Group className="mb-3" controlId="awardEditDescription">
            <Form.Control
              type="text"
              placeholder="상세내역"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />
            {!isDescriptionValid && (
              <Form.Text className="text-success">
                상세내역을 5글자 이상으로 작성해 주세요.
              </Form.Text>
            )}
          </Form.Group>
          <Row className="mb-5">
            <Col className="text-center">
              <Button className="me-3" variant="primary" type="submit" disabled={!isFormValid}>
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
