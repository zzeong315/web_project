import React, { useState, useEffect } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";

const CertificateAddForm = ({ addCertificate }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [date, setDate] = useState(new Date());
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  // 자격증 이름이 2글자 이상인가 확인
  const isNameValid = name.length >= 2;
  // 상세내역이 5글자 이상인가 확인
  const isDescriptionValid = description.length >= 5;
  // 위 2개 조건이 모두 동시에 만족하는지 확인
  const isFormValid = isNameValid && isDescriptionValid;

  const clearForm = () => {
    setIsAdding(false);
    setName("");
    setDescription("");
    setDate(new Date());
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (name && description) {
      addCertificate({ name, description, date });
      clearForm();
    }
  };

  return (
    <Col className="mt-3">
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
          <Form.Group className="mb-3" controlId="certificateEditName">
            <Form.Control
              type="text"
              placeholder="자격증 제목"
              autoFocus
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            {!isNameValid && (
              <Form.Text className="text-secondary">
                자격증을 2글자 이상으로 작성해 주세요.
              </Form.Text>
            )}
          </Form.Group>

          <Form.Group className="mb-3" controlId="certificateEditDescription">
            <Form.Control
              type="text"
              placeholder="상세내역"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            {!isDescriptionValid && (
              <Form.Text className="text-secondary">
                상세내역을 5글자 이상으로 작성해 주세요.
              </Form.Text>
            )}
          </Form.Group>
          <DatePicker
            selected={date}
            onChange={(changeDate) => setDate(changeDate)}
          />
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

export default CertificateAddForm;
