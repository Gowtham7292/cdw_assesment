import React from 'react';
import { Card, Row, Col, Image } from 'react-bootstrap';

const CardComp = ({ user }) => {
  return (
    <Card style={{ width: '250px', height: '80px', margin: '0.5rem', boxShadow: '0 4px 8px 0 rgba(0,0,0,0.2)', border: 'none', cursor: 'pointer', fontFamily: 'Poppins'}}>
      <Card.Body>
        <Row>
          <Col xs={4} className="d-flex align-items-center justify-content-center" style={{ paddingRight: '10px' }}>
            <Image src={user.img} roundedCircle style={{ width: '50px', height: '50px' }} />
          </Col>
          <Col xs={8} className="d-flex align-items-center justify-content-flex-start">
            <div>
              <Card.Title style={{ marginBottom: '0.25rem', fontSize: '1rem' }}><b>{user.first_name} {user.last_name}</b></Card.Title>
              <Card.Text style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap',fontSize: '0.65rem',color:'grey'}}><b>{user.email}</b></Card.Text>
            </div>
          </Col>
        </Row>
      </Card.Body>
    </Card>
  );
};

export default CardComp;
