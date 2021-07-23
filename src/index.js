import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './App.scss';
import {DeleteModalProvider} from './components/context/index';

ReactDOM.render(
  <DeleteModalProvider>
    <App />
  </DeleteModalProvider>,
  document.getElementById('root')
);


