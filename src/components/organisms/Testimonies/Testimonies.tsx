import React, { useState } from 'react';
import { Container } from 'react-bootstrap';
import clsx from 'clsx';
import data from 'assets/data/data';
import './Testimonies.scss';

const Testimonies: React.FC = () => {
  const { testimonies }: Record<string, any> = data;
  const [current, setCurrent] = useState<Record<string, any>>(testimonies[0]);
  const [active, setActive] = useState<number>(0);

  const handleSetClick = (event: any) => {
    setCurrent(testimonies[event.target.getAttribute('data-quote')]);
    setActive(event.target.getAttribute('data-quote'));
  };

  return (
    <React.Fragment>
      <div className='wrapped'>
        <Container>
          <div className='testimonies-wrapper'>
            <p className='quote-content'>{current.quote}</p>
            <p className='client-content'>{current.client}</p>
            <div className='testimonies-content'>
              {Object.keys(testimonies).map(index => (
                <span
                  className={clsx(
                    'quote-indicator',
                    Boolean(parseInt(index, 10) === active) &&
                      `data-quote-${active}`
                  )}
                  onClick={event => handleSetClick(event)}
                  data-quote={index}
                  key={index}
                />
              ))}
            </div>
          </div>
        </Container>
      </div>
    </React.Fragment>
  );
};

export default Testimonies;
