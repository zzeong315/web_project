import React, { useState, useEffect } from "react";
import { Form } from "react-bootstrap";
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

  // 자격증 이름이 2글자 이상인가 확인
  const isNameValid = name.length >= 2;
  // 상세내역이 5글자 이상인가 확인
  const isDescriptionValid = description.length >= 5;
  // 위 2개 조건이 모두 동시에 만족하는지 확인
  const isFormValid = isNameValid && isDescriptionValid;

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
    <Form className="mt-4">
      <div className="mb-3">
        <Form.Group className="mb-3" controlId="certificateEditTitle">
          <Form.Control
            type="text"
            placeholder="자격증 제목"
            value={name}
            autoFocus
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
          selected={certifiedDate}
          onChange={(date) => setCertifiedDate(date)}
        />
      </div>
      <div className="mb-5">
        <div className="text-center">
          <button
            className="me-3 btn btn-primary"
            type="submit"
            disabled={!isFormValid}
            onClick={(e) => onHandleClick(e)}
          >
            확인
          </button>{" "}
          <button
            className="btn btn-secondary"
            onClick={(e) => {
              cancelEdit(index);
            }}
          >
            취소
          </button>{" "}
        </div>
      </div>
    </Form>
  );
};

export default CertificateEditForm;
