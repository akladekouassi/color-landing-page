import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { FontWeight } from 'theme/constants';
import { Title, Text } from 'components/atoms/Typo/Typo';
import { Spacer } from 'components/atoms/Spacer/Spacer';
import clsx from 'clsx';
import './DisposeContent.scss';

interface DisposeContentProps {
  firstText: string;
  secondText: string;
  canDisplayPriceCard: boolean;
  textColor: string;
  titleColor: string;
}

const DisposeContent: React.FC<DisposeContentProps> = ({
  firstText,
  secondText,
  textColor,
  titleColor,
  canDisplayPriceCard = true
}: DisposeContentProps) => {
  return (
    <React.Fragment>
      <Container className='dispose-content-wrapper'>
        <Text
          className={clsx(
            `d-flex justify-content-center dispose-content-title color-${textColor}`
          )}
          size='p'
          weight={FontWeight.MEDIUM}
        >
          {firstText}
        </Text>
        <div className='d-flex justify-content-center'>
          <Title
            className={clsx(`dispose-content-description color-${titleColor}`)}
            level={1}
          >
            {secondText}
          </Title>
        </div>

        {canDisplayPriceCard && (
          <>
            <Spacer direction='vertical' size='xxxLarge' />
            <Row className='offer-on-mobile'>
              <Col
                md={{ span: 5, offset: 7 }}
                className='d-flex justify-content-end align-self-center ffdfd'
              >
                <div className='offer-container'>
                  <div className='offer-content '>
                    <div className='d-flex justify-content-center'>
                      <Title className={clsx(`offer-text`)} level={1}>
                        SPECIAL OFFER
                      </Title>
                    </div>
                    <div className='d-flex justify-content-center'>
                      <Title className={clsx(`offer-price`)} level={1}>
                        799,99€*
                      </Title>
                    </div>
                    <div className='d-flex justify-content-center'>
                      <Title className={clsx(`offer-right-price`)} level={1}>
                        *instead of €1,499.99
                      </Title>
                    </div>
                  </div>
                </div>
              </Col>
            </Row>
          </>
        )}
      </Container>
    </React.Fragment>
  );
};

export default DisposeContent;
