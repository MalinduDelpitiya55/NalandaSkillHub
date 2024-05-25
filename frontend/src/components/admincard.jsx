
import { Row, Col, Card } from 'react-bootstrap';
import Buyer from '../assets/admin/buyer.png';
import Payment from '../assets/admin/payment.png';
import Post from '../assets/admin/post.png';
import Seller from '../assets/admin/seller.png';

const cardData = [
  {
    title: '153',
    text: 'Total Buyer',
    color: 'bg-success',
    icon: Buyer,
  },
  {
    title: '1450',
    text: 'Total Seller',
    color: 'bg-primary',
    icon: Seller,
  },
  {
    title: '674',
    text: 'Total Gig',
    color: 'bg-warning',
    icon: Post,
  },
  {
    title: '352',
    text: 'Total Payment ',
    color: 'bg-danger',
    icon: Payment ,
  },
];

const DashboardStats = () => {
  return (
    <>
    <style>
        {`
        .admincard{
          font-size: 20px;
          font-weight: 600;
        }
        `}
    </style>
    <Row className="mb-4">
      {cardData.map((card, index) => (
        <Col md={3} key={index}>
          <Card className={`${card.color} text-white`}>
            <Card.Body>
              <div className="d-flex align-items-center">
              <img src={card.icon} alt=" Admin Card Image" width={65} />
                <div className='call p-3 m-3 '>
                  <Card.Title className='admincard'>{card.title}</Card.Title>
                  <Card.Text className='admincard'>{card.text}</Card.Text>
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
    </>
  );
};

export default DashboardStats;
