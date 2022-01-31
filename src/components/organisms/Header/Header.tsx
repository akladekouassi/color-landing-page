import React from 'react';
import { Col, Row } from 'react-bootstrap';
import Button from 'components/atoms/Button/Button';
import DisposeContent from 'components/molecules/DisposeContent/DisposeContent';
import BackgroundImg from 'assets/backgrounds/Hero1.png';
import data from 'assets/data/data';
import Modal from 'components/atoms/Modal/Modal';
import './Header.scss';

const Header: React.FC = () => {
  const [modalShow, setModalShow] = React.useState<boolean>(false);

  const { header: headerData } = data;

  const toggleModal = () => {
    setModalShow(prev => !prev);
  };

  return (
    <React.Fragment>
      <header
        className='header-wrapper'
        style={{
          backgroundImage: `url(${BackgroundImg})`,
          backgroundPosition: 'center',
          backgroundColor: '#e5e5e3',
          position: 'relative',
          backgroundSize: 'cover,contain',
          backgroundRepeat: 'no-repeat',
          minHeight: '100%',
          height: '150vh',
          width: '100%',
          placeItems: 'center'
        }}
      >
        <Row>
          <div>
            <nav
              className='navbar navbar-expand-lg ftco-navbar-light'
              id='ftco-navbar'
            >
              <div className='container'>
                <Col
                  xs={12}
                  sm={12}
                  md={6}
                  lg={6}
                  className='d-flex align-items-center'
                >
                  <a href='index.html' className='navbar-brand center-logo'>
                    {headerData.logo}
                  </a>
                </Col>
                <Col xs={12} md={6} className='d-none d-lg-block'>
                  <div className=' d-flex justify-content-end' id='ftco-nav'>
                    <ul className='navbar-nav ml-auto mr-md-3'>
                      {headerData.menuLabels.map((label, index) => (
                        <li className='nav-item' key={index}>
                          <a href='index.html' className='nav-link'>
                            {label}
                          </a>
                        </li>
                      ))}

                      <li className='nav-item'>
                        <Button
                          onClick={toggleModal}
                          label={headerData.buttonLabel}
                          height={1}
                          width={1}
                          fontSize='p'
                        />
                        <Modal
                          show={modalShow}
                          onHide={() => setModalShow(false)}
                        />
                      </li>
                    </ul>
                  </div>
                </Col>
              </div>
            </nav>
          </div>
        </Row>
        <div className='content-on-mobile'>
          <DisposeContent
            textColor='red'
            titleColor='black'
            canDisplayPriceCard={true}
            firstText={headerData.text}
            secondText={headerData.title}
          />
        </div>
      </header>
    </React.Fragment>
  );
};

export default Header;
