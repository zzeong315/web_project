import React, { useState, useEffect } from "react";
import { Card, Col } from "react-bootstrap";
import CertificateEditForm from "./CertificateEditForm";
import CertificateList from "./CertificateList";
import CertificateAddForm from "./CertificateAddForm";

const Certificate = ({ isEditable }) => {
  //가짜데이터
  const [certificates, setCertificates] = useState([
    {
      name: "1번 자격증",
      description: "설명",
      date: new Date(), // "2022/03/02"
      isEditing: false,
    },
  ]);

  // add certificate
  const addCertificate = (name, description, date) => {
    const newCertificate = [
      ...certificates,
      { name, description, date, isEditing: false },
    ];
    setCertificates(newCertificate);
  };

  // certificate editmode
  const changeEditMode = (index) => {
    const newCertificate = [...certificates];
    newCertificate[index].isEditing = true;

    setCertificates(newCertificate);
  };

  //delete

  const deleteCertificate = (index) => {
    const newCertificate = [...certificates];

    newCertificate.splice(index, 1);

    setCertificates(newCertificate);
  };

  // edit

  const confirmEdit = (index, changeData) => {
    const newCertificate = [...certificates];
    newCertificate[index] = {
      ...changeData,
      isEditing: false,
    };
    setCertificates(newCertificate);
  };

  const cancelEdit = (index) => {
    const newCertificate = [...certificates];
    newCertificate[index] = { ...certificates[index], isEditing: false };
    setCertificates(newCertificate);
  };

  return (
    <Card>
      <Card.Body>
        <Card.Title>자격증</Card.Title>

        {certificates &&
          certificates.map((certificate, index) => {
            return certificate.isEditing ? (
              <CertificateEditForm
                index={index}
                certificate={certificate}
                confirmEdit={confirmEdit}
                cancelEdit={cancelEdit}
              />
            ) : (
              <CertificateList
                index={index}
                certificate={certificate}
                changeEditMode={changeEditMode}
                deleteCertificate={deleteCertificate}
                isEditable={isEditable}
              />
            );
          })}

        {isEditable && <CertificateAddForm addCertificate={addCertificate} />}
      </Card.Body>
    </Card>
  );
};

export default Certificate;
