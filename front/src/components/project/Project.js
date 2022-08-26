import React, {useState} from 'react';
import {Card} from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";

import ProjectAddForm from './ProjectAddForm';
import ProjectEditForm from './ProjectEditForm';
import ProjectList from './ProjectList';

const Project = ({isEditable}) => {
  const [projects, setProjects] = useState([
    {name: '웹프로젝트1', description: '포트폴리오사이트',  start: '2022-08-23', end: '2022-09-03'},
    {name: '웹프로젝트2', description: '포트폴리오사이트2',  start: '2022-08-24', end: '2022-09-07'},
  ]);

  const dateFormat = (day) => {
    const [year, month, date] = [day.getFullYear(), day.getMonth()+1, day.getDate()];
    return `${year}-${month < 10 ? `0${month}` : month }-${date < 10 ? `0${date}` : date }`
  }

  // 모달
  const [isAdding, setIsAdding] = useState(0);
  const [isEditing, setIsEditing] = useState([0, 0]);

  return (
    <Card className='mb-2'>
      <Card.Body>
        <div className="card-title h5">프로젝트</div>
        <ul style={{paddingLeft: 0 }}>
          {
            projects.map((project, index) => {
              const handleEditClick = () => {
                const newisEditing = [...isEditing];
                newisEditing[index] = !newisEditing[index];
                setIsEditing(newisEditing);
              }

              const handleDeleteClick = () => {
                const newprojects = [...projects];
                newprojects.splice(index, 1);
                setProjects(newprojects);
              }

              return (
                <>
                  {isEditing[index] ? 
                  <ProjectEditForm project={project} index={index} dateFormat={dateFormat} handleEditClick={handleEditClick} projects={projects} setProjects={setProjects}/> : 
                  <ProjectList project={project} index={index} handleEditClick={handleEditClick} handleDeleteClick={handleDeleteClick} isEditable={isEditable}/>}
                </>
              )
            })
          }
        </ul>

        <div className='text-center'>
          {
            isEditable ? <button type="button" className="btn btn-primary" onClick={()=>{setIsAdding(1)}}>+</button> : null
          }
        </div>

        { 
          isAdding ? 
          <ProjectAddForm isAdding={isAdding} setIsAdding={setIsAdding} dateFormat={dateFormat} projects={projects} setProjects={setProjects}/> : 
          null 
        }
      </Card.Body>
    </Card>
  );
};

export default Project;