import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Card, Row, Col} from 'react-bootstrap';
import EducationForm from "./EducationForm";

export default function EducationList({edu, updateEdu, deleteEdu , isEditable}) {
    const [isEditing, setIsEditing] = useState(false);
    const handleEditClick = () => {
        if (isEditing) {
            setIsEditing(false);
        } else {
            setIsEditing(true);
        }
    };

    const handleDeleteClick = (e) => {
        deleteEdu(edu.id)
    }

    const confirmEditEducation = (educationObj) => {
        updateEdu(educationObj);
        setIsEditing(false);
    };

    const cancelEditEducation = () => {
        setIsEditing(false);
    };

    return (
        <Card.Text>
            {isEditing ?
                (<EducationForm
                    edu={{
                        ...edu,
                    }}
                    onConfirm={confirmEditEducation}
                    onCancel={cancelEditEducation}
                />) : (
                <Row className="align-items-center">
                <Col className="col">
                    <span>{edu.name}</span>
                    <br/>
                    <span className="text-muted">{`${edu.major} (${edu.status || ""})`}</span>
                </Col>
                {isEditable &&
                    <Col className="d-flex justify-content-center" md="2">
                        <Button
                        variant="outline-info"
                        size="sm"
                        onClick={handleEditClick}
                        className="me-3"
                        >
                        편집
                        </Button>
                        <Button
                        variant="outline-danger"
                        size="sm"
                        onClick={handleDeleteClick}
                        className="me-3"
                        >
                        삭제
                        </Button>
                    </Col>
                }
                </Row>
                )}
        </Card.Text>
    )
}