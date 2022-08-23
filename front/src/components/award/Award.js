import React, { useState, useEffect } from "react";
import { Button, Form, Card } from "react-bootstrap";
import AwardEditForm from "./AwardEditForm";
import AwardList from "./AwardList";

const Award = () => {
  const [isEditing, setIsEditing] = useState(false);

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
        <button type="button" class="btn btn-primary">
          +
        </button>
      </Card.Body>
    </Card>
  );
};

export default Award;
