import React from 'react';
import { LoadablePage } from 'components/atoms/PageLoader/Loadables';

const Landing = LoadablePage(
  React.lazy(
    () =>
      import(
        /* webpackChunkName: "Landing" */
        './pages/LandingPage'
      )
  ),
  <span>Page is Loading...</span>
);

const AppContainer: React.FC = () => {
  return (
    <React.Fragment>
      <Landing />
    </React.Fragment>
  );
};

export default AppContainer;
