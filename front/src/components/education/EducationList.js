import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, Card, Row, Col } from "react-bootstrap";
import EducationForm from "./EducationForm";

const EducationList = ({
  education,
  updateEducation,
  deleteEducation,
  isEditable,
}) => {
  const [isEditing, setIsEditing] = useState(false);
  const handleEditClick = () => {
    if (isEditing) {
      setIsEditing(false);
    } else {
      setIsEditing(true);
    }
  };

  // 삭제
  const handleDeleteClick = async () => {
    deleteEducation(education._id);
  };
  // 편집
  const confirmEditEducation = async (targetEducation) => {
    updateEducation(targetEducation);
    setIsEditing(false);
  };
  // 취소
  const cancelEditEducation = () => {
    setIsEditing(false);
  };

  return (
    <Col>
      {isEditing ? (
        <Col md="10">
          <EducationForm
          education={{
            ...education,
          }}
          confirmEducation={confirmEditEducation}
          cancelEducation={cancelEditEducation}
        />
        </Col>

      ) : (
      <Row className="align-items-center">
        <Col md="10">
          <span>{education.name}</span>
          <br />
          <span className="text-muted">{`${education.major} (${
            education.status || ""
          })`}</span>
        </Col>
        {isEditable && (
          <Col className="d-flex justify-content-center" md="2">
            <Button
              variant="outline-info"
              size="sm"
              onClick={handleEditClick}
              className="me-2"
              type="button"
            >
              편집
            </Button>
            <Button
              variant="outline-danger"
              size="sm"
              onClick={handleDeleteClick}
              type="button"
            >
              삭제
            </Button>
          </Col>
        )}
      </Row>
      )}
    </Col>
  );
}

export default EducationList;