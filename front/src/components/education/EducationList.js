import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Form, Row, Col } from 'react-bootstrap';

function EducationList({edus}) {
    return(
        <>
            <div className="align-items-center row">
                <div className="col">
                    <span>{edus.school}</span>
                    <br />
                    <span className="text-muted">{edus.major}</span>
                    <span className="text-muted">{edus.position}</span>
                </div>
                <div className="col-lg-1 col">
                    <button 
                    type="button" 
                    className="mr-3 btn btn-outline-info btn-sm"
                    >
                    편집
                    </button>
                </div>
            </div>
        </>
    )
}

export default EducationList;