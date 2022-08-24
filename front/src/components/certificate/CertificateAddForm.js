import React, { useState, useEffect } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";

const CertificateAddForm = () => {
  const [isAdding, setIsAdding] = useState(false);
  const [startDate, setStartDate] = useState(new Date());

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
        <Form>
          <Form.Group className="mb-3" controlId="certificateEditTitle">
            <Form.Control type="text" placeholder="자격증 제목" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="certificateEditDescription">
            <Form.Control type="text" placeholder="상세내역" />
          </Form.Group>
          <DatePicker
            selected={startDate}
            onChange={(date) => setStartDate(date)}
          />
          <Row className="mb-5">
            <Col className="text-center">
              <Button className="me-3" variant="primary" type="submit">
                확인
              </Button>{" "}
              <Button
                variant="secondary"
                onClick={(e) => {
                  setIsAdding(false);
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
