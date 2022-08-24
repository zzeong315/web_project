import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Card, Form, Row, Col} from 'react-bootstrap';
import EducationForm from "./EducationForm";

export default function EducationList({edu, setEdus, updateEdu}) {

    const [isEditing, setIsEditing] = useState(false);
    const handleEditClick = () => {
        if (isEditing) {
            setIsEditing(false);
        } else {
            setIsEditing(true);
        }
    };

    const confirmEditEducation = (educationObj) => {
        updateEdu(educationObj);
        setIsEditing(false);
    };

    const cancelEditEducation = () => {
        setIsEditing(false);
    };

    return (
        <>
            <div className="align-items-center row">
                <div className="col">
                    <span>{edu.school}</span>
                    <br/>
                    <span className="text-muted">{edu.major}</span>
                    <span className="text-muted">{edu.position}</span>
                </div>
                <div className="col-lg-1 col">
                    <button
                        type="button"
                        className="mr-3 btn btn-outline-info btn-sm"
                        onClick={handleEditClick}
                    >
                        편집
                    </button>
                </div>
            </div>
            {isEditing ?
                <EducationForm
                    edu={{
                        ...edu,
                    }}
                    onConfirm={confirmEditEducation}
                    onCancel={cancelEditEducation}
                /> : ""}
        </>
    )
}