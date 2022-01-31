import React from 'react';
import Body from 'templates/Body';
import Footer from 'components/organisms/Footer/Footer';
import Header from 'components/organisms/Header/Header';

const Landing: React.FC = (): JSX.Element => {
  return (
    <React.Fragment>
      <Header />
      <Body />
      <Footer />
    </React.Fragment>
  );
};

export default Landing;
