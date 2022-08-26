import React, { useState, useEffect } from "react";
import { Card, Col } from "react-bootstrap";
import AwardEditForm from "./AwardEditForm";
import AwardList from "./AwardList";
import AwardAddForm from "./AwardAddForm";

const Award = ({ isEditable }) => {
  // 테스트용 데이터
  const [awards, setAwards] = useState([
    {
      title: "수상내역",
      description: "상세",
      isEditing: false,
    },
  ]);

  // award list add
  const addAward = (title, description) => {
    const newAward = [...awards, { title, description, isEditing: false }];
    setAwards(newAward);
  };

  // award list edit
  const changeEditMode = (index) => {
    const newAward = [...awards];
    newAward[index].isEditing = true;
    setAwards(newAward);
  };
  const deleteAward = (index) => {
    const newAward = [...awards];
    newAward.splice(index, 1);
    setAwards(newAward);
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>수상이력</Card.Title>

        {/* Awards  & AwardEditForm */}

        {awards &&
          awards.map((award, index) => {
            return award.isEditing ? (
              <AwardEditForm
                index={index}
                awards={awards}
                setAwards={setAwards}
              />
            ) : (
              <AwardList
                index={index}
                award={award}
                changeEditMode={changeEditMode}
                deleteAward={deleteAward}
                isEditable={isEditable}
              />
            );
          })}

        {/* AwardAddList */}

        {isEditable && <AwardAddForm onAddAward={addAward} />}
      </Card.Body>
    </Card>
  );
};

export default Award;
