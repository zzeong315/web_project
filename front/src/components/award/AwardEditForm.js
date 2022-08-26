import React, { useState, useEffect } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";

const AwardEditForm = ({ index, awards, setAwards }) => {
  const award = awards[index];

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setName(award.name);
    setDescription(award.description);
  }, []);

  const handleEditSumit = (e) => {
    if (name && description) {
      const newAward = [...awards];
      newAward[index] = {
        name,
        description,
        isEditing: false,
      };
      setAwards(newAward);
    }
  };
  const handleEditCancel = (e) => {
    const newAward = [...awards];
    newAward[index].isEditing = false;
    setAwards(newAward);
  };
  return (
    <Form>
      <Form.Group className="mb-3" controlId="awardAddTitle">
        <Form.Control
          type="text"
          placeholder="수상내역"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="awardAddDescription">
        <Form.Control
          type="text"
          placeholder="상세내역"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </Form.Group>
      <Row className="mb-5">
        <Col className="text-center">
          <Button className="me-3" variant="primary" onClick={handleEditSumit}>
            확인
          </Button>{" "}
          <Button variant="secondary" onClick={handleEditCancel}>
            취소
          </Button>{" "}
        </Col>
      </Row>
    </Form>
  );
};

export default AwardEditForm;
