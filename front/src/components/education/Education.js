import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import { Button, Card, Form, Row, Col } from 'react-bootstrap';
import EducationForm from './EducationForm';
import EducationList from './EducationList'

function Education() {
  const [isEditing, setIsEditing] = useState(false);
  const [edus, setEdus] = useState([{
    school: "",
    major: "",
    position: "",
  }])

  const onAddEdu = () => {
    const newEdu = {
      id: Math.floor(Math.random() * 10000),
      school: "",
      major: "",
      position: "",
    }
    setEdus([...edus, newEdu])
    // console.log(edus)

    return(
      <div>
        {edus.map(edu => (<EducationList edus={edu}/>))}
      </div>
    )
  }
  
  return (
    <Card>
      <Card.Body>
        <h5>학력</h5>
        {edus? onAddEdu : ""}
        <div class="mt-3 text-center mb-4 row">
            <div class="col-sm-20">
                <button 
                    type="button" 
                    class="btn btn-primary"
                    onClick={() => setIsEditing(true)}
                >
                    +
                </button>
            </div>
        </div>
        {isEditing ? 
          <EducationForm 
            edus={edus}
            setEdus={setEdus}
            onAddEdu={onAddEdu}
          /> : ""} 
        
      </Card.Body>
    </Card>
  );
}

export default Education;