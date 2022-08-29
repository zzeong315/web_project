import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import * as Api from "../../api";

import ProjectAddForm from "./ProjectAddForm";
import ProjectEditForm from "./ProjectEditForm";
import ProjectList from "./ProjectList";

const Project = ({ portfolioOwnerId, isEditable }) => {
  const [projects, setProjects] = useState([]);
  const [isAdding, setIsAdding] = useState(0);
  const [isEditing, setIsEditing] = useState([]);

  useEffect(() => {
    Api.get(`projects/${portfolioOwnerId}`).then((res) =>
      setProjects(res.data)
    );
  }, [portfolioOwnerId]);

  const dateFormat = (day) => {
    const [year, month, date] = [
      day.getFullYear(),
      day.getMonth() + 1,
      day.getDate(),
    ];
    return `${year}-${month < 10 ? `0${month}` : month}-${
      date < 10 ? `0${date}` : date
    }`;
  };

  const projectMap = (project, index) => {
    const handleEditClick = () => {
      const newisEditing = [...isEditing];
      newisEditing[index] = !newisEditing[index];
      setIsEditing(newisEditing);
    };

    const handleDeleteClick = async () => {
      const res = await Api.delete("project", project._id);
      setProjects([...res.data.projects]);
    };

    return (
      <>
        {isEditing[index] ? (
          <ProjectEditForm
            project={project}
            dateFormat={dateFormat}
            handleEditClick={handleEditClick}
            setProjects={setProjects}
          />
        ) : (
          <ProjectList
            project={project}
            index={index}
            handleEditClick={handleEditClick}
            handleDeleteClick={handleDeleteClick}
            isEditable={isEditable}
          />
        )}
      </>
    );
  };

  return (
    <Card className="mb-2">
      <Card.Body>
        <div className="card-title h5">프로젝트</div>
        <ul style={{ paddingLeft: 0 }}>
          {projects.length > 0 && projects.map(projectMap)}
        </ul>

        <div className="text-center">
          {isEditable ? (
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                setIsAdding(1);
              }}
            >
              +
            </button>
          ) : null}
        </div>

        {isAdding ? (
          <ProjectAddForm
            isAdding={isAdding}
            setIsAdding={setIsAdding}
            dateFormat={dateFormat}
            setProjects={setProjects}
          />
        ) : null}
      </Card.Body>
    </Card>
  );
};

export default Project;
