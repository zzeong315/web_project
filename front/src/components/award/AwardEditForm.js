import React, { useState, useEffect } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";

const AwardEditForm = ({ index, award, confirmEdit, cancelEdit }) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setName(award.name);
    setDescription(award.description);
  }, []);

  // 수상이력 이름이 2글자 이상인가 확인
  const isNameValid = name.length >= 2;
  // 상세내역이 5글자 이상인가 확인
  const isDescriptionValid = description.length >= 5;
  // 위 2개 조건이 모두 동시에 만족하는지 확인
  const isFormValid = isNameValid && isDescriptionValid;

  const handleEditSumit = (e) => {
    if (name && description) {
      confirmEdit(index, { awardId: award._id, name, description });
    }
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="awardAddTitle">
        <Form.Control
          type="text"
          placeholder="수상내역"
          autoFocus
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {!isNameValid && (
          <Form.Text className="text-success">
            수상이력을 2글자 이상으로 작성해 주세요.
          </Form.Text>
        )}
      </Form.Group>

      <Form.Group className="mb-3" controlId="awardAddDescription">
        <Form.Control
          type="text"
          placeholder="상세내역"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        {!isDescriptionValid && (
          <Form.Text className="text-success">
            상세내역을 5글자 이상으로 작성해 주세요.
          </Form.Text>
        )}
      </Form.Group>
      <Row className="mb-5">
        <Col className="text-center">
          <Button className="me-3" variant="primary" onClick={handleEditSumit} disabled={!isFormValid}>
            확인
          </Button>{" "}
          <Button
            variant="secondary"
            onClick={(e) => {
              cancelEdit(index);
            }}
          >
            취소
          </Button>{" "}
        </Col>
      </Row>
    </Form>
  );
};

export default AwardEditForm;
