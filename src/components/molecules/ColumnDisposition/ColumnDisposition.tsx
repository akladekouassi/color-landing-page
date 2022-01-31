import React from 'react';
import { Col, Container, Image } from 'react-bootstrap';
import Key from 'assets/icons/key-icon.png';
import { Title, Paragraph } from 'components/atoms/Typo/Typo';
import { FontWeight } from 'theme/constants';
import { Spacer } from 'components/atoms/Spacer/Spacer';
import clsx from 'clsx';
import './ColumnDisposition.scss';

interface ColumnDispositionProps {
  canDisplayImg: boolean;
  title: string;
  paragraph: string;
  className: string;
}

const ColumnDisposition: React.FC<ColumnDispositionProps> = ({
  canDisplayImg,
  title,
  paragraph,
  className
}) => {
  return (
    <React.Fragment>
      <Col xs={12} sm={12} md={5} lg={5} className='align-self-center'>
        <Container className={clsx(className, 'spacing-on-mobile')}>
          {canDisplayImg && (
            <>
              <div>
                <Image src={Key} width={60} height={60} />
              </div>
              <Spacer direction='vertical' size='xSmall' />
            </>
          )}
          <div className={clsx('d-flex justify-content-start')}>
            <Title level={1}> {title} </Title>
          </div>
          <Spacer direction='vertical' size='xSmall' />
          <Paragraph
            className='d-flex justify-content-center'
            weight={FontWeight.MEDIUM}
          >
            {paragraph}
          </Paragraph>
        </Container>
      </Col>
    </React.Fragment>
  );
};

export default ColumnDisposition;
