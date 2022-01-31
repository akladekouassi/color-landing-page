import React from 'react';
import { Col, Row, Spinner } from 'react-bootstrap';

const SpinnerComponent: React.FC = (): JSX.Element => {
  return (
    <React.Fragment>
      <Row>
        <Col xs={12} sm={12} md={12} className='d-flex justify-content-center'>
          <Spinner
            animation='grow'
            role='status'
            style={{
              width: 150,
              height: 150,
              backgroundColor: '#f0380f',
              marginTop: '20%'
            }}
          >
            <span className='visually-hidden'>Loading...</span>
          </Spinner>
        </Col>
      </Row>
    </React.Fragment>
  );
};

export default SpinnerComponent;
