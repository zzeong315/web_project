import React from 'react';

const ProjectList = ({project, index, handleEditClick, handleDeleteClick, isEditable}) => {
  return (
    <li className="justify-content-between align-items-center mb-2 row" key={project._id}>
      <div className="col">
        <p className='mb-0'>{project.name}</p>
        <span>{project.description}</span>
        <br />
        <span>{project.start} ~ {project.end}</span>
      </div>
      
      {
        isEditable ?
        (<div className="d-flex justify-content-center col col-lg-2">
          <button type="button" className="mr-3 btn btn-outline-info btn-sm me-2" onClick={handleEditClick}>편집</button>
          <button type="button" className="mr-3 btn btn-outline-danger btn-sm" onClick={handleDeleteClick}>삭제</button>
        </div>) :
        null
      }
    </li>
  );
};

export default ProjectList;