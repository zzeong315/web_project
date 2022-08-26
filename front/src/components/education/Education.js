import { useState, useEffect } from "react";
import EducationForm from "./EducationForm";
import EducationList from "./EducationList";
import * as Api from "../../api";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import Portfolio from "../Portfolio";
export default function Education({ PortfolioOwnerId, isEditable }) {

  const [edus, setEdus] = useState([]);
  const [isAdding, setIsAdding] = useState(false);

  // get 요청
  useEffect(() => {
    Api.get("/educations", PortfolioOwnerId).then((res) => setEdus(res.data));
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
    setEdus([...edus, educationObj]);

    const userId = PortfolioOwnerId;

    await Api.post("/education", {
      id: edus.id,
      name: edus.name,
      major: edus.major,
      status: edus.status,
    });

    const res = await Api.get("educations", PortfolioOwnerId);
    setEdus(res.data);

    setIsAdding(false);
  };

  const cancelAddEducation = () => {
    setIsAdding(false);
  };

  // 수정
  const updateEducation = (editedEducationObj) => {
    const updatedEdus = [...edus];
    updatedEdus[edus.findIndex((edu) => edu.id === editedEducationObj.id)] = {
      ...editedEducationObj,
    };
    setEdus([...updatedEdus]);
  };

  // 삭제
  const deleteEducation = (selectedEduId) => {
    const newEdus = [...edus];
    setEdus(newEdus.filter((edu) => edu.id !== selectedEduId));
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>학력</Card.Title>
        {edus.length > 0 &&
          edus.map((eduObj, index) => {
            return (
              <EducationList
                key={index}
                edu={eduObj}
                updateEdu={updateEducation}
                deleteEdu={deleteEducation}
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
            edu={{
              id: null,
              name: "",
              major: "",
              status: "재학중",
            }}
            onConfirm={confirmAddEduction}
            onCancel={cancelAddEducation}
            setIsAdding={setIsAdding}
          />
        ) : (
          ""
        )}
      </Card.Body>
    </Card>
  );
}
