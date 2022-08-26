import React, { useState, useEffect } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";

const CertificateAddForm = ({ onAddnCertificate }) => {
  const [isAdding, setIsAdding] = useState(false);
  const [certifiedDate, setCertifiedDate] = useState(new Date());
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const clearForm = () => {
    setIsAdding(false);
    setTitle("");
    setDescription("");
    setCertifiedDate(new Date());
  };

  const handleAddSubmit = (e) => {
    e.preventDefault();
    if (title && description) {
      onAddnCertificate(title, description, certifiedDate);
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
          <Form.Group className="mb-3" controlId="certificateEditTitle">
            <Form.Control
              type="text"
              placeholder="자격증 제목"
              onChange={(e) => setTitle(e.target.value)}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="certificateEditDescription">
            <Form.Control
              type="text"
              placeholder="상세내역"
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>
          <DatePicker
            selected={certifiedDate}
            onChange={(date) => setCertifiedDate(date)}
          />
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

export default CertificateAddForm;
