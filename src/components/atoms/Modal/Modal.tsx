import React from 'react';
import { Image, Modal, ModalProps } from 'react-bootstrap';
import { FontWeight } from 'theme/constants';
import { Title, Text, Paragraph } from 'components/atoms/Typo/Typo';
import clsx from 'clsx';
import data from 'assets/data/data';
import './Modal.scss';

const ModalComponent: React.FC<ModalProps> = ({ onHide, ...props }) => {
  const { modal } = data;
  return (
    <React.Fragment>
      <Modal
        {...props}
        size='lg'
        aria-labelledby='contained-modal-title-vcenter'
        centered
      >
        <Modal.Header onClick={onHide} className='modal-header' closeButton />
        <Modal.Body className='modal-body'>
          <div className='d-flex justify-content-center monkey'>
            <Image src={modal.icon} />
          </div>

          <div className='d-flex justify-content-center title'>
            <Title level={1}> {modal.title} </Title>
          </div>
          <div>
            <Text
              className={clsx(`justify-content-center description-1`)}
              weight={FontWeight.NORMAL}
              size='p'
            >
              {modal['body-normal-text']}{' '}
              <span style={{ fontWeight: 'bold' }}>
                {modal['body-bold-text']}
              </span>
            </Text>
          </div>

          <Paragraph
            className={clsx(`d-flex justify-content-center description-1`)}
            weight={FontWeight.NORMAL}
          >
            {modal.footer}
          </Paragraph>
        </Modal.Body>
      </Modal>
    </React.Fragment>
  );
};

export default ModalComponent;
