import {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Card, Form, Row, Col} from 'react-bootstrap';
import EducationForm from './EducationForm';
import EducationList from './EducationList'

export default function Education() {

    const [edus, setEdus] = useState([]);

    const [isAdding, setIsAdding] = useState(false);
    const handleAddEductionClick = () => {
        if (isAdding) {
            setIsAdding(false);
        } else {
            setIsAdding(true);
        }
    };

    const confirmAddEduction = (targetEducation) => {
        const educationObj = {
            ...targetEducation,
            id: Math.floor(Math.random() * 10000),
        };
        setEdus([...edus, educationObj]);
        setIsAdding(false);
    };

    const cancelAddEducation = () => {
        setIsAdding(false);
    };

    const updateEducation = (editedEducationObj) => {
        const updatedEdus = [...edus];
        updatedEdus[edus.findIndex(edu => edu.id === editedEducationObj.id)] = {
            ...editedEducationObj
        };
        setEdus([...updatedEdus]);
    };

    return (
        <Card>
            <Card.Body>
                <h5>학력</h5>
                {edus.length > 0 && edus.map((eduObj, index) => {
                    return (
                        <EducationList key={index} edu={eduObj} updateEdu={updateEducation}/>
                    )
                })}
                <div className="mt-3 text-center mb-4 row">
                    <div className="col-sm-20">
                        <button
                            type="button"
                            className="btn btn-primary"
                            onClick={handleAddEductionClick}
                        >
                            +
                        </button>
                    </div>
                </div>
                {isAdding ?
                    <EducationForm
                        edu={{
                            id: null,
                            school: '',
                            major: '',
                            position: '재학중',
                        }}
                        onConfirm={confirmAddEduction}
                        onCancel={cancelAddEducation}
                    /> : ""}
            </Card.Body>
        </Card>
    );
}