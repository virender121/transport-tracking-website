import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { HomeData } from '../../data/HomeData';
import './HomeCard1.css';

const HomeCard1 = () => {
  return (
    <div clasName='home_card'>
    <Container fluid className='container_card1'>
      <Row className='justify-content-flex-end'>
        {HomeData.map((home, id) => {
          return (
            <Col key={id} md={4} className='mb-5 '>
              <Card className='card1'>
              
                <Card.Body>
                  <Card.Title>{home.heading}</Card.Title>
                  <Card.Text>{home.description}</Card.Text>
                  <Button variant='secondary' className='btn2 fs-16'>
                    Read more
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          );
        })}
      </Row>
    </Container>
    </div>
  );
};

export default HomeCard1;
