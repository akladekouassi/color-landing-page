import React from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import Rectangle29 from 'assets/images/Rectangle29.png';
import { Title, Paragraph } from 'components/atoms/Typo/Typo';
import { FontWeight } from 'theme/constants';
import DisposeContent from 'components/molecules/DisposeContent/DisposeContent';
import ColumnDisposition from 'components/molecules/ColumnDisposition/ColumnDisposition';
import data from 'assets/data/data';
import './AnySituationSection.scss';

const AnySituationSection: React.FC = () => {
  const { anySituation } = data;
  return (
    <React.Fragment>
      <div>
        <DisposeContent
          textColor='black'
          titleColor='red'
          canDisplayPriceCard={false}
          firstText={anySituation.text}
          secondText={anySituation.firstTitle}
        />
        <Row>
          <Col xs={12} md={7} className='img-responsive'>
            <div className=''>
              <Image
                className='img-responsive anysituation-img'
                src={anySituation.image}
              />
            </div>
          </Col>
          <ColumnDisposition
            className='ffdsfds'
            canDisplayImg={true}
            title={anySituation.secondTitle}
            paragraph={anySituation.description}
          />
        </Row>
      </div>
    </React.Fragment>
  );
};

export default AnySituationSection;
