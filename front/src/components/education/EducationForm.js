import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, Form, Row, Col} from 'react-bootstrap';


const ATTENDING = '재학중';
const BACHELOR_DEGREE = '학사졸업';
const MASTER_GRADUATION = '석사졸업';
const PHD_GRADUATION = '박사졸업';

export default function EducationForm({edu, onConfirm, onCancel}) {

    const [targetEducation, setTargetEducation] = useState({...edu});
    const handleChange = (e) => {
        const {name, value} = e.target;
        setTargetEducation({
            ...targetEducation,
            [name]: value,
        })
    };

    // 확인
    const confirmEducation = () => {
        onConfirm({...targetEducation});
    };

    // 취소
    const cancelEducation = () => {
        onCancel();
    };

    return (
        <>
            <Form>
                <Row className="justify-content-md-center">
                    <Form.Group className="mb-3" controlId="formSchool">
                        <Form.Control
                            type="name"
                            name="name"
                            placeholder="학교 이름"
                            value={targetEducation.name}
                            onChange={handleChange}
                        />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formMajor">
                        <Form.Control
                            type="major"
                            name="major"
                            placeholder="전공"
                            value={targetEducation.major}
                            onChange={handleChange}
                        />
                    </Form.Group>
                </Row>
                <div>
                    <Form.Check
                        inline
                        label="재학중"
                        name="status"
                        value={ATTENDING}
                        type="radio"
                        id={`inline-radio-1`}
                        checked={targetEducation.status === ATTENDING}
                        onChange={handleChange}
                    />
                    <Form.Check
                        inline
                        label="학사졸업"
                        name='status'
                        value={BACHELOR_DEGREE}
                        type="radio"
                        id={`inline-radio-2`}
                        checked={targetEducation.status === BACHELOR_DEGREE}
                        onChange={handleChange}
                    />
                    <Form.Check
                        inline
                        label="석사졸업"
                        type="radio"
                        name='status'
                        value={MASTER_GRADUATION}
                        id={`inline-radio-3`}
                        checked={targetEducation.status === MASTER_GRADUATION}
                        onChange={handleChange}
                    />
                    <Form.Check
                        inline
                        label="박사졸업"
                        type="radio"
                        name='status'
                        value={PHD_GRADUATION}
                        id={`inline-radio-4`}
                        checked={targetEducation.status === PHD_GRADUATION}
                        onChange={handleChange}
                    />
                </div>

                <br/>

                <Form.Group as={Row} className="mt-3 text-center">
                    <Col sm={{span: 20}}>
                        <Button
                            variant="primary"
                            type="button"
                            className='me-3'
                            onClick={confirmEducation}
                        >
                            확인
                        </Button>
                        <Button
                            variant="secondary"
                            type="submit"
                            className='me-3'
                            onClick={cancelEducation}
                        >
                            취소
                        </Button>
                    </Col>
                </Form.Group>
            </Form>
        </>
    )
}