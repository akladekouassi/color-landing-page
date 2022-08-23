import React from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import { Title } from 'components/atoms/Typo/Typo';
import { FontWeight } from 'theme/constants';
import Button from 'components/atoms/Button/Button';
import clsx from 'clsx';
import data from 'assets/data/data';
import './ChooseVisionSection.scss';
import Modal from 'components/atoms/Modal/Modal';
import { renderScreenSize, renderClassNames } from 'Utils/Utils';

const ChooseVisionSection: React.FC = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const { chooseYourVision } = data;
  const toggleModal = () => {
    setModalShow(prev => !prev);
  };

  return (
    <React.Fragment>
      <div className='choose-vision-wrapper'>
        <Container>
          <div className='d-flex justify-content-center title'>
            <Title
              className='hero-title text-center'
              level={1}
              weight={FontWeight.MEDIUM}
            >
              {chooseYourVision.title}
            </Title>
          </div>
          <div className='d-flex justify-content-center '>
            <Button
              onClick={toggleModal}
              label={chooseYourVision.buttonLabel}
              width={3}
              height={3}
              fontSize='p'
            />
            <Modal show={modalShow} onHide={() => setModalShow(false)} />
          </div>
        </Container>
        <Row>
          {chooseYourVision.images.map((src, index) => (
            <Col
              xs={renderScreenSize(index)}
              md={renderScreenSize(index)}
              className={clsx('d-flex', renderClassNames(index))}
            >
              <div className='anysituation-img'>
                <Image
                  src={src}
                  className='img-responsive anysituation-img'
                  key={index}
                  alt={`${src}-${index}`}
                />
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </React.Fragment>
  );
};

export default ChooseVisionSection;
