import styles from './stylesheets/application.sass';
import React from 'react';
import ReactDOM from 'react-dom';
import ChordBot from './components/chord-bot';

import cssFontRoboto from 'css-font-roboto';
import darkBaseTheme from 'material-ui/styles/baseThemes/darkBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

ReactDOM.render(
  <MuiThemeProvider muiTheme={getMuiTheme(darkBaseTheme)}>
    <ChordBot/>
  </MuiThemeProvider>,
  document.getElementById('app')
);
