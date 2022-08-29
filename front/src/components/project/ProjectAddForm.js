import React, { useState } from "react";
import { Form } from "react-bootstrap";
import DatePicker from "react-datepicker";
import * as Api from "../../apis/api";

const ProjectAddForm = ({ isAdding, setIsAdding, setProjects, dateFormat }) => {
  const [addStr, setAddStr] = useState({ name: "", description: "" });
  const [addStartDate, setAddStartDate] = useState(new Date());
  const [addEndDate, setAddEndDate] = useState(new Date());

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

    const res = await Api.post("project/add", newList);
    setProjects([...res.data.projects]);

    clearForm();
  };

  return (
    <>
      <Form onSubmit={handleAddSubmit}>
        <div className="mt-3">
          <Form.Control
            type="text"
            name="name"
            placeholder="프로젝트 제목"
            value={addStr.name}
            onChange={handleAddStrChange}
          />
        </div>
        <div className="mt-3">
          <Form.Control
            type="text"
            name="description"
            placeholder="상세내역"
            value={addStr.description}
            onChange={handleAddStrChange}
          />
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

        <div className="col-sm-20 mt-3 text-center">
          <button type="submit" className="me-3 btn btn-primary">
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