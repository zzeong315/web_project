import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import AwardEditForm from "./AwardEditForm";
import AwardList from "./AwardList";
import AwardAddForm from "./AwardAddForm";
import apis from "../../apis/apis";
import CardList from "../../assets/style/CardListSyled";

const Award = ({ isEditable, portfolioOwnerId }) => {
  const [isAdding, setIsAdding] = useState(false);

  const awardApi = apis.awardRepository;
  useEffect(() => {
    try {
      awardApi.getAwards(portfolioOwnerId).then((res) => {
        setAwards(res.data);
      });
    } catch (err) {
      console.log(err);
    }
  }, [portfolioOwnerId]);

  // 테스트용 데이터
  const [awards, setAwards] = useState([]);

  // award list add
  const addAward = async (name, description) => {
    try {
      const res = await awardApi.createAward({ name, description });
      const updateAward = res.data.awards; //이코드 계속 반복됨
      setAwards(updateAward);
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
  const deleteAward = async (awardId) => {
    try {
      const res = await awardApi.deleteAwardById(awardId);
      const updateAward = res.data.awards;
      setAwards(updateAward);
    } catch (err) {
      console.log(err);
    }
  };

  const confirmEdit = async (index, changeData) => {
    try {
      const res = await awardApi.updateAward(changeData);
      const updateAward = res.data.awards;
      setAwards(updateAward);
    } catch (err) {
      console.log(err);
    }
  };

  const cancelEdit = (index) => {
    const newAward = [...awards];
    newAward[index].isEditing = false;
    setAwards(newAward);
  };

  return (
    <Card className="mb-3">
      <CardList>
        <div className="title">수상이력</div>

        {/* Awards  & AwardEditForm */}
        <div>
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
            <div className="text-center mt-4 mb-3">
              {isEditable && (
                <button
                  type="button"
                  className="btn btn-primary"
                  onClick={(e) => setIsAdding(true)}
                >
                  +
                </button>
              )}
            </div>
        </div>
        {/* AwardAddList */}

        {isEditable && 
          <AwardAddForm 
            addAward={addAward}
            isAdding={isAdding} 
            setIsAdding={setIsAdding} 
          />
        }
      </CardList>
    </Card>
  );
};

export default Award;
