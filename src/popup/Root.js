/**
 * popup root
 * 
 * @since 2019.05.13 - draft
 */
'use strict';

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const Extensions = () => {
  return (
    <App />
  );
};

ReactDOM.render(
  <Extensions />,
  document.getElementById('root'),
);

