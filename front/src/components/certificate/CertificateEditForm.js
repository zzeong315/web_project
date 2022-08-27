import React, { useState, useEffect } from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import DatePicker from "react-datepicker";

const CertificateEditForm = ({
  index,
  certificate,
  confirmEdit,
  cancelEdit,
}) => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [certifiedDate, setCertifiedDate] = useState(new Date());

  useEffect(() => {
    setName(certificate.name);
    setDescription(certificate.description);
    setCertifiedDate(new Date(certificate.date));
  }, []);

  const onHandleClick = (e) => {
    e.preventDefault();
    if (name && description) {
      confirmEdit({
        certificateId: certificate._id,
        name,
        description,
        date: certifiedDate,
      });
    }
  };

  return (
    <Form>
      <Form.Group className="mb-3" controlId="certificateEditTitle">
        <Form.Control
          type="text"
          placeholder="자격증 제목"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="certificateEditDescription">
        <Form.Control
          type="text"
          placeholder="상세내역"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>
      <DatePicker
        selected={certifiedDate}
        onChange={(date) => setCertifiedDate(date)}
      />
      <Row className="mb-5">
        <Col className="text-center">
          <Button
            className="me-3"
            variant="primary"
            type="submit"
            onClick={(e) => onHandleClick(e)}
          >
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

export default CertificateEditForm;
