import { useState, useEffect } from "react";
import EducationForm from "./EducationForm";
import EducationList from "./EducationList";
import * as Api from "../../api";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import Portfolio from "../Portfolio";
export default function Education({ PortfolioOwnerId, isEditable }) {

  const [educations, setEducations] = useState([]);
  const [isAdding, setIsAdding] = useState(false);

  // get 요청
  useEffect(() => {
    Api.get("/educations", PortfolioOwnerId).then((res) => setEducations(res.data));
  }, []);

  const handleAddEductionClick = () => {
    if (isAdding) {
      setIsAdding(false);
    } else {
      setIsAdding(true);
    }
  };

  const confirmAddEduction = async (targetEducation) => {
    const educationObj = {
      ...targetEducation,
      id: Math.floor(Math.random() * 10000),
    };
    setEducations([...educations, educationObj]);

    const userId = PortfolioOwnerId;

    await Api.post("/education", {
      id: educations.id,
      name: educations.name,
      major: educations.major,
      status: educations.status,
    });

    const res = await Api.get("educations", PortfolioOwnerId);
    setEducations(res.data);

    setIsAdding(false);
  };

  const cancelAddEducation = () => {
    setIsAdding(false);
  };

  // 수정
  const updateEducation = (editedEducationObj) => {
    const updatedEducations = [...educations];
    updatedEducations[educations.findIndex((education) => education.id === editedEducationObj.id)] = {
      ...editedEducationObj,
    };
    setEducations([...updatedEducations]);
  };

  // 삭제
  const deleteEducation = (selectedEduId) => {
    const newEducations = [...educations];
    setEducations(newEducations.filter((education) => education.id !== selectedEduId));
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>학력</Card.Title>
        {educations.length > 0 &&
          educations.map((education, index) => {
            return (
              <EducationList
                key={index}
                education={education}
                updateEducation={updateEducation}
                deleteEducation={deleteEducation}
                isEditable={isEditable}
              />
            );
          })}
        {isEditable && (
          <div className="mt-3 text-center mb-4 row">
            <div className="col-sm-20">
              <button
                type="button"
                className="btn btn-primary"
                onClick={handleAddEductionClick}
              >
                +
              </button>
            </div>
          </div>
        )}

        {isAdding ? (
          <EducationForm
            education={{
              id: null,
              name: "",
              major: "",
              status: "재학중",
            }}
            confirmAddEducation={confirmAddEduction}
            cancelAddEducation={cancelAddEducation}
            setIsAdding={setIsAdding}
          />
        ) : (
          ""
        )}
      </Card.Body>
    </Card>
  );
}
