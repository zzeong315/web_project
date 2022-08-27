import React, {useState, useEffect} from 'react';
import {Card} from 'react-bootstrap';
import "react-datepicker/dist/react-datepicker.css";
import * as Api from "../../api";

import ProjectAddForm from './ProjectAddForm';
import ProjectEditForm from './ProjectEditForm';
import ProjectList from './ProjectList';

const Project = ({portfolioOwnerId, isEditable}) => {
  // console.log(portfolioOwnerId) // 5e91b4b6-039c-434d-b05b-6af6fb58b6b4
  // console.log("Project", isEditable);
  
  const [projects, setProjects] = useState([]);
  
  // 모달
  const [isAdding, setIsAdding] = useState(0);
  const [isEditing, setIsEditing] = useState([]);

  //데이터 테스트
  useEffect(() => {
    Api.get(`project/${portfolioOwnerId}`, portfolioOwnerId).then((res) => setProjects(res.data));
  }, [portfolioOwnerId]); 

  const dateFormat = (day) => {
    const [year, month, date] = [day.getFullYear(), day.getMonth()+1, day.getDate()];
    return `${year}-${month < 10 ? `0${month}` : month }-${date < 10 ? `0${date}` : date }`
  }

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
                  {
                    isEditing[index] ? 
                    <ProjectEditForm 
                      project={project} 
                      index={index} 
                      dateFormat={dateFormat} 
                      handleEditClick={handleEditClick} 
                      projects={projects} 
                      setProjects={setProjects} 
                      portfolioOwnerId={portfolioOwnerId}/> : 
                    <ProjectList 
                      project={project} 
                      index={index} 
                      handleEditClick={handleEditClick} 
                      handleDeleteClick={handleDeleteClick} 
                      isEditable={isEditable}
                    />
                  }
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
          <ProjectAddForm 
            isAdding={isAdding} 
            setIsAdding={setIsAdding} 
            dateFormat={dateFormat} 
            projects={projects} 
            setProjects={setProjects}
            portfolioOwnerId={portfolioOwnerId}/> : 
          null 
        }
      </Card.Body>
    </Card>
  );
};

export default Project;