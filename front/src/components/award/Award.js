import React, { useState, useEffect } from "react";
import { Card, Col } from "react-bootstrap";
import AwardEditForm from "./AwardEditForm";
import AwardList from "./AwardList";
import AwardAddForm from "./AwardAddForm";
import * as Api from "../../api";

const Award = ({ isEditable, portfolioOwnerId }) => {
  useEffect(() => {
    try {
      Api.get("awards", portfolioOwnerId).then((res) => {
        setAwards(res.data);
        console.log(res.data);
      });
    } catch (err) {
      console.log(err);
    }
  }, [portfolioOwnerId]);

  // 테스트용 데이터
  const [awards, setAwards] = useState([
    {
      name: "수상내역",
      description: "상세",
      isEditing: false,
    },
  ]);

  // award list add
  const addAward = async (name, description) => {
    // const newAward = [...awards, { name, description, isEditing: false }];
    // setAwards(newAward);
    console.log(name, description);

    try {
      // "user" 엔드포인트로 post요청함.
      await Api.post("award", {
        name,
        description,
      });

      Api.get("awards", portfolioOwnerId).then((res) => {
        setAwards(res.data);
      });
    } catch (err) {
      console.log(err);
    }
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

  const confirmEdit = async (index, changeData) => {
    console.log("confirmEdit!!");
    console.log(changeData);

    // const data = await Api.patch("award", { ...changeData });
    try {
      console.log("changeData", changeData);
      await Api.patch("award", { ...changeData }); // awardId
      Api.get("awards", portfolioOwnerId).then((res) => {
        setAwards(res.data);
      });
    } catch (err) {
      console.log(err);
    }

    // const newAward = [...awards];
    // newAward[index] = {
    //   ...changeData,
    //   isEditing: false,
    // };
    // setAwards(newAward);
  };

  const cancelEdit = (index) => {
    console.log("cancelEdit!!");
    const newAward = [...awards];
    newAward[index].isEditing = false;
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
                key={award._id}
                index={index}
                award={award}
                confirmEdit={confirmEdit}
                cancelEdit={cancelEdit}
              />
            ) : (
              <AwardList
                key={award._id}
                index={index}
                award={award}
                changeEditMode={changeEditMode}
                deleteAward={deleteAward}
                isEditable={isEditable}
              />
            );
          })}

        {/* AwardAddList */}

        {isEditable && <AwardAddForm addAward={addAward} />}
      </Card.Body>
    </Card>
  );
};

export default Award;
