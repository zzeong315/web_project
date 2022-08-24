import React, { useState, useEffect } from "react";
import { Card, Col } from "react-bootstrap";
import CertificateEditForm from "./CertificateEditForm";
import CertificateList from "./CertificateList";
import CertificateAddForm from "./CertificateAddForm";

const Certificate = () => {
  //가짜데이터
  const [certificates, setCertificates] = useState([
    {
      title: "1번 자격증",
      description: "설명",
      date: new Date(), // "2022/03/02"
      isEditing: false,
    },
  ]);

  // add certificate
  const addCertificate = (title, description, date) => {
    const newCertificate = [
      ...certificates,
      { title, description, date, isEditing: false },
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
    <Card style={{ width: "80rem" }}>
      <Card.Body>
        <Card.Title>자격증</Card.Title>

        {certificates &&
          certificates.map((certificate, index) => {
            return certificate.isEditing ? (
              <CertificateEditForm
                index={index}
                certificate={certificate}
                onEditSubmit={confirmEdit}
                onEditCancel={cancelEdit}
              />
            ) : (
              <CertificateList
                index={index}
                certificate={certificate}
                onEditMode={changeEditMode}
                onDelete={deleteCertificate}
              />
            );
          })}

        <CertificateAddForm onAddnCertificate={addCertificate} />
      </Card.Body>
    </Card>
  );
};

export default Certificate;
