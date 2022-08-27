import React, {useState} from 'react';
import {Form} from 'react-bootstrap';
import DatePicker from "react-datepicker";
import * as Api from "../../api";

const ProjectEditForm = ({projects, setProjects, project, index, dateFormat, handleEditClick, portfolioOwnerId}) => {
  const [editStr, setEditStr] = useState({name: project.name, description: project.description});
  const [editStartDate, seteditStartDate] = useState(new Date(project.start));
  const [editEndDate, setEditEndDate] = useState(new Date(project.end));

  const handleEditStrChange = (e) => {
    const {name, value} = e.target;
    const newEditStr = {...editStr};
    newEditStr[name] = value;
    setEditStr(newEditStr);
  }

  const handleEditSubmit = async (e) => {
    e.preventDefault();

    if(!editStr.name || !editStr.description) return;
    
    const newList = {projectId: portfolioOwnerId, ...editStr, start: dateFormat(editStartDate), end: dateFormat(editEndDate)};

    const res = await Api.patch('project', newList);
    const updateProject = res.data.projects;
    console.log('updateProject', updateProject)

    setProjects(updateProject);

    // await Api.patch('project', newList);
    // Api.get("project", portfolioOwnerId).then((res) => setProjects(res.data));

    // setProjects(res.data);
    // console.log(projects)
    
    // const updateProject = res.data.projects;
    // console.log(`patch res`, res);
    // console.log(`patch res.data`, res.data);
    // console.log(`patch updateProject`, updateProject);


    // setProjects(updateProject);

    // const newprojects = [...projects];
    // newprojects.splice(index, 1, newprojects);


    // setProjects(updateProject);
    // setProjects(res);
    handleEditClick();
  }

  return (
    <>
      <Form onSubmit={handleEditSubmit} key={index}>
        <div className="mt-3">
          <Form.Control 
            type="text" 
            name='name' 
            placeholder="프로젝트 제목" 
            value={editStr.name}
            onChange={handleEditStrChange}
          />
        </div>
        <div className="mt-3">
          <Form.Control 
            type="text"
            name='description' 
            placeholder="상세내역"
            value={editStr.description}
            onChange={handleEditStrChange}
          />
        </div>

        <div className='calendars mt-3' style={{display: 'flex'}}>
          <div>
            <DatePicker className='me-3' selected={editStartDate} onChange={data => seteditStartDate(data)}/>
          </div>

          <div>            
            <DatePicker selected={editEndDate} onChange={data => setEditEndDate(data)}/>
          </div>
        </div>

        <div class="col-sm-20 mt-3 text-center">
          <button type="submit" class="me-3 btn btn-primary">확인</button>
          <button type="button" class="btn btn-secondary" onClick={handleEditClick}>취소</button>
        </div>
      </Form>
    </>
  );
};

export default ProjectEditForm;