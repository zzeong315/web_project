import React, { useState, useEffect } from "react";
import { Button, Form, Row, Col } from "react-bootstrap";

const AwardEditForm = ({ index, awardList, setAwardList }) => {
  const award = awardList[index];

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  useEffect(() => {
    setTitle(award.title);
    setDescription(award.description);
  }, []);

  const onEditSumit = (e) => {
    const newAward = [...awardList];
    newAward[index] = {
      title,
      description,
      isEditing: false,
    };
    setAwardList(newAward);
  };
  const onEditCancel = (e) => {
    const newAward = [...awardList];
    newAward[index].isEditing = false;
    setAwardList(newAward);
  };
  return (
    <Form>
      <Form.Group className="mb-3" controlId="awardAddTitle">
        <Form.Control
          type="text"
          placeholder="수상내역"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
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
          <Button className="me-3" variant="primary" onClick={onEditSumit}>
            확인
          </Button>{" "}
          <Button variant="secondary" onClick={onEditCancel}>
            취소
          </Button>{" "}
        </Col>
      </Row>
    </Form>
  );
};

export default AwardEditForm;
