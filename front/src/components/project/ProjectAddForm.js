import React, { useState } from "react";
import { Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import apis from "../../apis/apis";

const ProjectAddForm = ({ isAdding, setIsAdding, setProjects, dateFormat }) => {
  const [addStr, setAddStr] = useState({ name: "", description: "" });
  const [addStartDate, setAddStartDate] = useState(new Date());
  const [addEndDate, setAddEndDate] = useState(new Date());
  const Api = apis.proRepository;

  // 프로젝트 2글자 이상인가 확인
  const isNameValid = addStr.name.length >= 2;
  // 상세내역 5글자 이상인가 확인
  const isDescriptionValid = addStr.description.length >= 5;
  // 위 2개 조건이 동시에 만족되는 확인
  const isFormValid = isNameValid && isDescriptionValid;

  const clearForm = () => {
    setAddStr({ name: "", description: "" });
    setAddStartDate(new Date());
    setAddEndDate(new Date());
    setIsAdding(!isAdding);
  };

  const handleAddStrChange = (e) => {
    const { name, value } = e.target;
    const newAddStr = { ...addStr };
    newAddStr[name] = value;
    setAddStr(newAddStr);
  };

  const handleAddSubmit = async (e) => {
    e.preventDefault();
    if (!addStr.name || !addStr.description) return;
    const newList = {
      ...addStr,
      start: dateFormat(addStartDate),
      end: dateFormat(addEndDate),
    };

    const res = await Api.createProject(newList);
    setProjects([...res.data.projects]);

    clearForm();
  };

  return (
    <>
      <Form onSubmit={handleAddSubmit}>
        <div className="mt-3 mb-3">
          <Form.Control
            type="text"
            name="name"
            placeholder="프로젝트 제목"
            autoFocus
            value={addStr.name}
            onChange={handleAddStrChange}
          />
          {!isNameValid && (
            <Form.Text className="text-secondary">
              프로젝트 제목을 2글자 이상으로 작성해 주세요. 
            </Form.Text>
          )}
        
          <div className="mt-3">
            <Form.Control
              type="text"
              name="description"
              placeholder="상세내역"
              value={addStr.description}
              onChange={handleAddStrChange}
            />
            {!isDescriptionValid&& (
              <Form.Text className="text-secondary">
                상세내역을 5글자 이상으로 작성해 주세요. 
              </Form.Text>
            )}
          </div>
          <div className="calendars mt-3" style={{ display: "flex" }}>
            <div>
              <DatePicker
                className="me-3"
                selected={addStartDate}
                onChange={(data) => setAddStartDate(data)}
              />
            </div>

            <div>
              <DatePicker
                selected={addEndDate}
                onChange={(data) => setAddEndDate(data)}
              />
            </div>
          </div>
        </div>
        <div className="col-sm-20 mb-5 text-center">
          <button 
            type="submit" 
            className="me-3 btn btn-primary"
            disabled={!isFormValid}
          >
            확인
          </button>
          <button
            type="button"
            className="btn btn-secondary"
            onClick={() => setIsAdding(0)}
          >
            취소
          </button>
        </div>
      </Form>
    </>
  );
};

export default ProjectAddForm;
