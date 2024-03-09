import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Spinner } from 'react-bootstrap';
import NavbarComp from './components/Navbar';
import CardComp from './components/CardComp';

const URL = 'https://mocki.io/v1/ddb7e0a8-e218-4e36-b1be-b902cdb1c098';

const App = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchData = async (url) => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
    setLoading(false);
  };

  useEffect(() => {
    fetchData(URL);
  }, []);

  return (
    <>
      <header style={{fontFamily:'Poppins'}}>
        <NavbarComp data={data} />
      </header>
      <Container fluid style={{fontFamily:'Poppins'}}>
        <body style={{ marginLeft: '50px', marginRight: '50px', marginTop: '25px', marginBottom: '25px' }}>
          {loading ? (
            <div className="text-center">
              <Spinner animation="border" variant="primary" />
            </div>
          ) : (
            <>
              <h4 style={{ marginBottom: '25px', color: 'grey' }}>Administrators</h4>
              <Row>
                {data.filter((user) => user.role === 'admin').map((user, index) => (
                  <Col key={index} xs={12} sm={6} md={4} lg={3}>
                    <CardComp user={user} />
                  </Col>
                ))}
              </Row>
              <hr />
              <h4 style={{ marginBottom: '25px', color: 'grey' }}>Members</h4>
              <Row>
                {data.filter((user) => user.role === 'member').map((user, index) => (
                  <Col key={index} xs={12} sm={6} md={4} lg={3}>
                    <CardComp user={user} />
                  </Col>
                ))}
              </Row>
            </>
          )}
        </body>
      </Container>
    </>
  );
};

export default App;
