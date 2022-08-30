import { useState, useEffect } from "react";
import EducationForm from "./EducationForm";
import EducationList from "./EducationList";
import apis from "../../apis/apis";
import "bootstrap/dist/css/bootstrap.min.css";
import { Row, Col, Button, Card } from "react-bootstrap";

const Education = ({ portfolioOwnerId, isEditable }) => {
  const [educations, setEducations] = useState([]);
  const [isAdding, setIsAdding] = useState(false);
  const Api = apis.eduRepository;

  // get 요청
  useEffect(() => {
    Api.getEducations(portfolioOwnerId).then((res) => setEducations(res.data));
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
      const res = await Api.createEducation({
        name: targetEducation.name,
        major: targetEducation.major,
        status: targetEducation.status,
      });

      const updateEdu = res.data.educations;
      setEducations(updateEdu);

      setIsAdding(false);
    } catch (error) {
      console.log("error");
    }
    setIsAdding(false);
  };

  // 취소
  const cancelAddEducation = () => {
    setIsAdding(false);
  };

  // 수정 (api => patch)
  const updateEducation = async (editedEducationObj) => {
    try {
      const res = await Api.updateEducation({
        educationId: editedEducationObj._id,
        name: editedEducationObj.name,
        major: editedEducationObj.major,
        status: editedEducationObj.status,
      });
      const updateEdu = res.data.educations;

      setEducations(updateEdu);
    } catch (error) {
      console.log("error");
    }
  };

  // 삭제 (api => delete)
  const deleteEducation = async (educationId) => {
    try {
      const res = await Api.deleteEducationById(educationId);
      const updateEducation = res.data.educations;
      setEducations(updateEducation);
    } catch (error) {
      console.log("error");
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
                key={index}
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
};

export default Education;
