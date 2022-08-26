import React from 'react';

const ProjectList = ({list, i, handleEditClick, handleDeleteClick}) => {
  return (
    <li className="justify-content-between align-items-center mb-2 row" key={i} style={{textAlign: 'left'}}>
      <div className="col">
        <p style={{marginBottom: 0}}>{list.title}</p>
        <span>{list.detail}</span>
        <br />
        <span>{list.start} ~ {list.end}</span>
      </div>
      
      <div class="col-lg-1 col">
        <button type="button" className="mr-3 btn btn-outline-info btn-sm" name={i} onClick={handleEditClick}>편집</button>
      </div>
      <div class="col-lg-1 col">
        <button type="button" className="mr-3 btn btn-outline-info btn-sm" name={i} onClick={handleDeleteClick}>삭제</button>
      </div>
    </li>
  );
};

export default ProjectList;