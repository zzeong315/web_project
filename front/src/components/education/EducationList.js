import { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
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
    <div>
      {isEditing ? (
        <div className="align-items-center mt-4 row">
          <EducationForm
            education={{
              ...education,
            }}
            confirmEducation={confirmEditEducation}
            cancelEducation={cancelEditEducation}
          />
        </div>
      ) : (
        <div className="align-items-center mt-4 row">
          <div className="col list">
            <span className="name">{education.name}</span>
            <span className="description inlineText">
              {education.major}
            </span>
            <span className="rest">{`${
              education.status || ""
            }`}</span>
          </div>
          {isEditable && (
            <div className="d-flex justify-content-center col-md-2 mt-3">
              <button
                type="button"
                className="me-2 btn btn-outline-primary btn-sm"
                onClick={handleEditClick}
              >
                편집
              </button>
              <button
                type="button"
                className="btn btn-outline-secondary btn-sm"
                onClick={handleDeleteClick}
              >
                삭제
              </button>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default EducationList;
