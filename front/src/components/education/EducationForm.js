import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Card, Form, Row, Col } from 'react-bootstrap';
import EducationList from './EducationList';

function EducationForm({edus, setEdus, onAddEdu}) {

    const handleChange = (e) => {
        const { name, value } = e.target
        setEdus(prevEdus => {
            return {
                ...prevEdus,
                [name]: value
            }
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(edus)
    }
    const clear = () => {

    }


    return(
        <>
        <Form onSubmit={handleSubmit}>
            <Row className="justify-content-md-center">
                <Form.Group className="mb-3" controlId="formSchool">
                <Form.Control 
                    type="school"
                    name="school"
                    placeholder="학교 이름"
                    value={edus.school}
                    onChange={handleChange}
                />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formMajor">                 
                <Form.Control 
                    type="major" 
                    name="major"
                    placeholder="전공" 
                    value={edus.major}
                    onChange={handleChange}
                />
                </Form.Group>
            </Row>
            <div>
                <Form.Check
                inline
                label="재학중"
                name="position"
                value="재학중"
                type="radio"
                id={`inline-radio-1`}
                checked={edus.position === "재학중"}
                onChange={handleChange}
                />
                <Form.Check
                inline
                label="학사졸업"
                name='position'
                value="학사졸업"
                type="radio"
                id={`inline-radio-2`}
                checked={edus.position === "학사졸업"}
                onChange={handleChange}
                />
                <Form.Check 
                inline 
                label="석사졸업" 
                type="radio"
                name='position'
                value="석사졸업"
                id={`inline-radio-3`} 
                checked={edus.position === "석사졸업"}
                onChange={handleChange}
                />
                <Form.Check 
                inline 
                label="박사졸업" 
                type="radio"
                name='position'
                value="박사졸업"
                id={`inline-radio-4`}
                checked={edus.position === "박사졸업"}
                onChange={handleChange}
                />
                </div>    

                <br />

                <Form.Group as={Row} className="mt-3 text-center">
                <Col sm={{ span: 20 }}>
                    <Button 
                        variant="primary" 
                        type="submit" 
                        className='me-3'
                        onClick={onAddEdu}
                    >
                        확인
                    </Button>
                    <Button 
                        variant="secondary"    
                        type="submit" 
                        className='me-3'
                        // onClick={clear}
                    >
                        취소
                    </Button>
                </Col>
                </Form.Group>
        </Form>
        </>
    )
}

export default EducationForm;