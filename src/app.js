import styles from './stylesheets/application.sass';
import React from 'react';
import ReactDOM from 'react-dom';
import ChordBot from './components/chord-bot';

ReactDOM.render(
  <ChordBot/>,
  document.getElementById('app')
);
