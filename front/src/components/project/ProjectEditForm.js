import React, {useState} from 'react';
import {Form} from 'react-bootstrap';
import DatePicker from "react-datepicker";

const ProjectEditForm = ({project, index, dateFormat, handleEditClick, projects, setProjects}) => {
  const [editStr, setEditStr] = useState({name: project.name, detail: project.detail});
  const [editStartDate, seteditStartDate] = useState(new Date(project.start));
  const [editEndDate, setEditEndDate] = useState(new Date(project.end));

  const handleEditStrChange = (e) => {
    const {name, value} = e.target;
    const newEditStr = {...editStr};
    newEditStr[name] = value;
    setEditStr(newEditStr);
  }

  const handleEditSubmit = (e) => {
    e.preventDefault();
    if(!editStr.name || !editStr.detail) return;
    const newList = {...editStr ,start: dateFormat(editStartDate), end: dateFormat(editEndDate)};
    const newprojects = [...projects];
    newprojects.splice(index, 1, newList);

    setProjects(newprojects);
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
            name='detail' 
            placeholder="상세내역"
            value={editStr.detail}
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