import React from 'react';
import { Col, Container, Row, Image } from 'react-bootstrap';
import { Title, Text } from 'components/atoms/Typo/Typo';
import { Spacer } from 'components/atoms/Spacer/Spacer';
import { FontWeight } from 'theme/constants';
import data from 'assets/data/data';
import './Footer.scss';

const Footer: React.FC = () => {
  const { footer } = data;
  return (
    <React.Fragment>
      <section className='footer-wrapper'>
        <Container>
          <Spacer direction='vertical' size='large' />
          <Row>
            <Row className='colorz-logo'>
              <Col xs={12} md={4} className='d-flex justify-content-start'>
                <Image src={footer.LogoColorz} />
              </Col>
            </Row>
            <Col xs={12} md={9}>
              <Row className='texte-section colorz-logo'>
                {footer.content.map((content, index) => (
                  <Col
                    xs={12}
                    md={4}
                    key={index}
                    className='d-flex justify-content-start'
                  >
                    <div>
                      <div>
                        <Title level={1}> {content.title} </Title>
                      </div>
                      <div style={{ width: 200 }}>
                        <Text size='p' weight={FontWeight.NORMAL}>
                          {content.text}
                        </Text>
                      </div>
                    </div>
                  </Col>
                ))}
              </Row>
            </Col>
            <Col xs={12} md={3} className=' align-self-center'>
              <div className='logo'>
                <Image
                  className=''
                  src={footer.LogoCreated}
                  width={90}
                  height={90}
                />
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </React.Fragment>
  );
};

export default Footer;
