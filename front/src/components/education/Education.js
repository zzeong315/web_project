import { useState, useEffect } from "react";
import EducationForm from "./EducationForm";
import EducationList from "./EducationList";
import * as Api from "../../api";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card } from "react-bootstrap";
import Portfolio from "../Portfolio";

export default function Education({ portfolioOwnerId, isEditable }) {

  const [educations, setEducations] = useState([]);
  const [isAdding, setIsAdding] = useState(false);

  // get 요청
  useEffect(() => {
    Api.get("educations", portfolioOwnerId).then((res) => setEducations(res.data));
  }, [portfolioOwnerId]);

  const handleAddEductionClick = () => {
    if (isAdding) {
      setIsAdding(false);
    } else {
      setIsAdding(true);
    }
  };

  const confirmAddEduction = async (targetEducation) => {
    // const educationObj = {
    //   ...targetEducation,
    //   id: Math.floor(Math.random() * 10000),
    // };
    // setEducations([...educations, educationObj]);
    
    try {
        const userId = portfolioOwnerId;

        await Api.post("education", {
          name: targetEducation.name,
          major: targetEducation.major,
          status: targetEducation.status,
        });
    
        const res = await Api.get("educations", userId);
        setEducations(res.data);
    
        setIsAdding(false);
        
    } catch (error) {
        console.log('error')
    }
  };

  const cancelAddEducation = () => {
    setIsAdding(false);
  };

  // 수정
  const updateEducation = async (editedEducationObj) => {

        
        const userId = portfolioOwnerId;

        await Api.patch(`education`, {
          educationId: editedEducationObj._id,
          name: editedEducationObj.name,
          major: editedEducationObj.major,
          status: editedEducationObj.status,
        });
        // console.log(editedEducationObj)
    
        const res = await Api.get("educations", userId);
        setEducations(res.data);

    // const updatedEducations = [...educations];
    // updatedEducations[educations.findIndex((education) => education.id === editedEducationObj.id)] = {
    //   ...editedEducationObj,
    // };
    // setEducations([...updatedEducations]);
  };

  // 삭제
  const deleteEducation = async (deltedEducationObj) => {
    // const newEducations = [...educations];
    // setEducations(newEducations.filter((education) => education.id !== selectedEduId));

    const userId = portfolioOwnerId;

    await Api.delete(`education`, {
      educationId: deltedEducationObj._id,
      name: deltedEducationObj.name,
      major: deltedEducationObj.major,
      status: deltedEducationObj.status,
    });
    console.log(deltedEducationObj)

    const res = await Api.get("educations", userId);
    setEducations(res.data);

  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>학력</Card.Title>
        {educations.length > 0 &&
          educations.map((education, index) => {
            return (
              <EducationList
                key={education._id}
                education={education}
                updateEducation={updateEducation}
                deleteEducation={deleteEducation}
                isEditable={isEditable}
                setEducations={setEducations}
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
            confirmEducation={confirmAddEduction}
            cancelEducation={cancelAddEducation}
            setIsAdding={setIsAdding}
          />
        ) : (
          ""
        )}
      </Card.Body>
    </Card>
  );
}
