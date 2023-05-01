import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import SubscriptionPic from '../../components/Images/subscription_pic.jpg';
import './Subscription.css';

const Subscription = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/newSubscription');
  };

  return (
    <div>
      <div className="subscription">
        <h1 className="header_subscription">Subscription</h1>
      </div>
      <Container>
        <Row className="cards flex">
          <Col className="flex-column flex-c">
            <p className="text_sub fs-16">
              Logistics Management magazine is the leading publication for
              logistics and supply chain professionals. Each issue is packed
              with timely insider information that you can use to better manage
              your entire logistics operation. Frequency: monthly.
            </p>
            <p className="text_sub fs-16">
              To begin or renew your magazine subscription, please select from
              the choices below
            </p>
            <div className="button_spac">
              <Button
                className="button_subscription ls-2"
                onClick={handleClick}
              >
                Start a Free Subscription
              </Button>
              <Button className="button_subscription">
                Renew your Current Subscription
              </Button>
            </div>
            <p className="text_sub fs-16">
              For assistance with other questions about your Logistics
              Management subscription, including duplicate subscriptions and
              back issue purchases, we can be reached by:
            </p>
          </Col>
          <Col className="flex">
            <img src={SubscriptionPic} alt="pic_sub" />
          </Col>
        </Row>
        <Row className="justify-content-center mt-5">
          <Col xs={12} md={8}>
            <img
              src="https://www.zoho.com/subscriptions/features/images/subscriptions-management/multiple-subscriptions-1x.png"
              alt="subscribe"
              className="w-100"
            />
          </Col>
        </Row>
      </Container>
      <Footer />
    </div>
  );
};

export default Subscription;
