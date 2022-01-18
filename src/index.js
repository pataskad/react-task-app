import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

/* 
*  This is where react will render the App component
*  The App component houses all other components to be rendered
*/

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
