import { useNavigate } from "react-router-dom";
import { Card, Row, Button, Col } from "react-bootstrap";
import userDefaultImg from '../../assets/imgs/user.png';
import { CardContent, ImgWarp, ImgBox, PortfolioBtn } from '../../assets/style/UserSyled'

function UserCard({ user, setIsEditing, isEditable, isNetwork }) {
  const navigate = useNavigate();

  return (
    <Card className="mb-2 ms-3 mr-5" style={{ width: "18rem" }}>
      <CardContent>
        <Row style={{justifyContent: 'center'}}>
          <ImgWarp>
            <ImgBox
            src={user?.imgUrl ?? userDefaultImg}
            alt="profile image"
            />
          </ImgWarp>
        </Row>
        <Card.Title className="mt-3">{user?.name}</Card.Title>
        <Card.Subtitle className="text-muted">{user?.email}</Card.Subtitle>
        <Card.Text className="mt-3">{user?.description}</Card.Text>

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
          <PortfolioBtn
          onClick={() => navigate(`/users/${user.id}`)}
          >
          포트폴리오 구경하기
          </PortfolioBtn>
        )}
      </CardContent>
    </Card>
  );
}

export default UserCard;