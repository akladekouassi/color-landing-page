import React from 'react';
import { Container } from 'react-bootstrap';
import { FontWeight } from 'theme/constants';
import { Paragraph } from 'components/atoms/Typo/Typo';
import Button from 'components/atoms/Button/Button';
import { Spacer } from 'components/atoms/Spacer/Spacer';
import './MostTechnology.scss';
import data from 'assets/data/data';
import Modal from 'components/atoms/Modal/Modal';

const MostTechnology: React.FC = () => {
  const [modalShow, setModalShow] = React.useState(false);
  const { mostTechnology } = data;
  const toggleModal = () => {
    setModalShow(prev => !prev);
  };
  return (
    <React.Fragment>
      <Container>
        <section className='content-wrapper'>
          <div className='d-flex justify-content-center paragraph-content'>
            <Paragraph className='paragraph' weight={FontWeight.NORMAL}>
              {mostTechnology.text}
            </Paragraph>
          </div>
          <Spacer direction='vertical' size={'medium'} />
          <div className='d-flex justify-content-center content-space-for-mobile'>
            <Button
              label={mostTechnology.buttonLabel}
              onClick={toggleModal}
              height={2}
              width={2}
              fontSize='p'
              className='button-on-mobile'
            />
            <Modal show={modalShow} onHide={() => setModalShow(false)} />
          </div>
        </section>
      </Container>
    </React.Fragment>
  );
};

export default MostTechnology;
