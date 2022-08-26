import React from 'react';

const ProjectList = ({list, i, handleEditClick, handleDeleteClick, isEditable}) => {
  return (
    <li className="justify-content-between align-items-center mb-2 row" key={i}>
      <div className="col">
        <p>{list.title}</p>
        <span>{list.detail}</span>
        <br />
        <span>{list.start} ~ {list.end}</span>
      </div>
      
      {
        isEditable ?
        (<div class="d-flex justify-content-center col col-lg-2">
          <button type="button" className="mr-3 btn btn-outline-info btn-sm me-2" onClick={handleEditClick}>편집</button>
          <button type="button" className="mr-3 btn btn-outline-danger btn-sm" onClick={handleDeleteClick}>삭제</button>
        </div>) :
        null
      }
    </li>
  );
};

export default ProjectList;