import styles from './stylesheets/application.css';
import pianoStyles from './stylesheets/piano.css';
import React from 'react';
import ReactDOM from 'react-dom';
import Piano from './components/piano';

ReactDOM.render(
  <Piano/>,
  document.getElementById('app')
);
