import React, { useState } from "react";
import { Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import apis from "../../apis/apis";

const ProjectEditForm = ({
  setProjects,
  project,
  dateFormat,
  handleEditClick,
}) => {
  const [editStr, setEditStr] = useState({
    name: project.name,
    description: project.description,
  });
  const [editStartDate, seteditStartDate] = useState(new Date(project.start));
  const [editEndDate, setEditEndDate] = useState(new Date(project.end));
  const Api = apis.proRepository;

  // 프로젝트 2글자 이상인가 확인
  const isNameValid = editStr.name.length >= 2;
  // 상세내역 5글자 이상인가 확인
  const isDescriptionValid = editStr.description.length >= 5;
  // 위 2개 조건이 동시에 만족되는 확인
  const isFormValid = isNameValid && isDescriptionValid;

  const handleEditStrChange = (e) => {
    const { name, value } = e.target;
    const newEditStr = { ...editStr };
    newEditStr[name] = value;
    setEditStr(newEditStr);
  };

  const handleEditSubmit = async (e) => {
    e.preventDefault();

    if (!editStr.name || !editStr.description) return;
    const newList = {
      projectId: project._id,
      ...editStr,
      start: dateFormat(editStartDate),
      end: dateFormat(editEndDate),
    };

    const res = await Api.updateProject(newList);
    setProjects([...res.data.projects]);
    handleEditClick();
  };

  return (
    <>
      <Form onSubmit={handleEditSubmit}  className="mt-4">
        <div>
          <Form.Control
            type="text"
            name="name"
            placeholder="프로젝트 제목"
            autoFocus
            value={editStr.name}
            onChange={handleEditStrChange}
          />
          {!isNameValid && (
            <Form.Text className="text-secondary">
              프로젝트 제목을 2글자 이상으로 작성해 주세요. 
            </Form.Text>
          )}
        </div>
        <div className="mt-3">
          <Form.Control
            type="text"
            name="description"
            placeholder="상세내역"
            value={editStr.description}
            onChange={handleEditStrChange}
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
              selected={editStartDate}
              onChange={(data) => seteditStartDate(data)}
            />
          </div>

          <div>
            <DatePicker
              selected={editEndDate}
              onChange={(data) => setEditEndDate(data)}
            />
          </div>
        </div>

        <div className="col-sm-20 mt-3 text-center">
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
            onClick={handleEditClick}
          >
            취소
          </button>
        </div>
      </Form>
    </>
  );
};

export default ProjectEditForm;
