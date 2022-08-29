import { useState, useEffect } from "react";
import EducationForm from "./EducationForm";
import EducationList from "./EducationList";
import * as Api from "../../api";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Button, Card } from "react-bootstrap";

const Education = ({ portfolioOwnerId, isEditable }) => {
  const [educations, setEducations] = useState([]);
  const [isAdding, setIsAdding] = useState(false);

  // get 요청
  useEffect(() => {
    Api.get("educations", portfolioOwnerId).then((res) => setEducations(res.data));
  }, [portfolioOwnerId]);

  // + 버튼 클릭
  const handleAddEductionClick = () => {
    if (isAdding) {
      setIsAdding(false);
    } else {
      setIsAdding(true);
    }
  };

  // 추가 (api => post)
  const confirmAddEduction = async (targetEducation) => {
    
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

  // 취소 
  const cancelAddEducation = () => {
    setIsAdding(false);
  };

  // 수정 (api => patch)
  const updateEducation = async (editedEducationObj) => {
    
    try {
      const userId = portfolioOwnerId;

      await Api.patch(`education`, {
        educationId: editedEducationObj._id,
        name: editedEducationObj.name,
        major: editedEducationObj.major,
        status: editedEducationObj.status,
      });
  
      const res = await Api.get("educations", userId);
      setEducations(res.data);

    } catch (error) {
      console.log('error')
    }

  };

  // 삭제 (api => delete)
  const deleteEducation = async (educationId) => {
    try {
      const res = await Api.delete("education", educationId);
      const updateEducation = res.data.educations
      setEducations(updateEducation)

    } catch (error) {
      console.log('error')
    }
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
          <Row className="mt-3 text-center mb-4 row">
            <Col className="col-sm-20">
              <Button
                type="button"
                className="btn btn-primary"
                onClick={handleAddEductionClick}
              >
                +
              </Button>
            </Col>
          </Row>
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

export default Education;