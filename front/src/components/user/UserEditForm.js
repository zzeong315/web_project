import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button, Form, Card, Col, Row } from "react-bootstrap";
import apis from "../../apis/apis";
import { DispatchContext } from "../../App";

function UserEditForm({ user, setIsEditing, setUser }) {
  //useState로 name 상태를 생성함.
  const [name, setName] = useState(user.name);
  //useState로 email 상태를 생성함.
  const [email, setEmail] = useState(user.email);
  //useState로 description 상태를 생성함.
  const [description, setDescription] = useState(user.description);
  const Api = apis.userRepository;

  const navigate = useNavigate();
  const dispatch = useContext(DispatchContext);
  const [file, setFile] = useState();
  const [imgUrl, setImgUrl] = useState(user.imgUrl);

  const handlePreviewImg = (e) => {
    e.preventDefault();
    const reader = new FileReader();

    // e.target.files[0] || return ;

    const img = e.target.files[0];

    reader.onloadend = function (e) {
      setFile(img);
      console.log("onloadend", e.target.result);
      setImgUrl(e.target.result);
    };

    img && reader.readAsDataURL(img);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("file", file);

    const response = await Api.updateProfileImg(formData);
    console.log("submit!!", response.data.imgUrl);

    // "users/유저id" 엔드포인트로 PUT 요청함.
    const res = await Api.updateUserById(user.id, {
      name,
      email,
      description,
      imgUrl: response.data.imgUrl,
    });
    // 유저 정보는 response의 data임.
    const updatedUser = res.data;
    // 해당 유저 정보로 user을 세팅함.
    console.log(updatedUser);
    setUser(updatedUser);

    // isEditing을 false로 세팅함.
    setIsEditing(false);
  };

  // 사용자 탈퇴
  const handleDeleteClick = async (e) => {
    e.preventDefault();

    try {
      const res = await Api.deleteUserById(user.id);
      sessionStorage.removeItem("userToken");
      dispatch({ type: "DELETE_USER" });
      navigate("/");
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Card className="mb-2">
      <Card.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="useEditName" className="mb-3">
            <Row className="justify-content-md-center">
              <div
                className="rounded"
                style={{ width: "10rem", height: "10rem" }}
              >
                <Card.Img
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "cover",
                  }}
                  className="mb-3"
                  htmlFor="photo-upload"
                  src={imgUrl}
                  alt="profile image"
                />
              </div>
            </Row>
            <input id="photo-upload" type="file" onChange={handlePreviewImg} />

            <Form.Control
              type="text"
              placeholder="이름"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="userEditEmail" className="mb-3">
            <Form.Control
              type="email"
              placeholder="이메일"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="userEditDescription">
            <Form.Control
              type="text"
              placeholder="정보, 인사말"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </Form.Group>

          <Form.Group as={Row} className="mt-3 text-center">
            <Col sm={{ span: 20 }}>
              <Button variant="primary" type="submit" className="me-3">
                확인
              </Button>
              <Button variant="secondary" onClick={() => setIsEditing(false)}>
                취소
              </Button>
            </Col>
          </Form.Group>
        </Form>
        <Button variant="link" onClick={handleDeleteClick}>
          회원탈퇴
        </Button>
      </Card.Body>
    </Card>
  );
}

export default UserEditForm;
