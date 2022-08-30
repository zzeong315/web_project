import React from "react";
import { List, ListName, ListDescription, ListRest } from "../CategorySyled";

const ProjectList = ({
  project,
  handleEditClick,
  handleDeleteClick,
  isEditable,
}) => {
  // return (
  //   <li
  //     className="justify-content-between align-items-center mb-2 row"
  //     key={project._id}
  //   >
  //     <div className="col">
  //       <p className="mb-0">{project.name}</p>
  //       <span className="text-muted">{project.description}</span>
  //       <br />
  //       <span className="text-muted">
  //         {project.start} ~ {project.end}
  //       </span>
  //     </div>

  //     {isEditable ? (
  //       <div className="d-flex justify-content-center col col-lg-2">
  //         <button
  //           type="button"
  //           className="mr-3 btn btn-outline-info btn-sm me-2"
  //           onClick={handleEditClick}
  //         >
  //           편집
  //         </button>
  //         <button
  //           type="button"
  //           className="mr-3 btn btn-outline-danger btn-sm"
  //           onClick={handleDeleteClick}
  //         >
  //           삭제
  //         </button>
  //       </div>
  //     ) : null}
  //   </li>
  // );

  return (
    <div
      className="align-items-center mt-4 row"
      key={project._id}
    >
      <List className="col">
        <ListName  className="d-block">{project.name}</ListName>
        <ListDescription  className="d-block text-muted">{project.description}</ListDescription>
        <ListRest  className="text-muted">
          {project.start} ~ {project.end}
        </ListRest>
      </List>

      {isEditable ? (
        <div className="d-flex justify-content-center col-md-2 mt-3">
          <button type="button"
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
