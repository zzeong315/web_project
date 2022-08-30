import React, { useState, useEffect } from "react";
import { List, ListName, ListDescription, ListRest } from "../CategorySyled";

const CertificateList = ({
  index,
  certificate,
  changeEditMode,
  deleteCertificate,
  isEditable,
}) => {
  const { name, description, date } = certificate;

  // 
  return (
    <div className="align-items-center mt-4 row">
      <List className="col">
        <ListName className="d-block">{name}</ListName>
        <ListDescription className="d-block text-muted">{description}</ListDescription>
        <ListRest className="text-muted">{date}</ListRest>
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
              deleteCertificate(certificate._id);
            }}
          >
            삭제
          </button>
        </div>
      )}
    </div>
  );
};

export default CertificateList;
