import React from 'react';
import { LoadablePage } from 'components/atoms/PageLoader/Loadables';
import Spinner from 'components/atoms/Spinner/Spinner';

const Landing = LoadablePage(
  React.lazy(
    () =>
      import(
        /* webpackChunkName: "Landing" */
        './pages/LandingPage'
      )
  ),
  <Spinner />
);

const AppContainer: React.FC = () => {
  return (
    <React.Fragment>
      <Landing />
    </React.Fragment>
  );
};

export default AppContainer;
