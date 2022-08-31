import React, { useState, useEffect } from "react";
import {
  List,
  ListDescription,
  ListName,
} from "../../assets/style/CategorySyled";

const AwardList = ({
  index,
  award,
  changeEditMode,
  deleteAward,
  isEditable,
}) => {
  const { name, description } = award;

  return (
    <div className="align-items-center mt-4 row">
      <List className="col">
        <ListName className="d-block">{name}</ListName>
        <ListDescription className="text-muted">{description}</ListDescription>
      </List>
      {isEditable && (
        <div className="d-flex justify-content-center col-md-2 mt-3">
          <button
            type="button"
            className="me-2 btn btn-outline-primary btn-sm"
            onClick={(e) => {
              changeEditMode(index);
            }}
          >
            편집
          </button>

          <button
            type="button"
            className="btn btn-outline-secondary btn-sm"
            onClick={(e) => {
              deleteAward(award._id);
            }}
          >
            삭제
          </button>
        </div>
      )}
    </div>
  );
};

export default AwardList;
