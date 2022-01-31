import React from 'react';
import { Col, Container, Row, Card } from 'react-bootstrap';
import './Products.scss';
import { Title } from '../../atoms/Typo/Typo';
import { Spacer } from 'components/atoms/Spacer/Spacer';
import { FontWeight } from 'theme/constants';
import data from 'assets/data/data';

const Products: React.FC = () => {
  const { products } = data;
  return (
    <React.Fragment>
      <Spacer direction='vertical' size='xLarge' />
      <Container>
        <div className='d-flex justify-content-center'>
          <Title
            level={1}
            weight={FontWeight.MEDIUM}
            className='title text-center'
          >
            {products.title}
          </Title>
        </div>
        <Spacer direction='vertical' size='large' />
        <div className='container'>
          <Row>
            {products.products.map((product, index) => (
              <Col md={4} key={index} className='d-flex justify-content-center'>
                <div className=' anysituation-img'>
                  <Card
                    className='text-center anysituation-img'
                    style={{ width: '25rem' }}
                  >
                    <Card.Img
                      variant='bottom'
                      src={product.image}
                      alt={`${product.name}-${index}`}
                    />
                    <Card.Body>
                      <Card.Text> {product.name} </Card.Text>
                      <Card.Text> {product.price} </Card.Text>
                    </Card.Body>
                  </Card>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </Container>
      <Spacer direction='vertical' size='xLarge' />
    </React.Fragment>
  );
};

export default Products;
