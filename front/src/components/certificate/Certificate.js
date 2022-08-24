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

  const addCertification = (title, description, date) => {
    const newCertification = [
      ...certificates,
      { title, description, date, isEditing: false },
    ];
    console.log(newCertification);
    setCertificates(newCertification);
  };

  return (
    <Card style={{ width: "80rem" }}>
      <Card.Body>
        <Card.Title>자격증</Card.Title>

        {certificates &&
          certificates.map((certificate, index) => {
            return certificate.isEditing ? (
              <CertificateEditForm />
            ) : (
              <CertificateList index={index} certificate={certificate} />
            );
          })}

        <CertificateAddForm onAddCertification={addCertification} />

        {/* <CertificateList />
        <CertificateEditForm />
        <CertificateAddForm /> */}
      </Card.Body>
    </Card>
  );
};

export default Certificate;
