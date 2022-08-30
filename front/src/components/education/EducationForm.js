import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Form, Row, Col } from "react-bootstrap";

const ATTENDING = "재학중";
const BACHELOR_DEGREE = "학사졸업";
const MASTER_GRADUATION = "석사졸업";
const PHD_GRADUATION = "박사졸업";

const EducationForm = ({ education, confirmEducation, cancelEducation }) => {
  const [targetEducation, setTargetEducation] = useState({ ...education });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setTargetEducation({
      ...targetEducation,
      [name]: value,
    });
  };
  
  // 학교이름 2글자 이상인가 확인
  const isNameValid = targetEducation.name.length >= 2;
  // 전공이름 2글자 이상인가 확인
  const isMajorValid = targetEducation.major.length >= 2;
  // 위 2개 조건이 동시에 만족되는 확인
  const isFormValid = isNameValid && isMajorValid;

  // 확인
  const handleconfirmClick = () => {
    confirmEducation({ ...targetEducation });
  };

  // 취소
  const handleCancelClick = () => {
    cancelEducation();
  };

  return (
    <Form>
      <Row className="justify-content-md-center">
        <Form.Group className="mb-3" controlId="formSchool">
          <Form.Control
            type="text"
            name="name"
            placeholder="학교 이름"
            autoFocus
            value={targetEducation.name}
            onChange={handleChange}
          />
          {!isNameValid && (
            <Form.Text className="text-secondary">
              학교 이름을 2글자 이상으로 작성해 주세요. 
            </Form.Text>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formMajor">
          <Form.Control
            type="text"
            name="major"
            placeholder="전공"
            value={targetEducation.major}
            onChange={handleChange}
          />
          {!isMajorValid && (
            <Form.Text className="text-secondary">
              전공을 2글자 이상으로 작성해 주세요.
            </Form.Text>
          )}
        </Form.Group>
      </Row>
      <Col>
        <Form.Check
          inline
          label="재학중"
          name="status"
          value={ATTENDING}
          type="radio"
          id={`inline-radio-1`}
          checked={targetEducation.status === ATTENDING}
          onChange={handleChange}
        />
        <Form.Check
          inline
          label="학사졸업"
          name="status"
          value={BACHELOR_DEGREE}
          type="radio"
          id={`inline-radio-2`}
          checked={targetEducation.status === BACHELOR_DEGREE}
          onChange={handleChange}
        />
        <Form.Check
          inline
          label="석사졸업"
          type="radio"
          name="status"
          value={MASTER_GRADUATION}
          id={`inline-radio-3`}
          checked={targetEducation.status === MASTER_GRADUATION}
          onChange={handleChange}
        />
        <Form.Check
          inline
          label="박사졸업"
          type="radio"
          name="status"
          value={PHD_GRADUATION}
          id={`inline-radio-4`}
          checked={targetEducation.status === PHD_GRADUATION}
          onChange={handleChange}
        />
      </Col>

      <br />

      <Form.Group as={Row} className="mt-3 text-center">
        <Col sm={{ span: 20 }}>
          <Button
            variant="primary"
            type="button"
            className="me-3"
            onClick={handleconfirmClick}
            disabled={!isFormValid}
          >
            확인
          </Button>
          <Button
            variant="secondary"
            type="button"
            className="me-3"
            onClick={handleCancelClick}
          >
            취소
          </Button>
        </Col>
      </Form.Group>
    </Form>
  );
}

export default EducationForm;