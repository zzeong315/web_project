import React, { useState, useEffect } from "react";
import { Card, Col } from "react-bootstrap";
import AwardEditForm from "./AwardEditForm";
import AwardList from "./AwardList";
import AwardAddForm from "./AwardAddForm";

const Award = ({ isEditable }) => {
  console.log("Award", isEditable);

  // 테스트용 데이터
  const [awardList, setAwardList] = useState([
    {
      title: "수상내역",
      description: "상세",
      isEditing: false,
    },
  ]);

  // award list add
  const addAward = (title, description) => {
    const newAward = [...awardList, { title, description, isEditing: false }];
    setAwardList(newAward);
  };

  // award list edit
  const changeEditMode = (index) => {
    const newAward = [...awardList];
    newAward[index].isEditing = true;
    setAwardList(newAward);
  };
  const cancelEditMode = (index) => {
    const newAward = [...awardList];
    newAward.splice(index, 1);
    setAwardList(newAward);
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>수상이력</Card.Title>

        {/* AwardList  & AwardEditForm */}

        {awardList &&
          awardList.map((award, index) => {
            return award.isEditing ? (
              <AwardEditForm
                index={index}
                awardList={awardList}
                setAwardList={setAwardList}
              />
            ) : (
              <AwardList
                index={index}
                award={award}
                onEditMode={changeEditMode}
                onEditCancle={cancelEditMode}
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
