import React from 'react';
import { Col, Row, Image } from 'react-bootstrap';
import ColumnDisposition from 'components/molecules/ColumnDisposition/ColumnDisposition';
import data from 'assets/data/data';
import './AdvandedTechnology.scss';

const AdvandedTechnology: React.FC = () => {
  const { advancedTechnology } = data;
  return (
    <React.Fragment>
      <div className='container'>
        <Row>
          <ColumnDisposition
            className='mobile-center'
            canDisplayImg={false}
            title={advancedTechnology.title}
            paragraph={advancedTechnology.description}
          />
          <Col xs={12} sm={6} md={7} lg={6} className='text-center'>
            <div className='text-center'>
              <Image
                bsPrefix='img'
                className='advanced-tech-img'
                src={advancedTechnology.image}
              />
            </div>
          </Col>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default AdvandedTechnology;
