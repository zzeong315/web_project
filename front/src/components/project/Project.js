import React, { useState, useEffect } from "react";
import { Card } from "react-bootstrap";
import "react-datepicker/dist/react-datepicker.css";
import apis from "../../apis/apis";

import ProjectAddForm from "./ProjectAddForm";
import ProjectEditForm from "./ProjectEditForm";
import ProjectList from "./ProjectList";
import CardList from "../../assets/style/CardListSyled";

const Project = ({ portfolioOwnerId, isEditable }) => {
  const [projects, setProjects] = useState([]);
  const [isAdding, setIsAdding] = useState(0);
  const [isEditing, setIsEditing] = useState([]);
  const Api = apis.proRepository;

  useEffect(() => {
    Api.getProjects(portfolioOwnerId).then((res) => setProjects(res.data));
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

  const handleEditClick = (index) => {
    const newisEditing = [...isEditing];
    newisEditing[index] = !newisEditing[index];
    setIsEditing(newisEditing);
  };

  const handleDeleteClick = async (project) => {
    const res = await Api.deleteProjectById(project._id);
    setProjects([...res.data.projects]);
  };

  return (
    <Card className="mb-3">
      <CardList>
        <div className="title">프로젝트</div>
        <div>
          {projects.length > 0 &&
            projects.map((project, index) => {
              return isEditing[index] ? (
                <ProjectEditForm
                  key={project._id}
                  project={project}
                  dateFormat={dateFormat}
                  handleEditClick={() => {
                    handleEditClick(index);
                  }}
                  setProjects={setProjects}
                />
              ) : (
                <ProjectList
                  key={project._id}
                  project={project}
                  handleEditClick={() => handleEditClick(index)}
                  handleDeleteClick={() => handleDeleteClick(project)}
                  isEditable={isEditable}
                />
              );
            })}
        </div>

        <div className="text-center mt-4 mb-3">
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
      </CardList>
    </Card>
  );
};

export default Project;
