import React, { useState, useEffect } from "react";
import { Card, Col } from "react-bootstrap";
import AwardEditForm from "./AwardEditForm";
import AwardList from "./AwardList";
import AwardAddForm from "./AwardAddForm";

const Award = () => {
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

  // 테스트용 데이터
  const [awardList, setAwardList] = useState([
    {
      title: "수상내역",
      description: "상세",
      isEditing: false,
    },
  ]);

  return (
    <Card style={{ width: "80rem" }}>
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
              />
            );
          })}

        {/* AwardAddList */}

        <AwardAddForm onAddAward={addAward} />
      </Card.Body>
    </Card>
  );
};

export default Award;
