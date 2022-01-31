import React from 'react';
import { Row } from 'react-bootstrap';
import Carousel from 'nuka-carousel';
import data from 'assets/data/data';

const CarouselComponent: React.FC = () => {
  const { carousel } = data;
  return (
    <React.Fragment>
      <div>
        <Row>
          <Carousel
            defaultControlsConfig={{
              prevButtonStyle: { display: 'none' },
              nextButtonStyle: { display: 'none' }
            }}
            speed={5}
            withoutControls={false}
            wrapAround={true}
            swiping={true}
            autoplay={true}
          >
            {carousel.map((src, index) => (
              <img src={src} key={index} alt={`${src}-${index}`} />
            ))}
          </Carousel>
        </Row>
      </div>
    </React.Fragment>
  );
};

export default CarouselComponent;
