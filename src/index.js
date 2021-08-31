import React from 'react';
import ReactDOM from 'react-dom';
import MainLayout from './components/MainLayout';
import 'normalize.css';
import 'src/assets/index.scss';

ReactDOM.render(
  <React.StrictMode>
    <MainLayout />
  </React.StrictMode>,
  document.getElementById('root')
);