import { useNavigate } from "react-router-dom";
import { Card, Row, Button, Col } from "react-bootstrap";
import userDefaultImg from '../../assets/imgs/user.png';
import UserCardWrap from '../../assets/style/UserSyled'

function UserCard({ user, setIsEditing, isEditable, isNetwork }) {
  const navigate = useNavigate();
  const descriptionLength = user?.description.length >= 25;

  return (
    <Card className="mb-3 ms-3" style={{ width: "18rem" }}>
      <UserCardWrap>
        <Row style={{justifyContent: 'center'}}>
          <div className="imgWrap">
            <img
              src={user?.imgUrl ?? userDefaultImg}
              alt="profile image"
            />
          </div>
        </Row>
        <Card.Title className="mt-3">{user?.name}</Card.Title>
        <Card.Subtitle className="text-muted">{user?.email}</Card.Subtitle>
        {!isNetwork ? 
          <Card.Text className="mt-3">{user?.description}</Card.Text> :
          <Card.Text className="mt-3">
            {descriptionLength ? user?.description.substring(0, 25) + "..." : user?.description}
          </Card.Text>
        }

        {isEditable && (
          <Col>
            <Row className="mt-4 text-center text-info">
              <Col sm={{ span: 20 }}>
                <Button
                  variant="outline-primary"
                  size="sm"
                  onClick={() => setIsEditing(true)}
                >
                  편집
                </Button>
              </Col>
            </Row>
          </Col>
        )}

        {isNetwork && (
          <button className="portfolioBtn"
          onClick={() => navigate(`/users/${user.id}`)}
          >
          포트폴리오 구경하기
          </button>
        )}
      </UserCardWrap>
    </Card>
  );
}

export default UserCard;