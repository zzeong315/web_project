import React, { useState } from 'react';
import {Form} from 'react-bootstrap';
import DatePicker from "react-datepicker";
import * as Api from "../../api";

const ProjectAddForm = ({isAdding, setIsAdding, projects, setProjects, dateFormat, portfolioOwnerId}) => {
    // add
    const [addStr, setAddStr] = useState({name: '', description: ''});
    const [addStartDate, setAddStartDate] = useState(new Date());
    const [addEndDate, setAddEndDate] = useState(new Date());
  
    const clearForm = () => {
      setAddStr({name: '', description: ''});
      setAddStartDate(new Date());
      setAddEndDate(new Date());
      setIsAdding(!isAdding);
    }
  
    const handleAddStrChange = (e) => {
      const {name, value} = e.target;
      const newAddStr = {...addStr};
      newAddStr[name] = value;
      setAddStr(newAddStr);
    }
  
    const handleAddSubmit = async (e) => {
      e.preventDefault();
      if(!addStr.name || !addStr.description) return;
      const newList = { ...addStr, start: dateFormat(addStartDate), end: dateFormat(addEndDate)};
      
      const res = await Api.post('project/add', newList);
      const updateProject = res.data.projects;
      setProjects(updateProject);

      // await Api.post('project/add', newList);
      // await Api.get('project', portfolioOwnerId).then((res)=>{setProjects(res.data)});
      
      clearForm();
    }

  return (
    <>
      <Form onSubmit={handleAddSubmit}>
            <div class="mt-3">
              <Form.Control 
                type="text" 
                name='name' 
                placeholder="프로젝트 제목" 
                value={addStr.name}
                onChange={handleAddStrChange}
              />
            </div>
            <div class="mt-3">
              <Form.Control 
                type="text" 
                name='description'
                placeholder="상세내역"
                value={addStr.description}
                onChange={handleAddStrChange}
              />
            </div>

            <div className='calendars mt-3' style={{display: 'flex'}}>
              <div>
                <DatePicker className='me-3' selected={addStartDate} onChange={data => setAddStartDate(data)}/>
              </div>

              <div>            
                <DatePicker selected={addEndDate} onChange={data => setAddEndDate(data)}/>
              </div>
            </div>

            <div class="col-sm-20 mt-3 text-center">
              <button type="submit" class="me-3 btn btn-primary">확인</button>
              <button type="button" class="btn btn-secondary" onClick={()=>setIsAdding(0)}>취소</button>
            </div>
        </Form>
    </>
  );
};

export default ProjectAddForm;