import React, {useState} from 'react';
import {Card} from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";

import './Project.css';
import ProjectAddForm from './ProjectAddForm';
import ProjectEditForm from './ProjectEditForm';
import ProjectList from './ProjectList';

const Project = () => {
  const [projectData, setProjectData] = useState([
    {title: '웹프로젝트1', detail: '포트폴리오사이트',  start: '2022-08-23', end: '2022-09-03'},
    {title: '웹프로젝트2', detail: '포트폴리오사이트2',  start: '2022-08-24', end: '2022-09-07'},
  ]);

  const changeDateStr = (day) => {
    const [year, month, date] = [day.getFullYear(), day.getMonth()+1, day.getDate()];
    return `${year}-${month < 10 ? `0${month}` : month }-${date < 10 ? `0${date}` : date }`
  }

  // 모달
  const [addModal, setAddModal] = useState(0);
  const [editModal, setEditModal] = useState([0, 0]);

  return (
    <Card>
      <Card.Body>
        <div className="card-title h5" style={{textAlign: 'left'}}>프로젝트</div>
        <ul style={{paddingLeft: 0 }}>
          {
            projectData.map((list, i) => {
              const handleEditClick = () => {
                const newEditModal = [...editModal];
                newEditModal[i] = !newEditModal[i];
                setEditModal(newEditModal);
              }

              const handleDeleteClick = () => {
                const newProjectData = [...projectData];
                newProjectData.splice(i, 1);
                setProjectData(newProjectData);
              }

              return (
                <>
                  {editModal[i] ? 
                  <ProjectEditForm list={list} i={i} changeDateStr={changeDateStr} handleEditClick={handleEditClick} projectData={projectData} setProjectData={setProjectData}/> : 
                  <ProjectList list={list} i={i} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick}/>}
                </>
              )
            })
          }
        </ul>

        <button type="button" className="btn btn-primary" onClick={()=>{setAddModal(!addModal)}}>+</button>
        { 
          addModal ? 
          <ProjectAddForm addModal={addModal} setAddModal={setAddModal} changeDateStr={changeDateStr} projectData={projectData} setProjectData={setProjectData}/> : 
          null 
        }
      </Card.Body>
    </Card>
  );
};

export default Project;