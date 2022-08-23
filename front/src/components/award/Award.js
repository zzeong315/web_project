import React, { useState, useEffect } from "react";
import { Button, Form, Card, Col } from "react-bootstrap";
import AwardEditForm from "./AwardEditForm";
import AwardList from "./AwardList";
import AwardAddForm from "./AwardAddForm";

const Award = () => {
  const [isEditing, setIsEditing] = useState(false);
  const [isAdding, setIsAdding] = useState(false);

  return (
    <Card style={{ width: "50rem" }}>
      <Card.Body>
        <Card.Title>수상이력</Card.Title>

        {/* AWARD LIST  & AwardEditForm */}
        {isEditing ? (
          <AwardEditForm setIsEditing={setIsEditing} />
        ) : (
          <AwardList setIsEditing={setIsEditing} />
        )}

        {/* AwardAddList */}
        <Col className="mb-3 text-center">
          <button
            type="button"
            className="btn btn-primary"
            onClick={(e) => setIsAdding(true)}
          >
            +
          </button>
        </Col>
        {isAdding && <AwardAddForm setIsAdding={setIsAdding} />}
      </Card.Body>
    </Card>
  );
};

export default Award;
