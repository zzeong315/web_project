import React from "react";

const ProjectList = ({
  project,
  handleEditClick,
  handleDeleteClick,
  isEditable,
}) => {
  return (
    <div className="align-items-center mt-4 row" key={project._id}>
      <div className="col list">
        <span className="name">{project.name}</span>
        <span className="description">
          {project.description}
        </span>
        <span className="rest">
          {project.start} ~ {project.end}
        </span>
      </div>

      {isEditable ? (
        <div className="d-flex justify-content-center col-md-2 mt-3">
          <button
            type="button"
            className="me-2 btn btn-outline-primary btn-sm"
            onClick={handleEditClick}
          >
            편집
          </button>
          <button
            type="button"
            className="btn btn-outline-secondary btn-sm"
            onClick={handleDeleteClick}
          >
            삭제
          </button>
        </div>
      ) : null}
    </div>
  );
};

export default ProjectList;
