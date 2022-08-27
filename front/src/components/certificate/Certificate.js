import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import CertificateEditForm from "./CertificateEditForm";
import CertificateList from "./CertificateList";
import CertificateAddForm from "./CertificateAddForm";
import * as Api from "../../api";

const Certificate = ({ isEditable, portfolioOwnerId }) => {
  const [certificates, setCertificates] = useState([]);

  useEffect(() => {
    Api.get(`certificate/${portfolioOwnerId}`).then((res) =>
      setCertificates(res.data)
    );
  }, [portfolioOwnerId]);

  const dateFormat = (date) => {
    let month = date.getMonth() + 1;
    let day = date.getDate();

    month = month >= 10 ? month : "0" + month;
    day = day >= 10 ? day : "0" + day;

    return date.getFullYear() + "-" + month + "-" + day;
  };

  // add certificate
  const addCertificate = async (newCertificate) => {
    const { date } = newCertificate;

    try {
      const res = await Api.post("certificate/add", {
        ...newCertificate,
        date: dateFormat(date),
      });
      const updateCertificate = res.data.certificates;
      setCertificates(updateCertificate);
    } catch (err) {
      console.log(err);
    }
  };

  // certificate editmode
  const changeEditMode = (index) => {
    const newCertificate = [...certificates];
    newCertificate[index].isEditing = true;

    setCertificates(newCertificate);
  };

  //delete
  const deleteCertificate = async (certificateId) => {
    try {
      const res = await Api.delete("certificate/delete", certificateId);
      const updateCertificate = res.data.certificates;
      setCertificates(updateCertificate);
    } catch (err) {
      console.log(err);
    }
  };

  // edit

  const confirmEdit = async (changeData) => {
    const { date } = changeData;

    try {
      const res = await Api.patch("certificate", {
        ...changeData,
        date: dateFormat(date),
      });
      const updateCertificate = res.data.certificates;
      setCertificates(updateCertificate);
    } catch (err) {
      console.log(err);
    }
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
                key={certificate._id}
                index={index}
                certificate={certificate}
                confirmEdit={confirmEdit}
                cancelEdit={cancelEdit}
              />
            ) : (
              <CertificateList
                key={certificate._id}
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
