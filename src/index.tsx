import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import AppContainer from './AppContainer';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';

ReactDOM.render(
  <React.StrictMode>
    <AppContainer />
  </React.StrictMode>,
  document.getElementById('root')
);

reportWebVitals();
