import React, {useState} from 'react';
import {Form} from 'react-bootstrap';
import DatePicker from "react-datepicker";

const ProjectEditForm = ({list, i, changeDateStr, handleEditClick, projects, setProjects}) => {
  const [editStr, setEditStr] = useState({title: list.title, detail: list.detail});
  const [editStartDate, seteditStartDate] = useState(new Date(list.start));
  const [editEndDate, setEditEndDate] = useState(new Date(list.end));

  const handleEditStrChange = (e) => {
    const {name, value} = e.target;
    const newEditStr = {...editStr};
    newEditStr[name] = value;
    setEditStr(newEditStr);
  }

  const handleEditSubmit = (e) => {
    e.preventDefault();
    const newList = {...editStr ,start: changeDateStr(editStartDate), end: changeDateStr(editEndDate)};
    const newProjects = [...projects];
    newProjects.splice(i, 1, newList);

    setProjects(newProjects);
    handleEditClick();
  }

  return (
    <>
      <Form onSubmit={handleEditSubmit} key={i}>
        <div className="mt-3">
          <Form.Control 
            type="text" 
            name='title' 
            placeholder="프로젝트 제목" 
            value={editStr.title}
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