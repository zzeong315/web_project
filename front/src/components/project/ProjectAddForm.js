import React, { useState } from 'react';
import {Form} from 'react-bootstrap';
import DatePicker from "react-datepicker";

const ProjectAddForm = ({addModal, setAddModal, projectData, setProjectData, changeDateStr}) => {
    // add
    const [addStr, setAddStr] = useState({title: '', detail: ''});
    const [addStartDate, setAddStartDate] = useState(new Date());
    const [addEndDate, setAddEndDate] = useState(new Date());
  
    const reset = () => {
      setAddStr({title: '', detail: ''});
      setAddStartDate(new Date());
      setAddEndDate(new Date());
      setAddModal(!addModal);
    }
  
    const handleAddStrChange = (e) => {
      const {name, value} = e.target;
      const newAddStr = {...addStr};
      newAddStr[name] = value;
      setAddStr(newAddStr);
    }
  
    const handleAddSubmit = (e) => {
      e.preventDefault();
      const newList = { ...addStr ,start: changeDateStr(addStartDate), end: changeDateStr(addEndDate)};
      setProjectData([...projectData, newList]);
      reset();
    }

  return (
    <>
      <Form onSubmit={handleAddSubmit}>
            <div class="mt-3">
              <Form.Control 
                type="text" 
                name='title' 
                placeholder="프로젝트 제목" 
                value={addStr.title}
                onChange={handleAddStrChange}
              />
            </div>
            <div class="mt-3">
              <Form.Control 
                type="text" 
                name='detail'
                placeholder="상세내역"
                value={addStr.detail}
                onChange={handleAddStrChange}
              />
            </div>

            <div className='calendars mt-3'>
              <div>
                <DatePicker
                  selected={addStartDate}
                  onChange={data => setAddStartDate(data)}
                />
              </div>

              <div>            
                <DatePicker
                  selected={addEndDate}
                  onChange={data => setAddEndDate(data)}
                />
              </div>
            </div>

            <div class="col-sm-20 mt-3">
              <button type="submit" class="me-3 btn btn-primary">확인</button>
              <button type="button" class="btn btn-secondary" onClick={()=>setAddModal(0)}>취소</button>
            </div>
        </Form>
    </>
  );
};

export default ProjectAddForm;