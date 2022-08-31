import React, { useState } from "react";
import { Form } from "react-bootstrap";
import DatePicker from "react-datepicker";

const CertificateAddForm = ({ addCertificate, isAdding, setIsAdding }) => {
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
    <div className="mt-3">
      {isAdding && (
        <Form onSubmit={handleAddSubmit}>
          <div className="mb-3">
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
          </div>

          <div className="mb-5">
            <div className="text-center">
              <button 
                className="me-3 btn btn-primary"
                type="submit" 
                disabled={!isFormValid}
              >
                확인
              </button>{" "}
              <button
              type="button"
                className="btn btn-secondary"
                onClick={(e) => {
                  clearForm();
                }}
              >
                취소
              </button>{" "}
            </div>
          </div>
        </Form>
      )}
    </div>
  );
};

export default CertificateAddForm;
