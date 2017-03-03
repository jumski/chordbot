import React, { Component } from 'react';
import Key from './key';
import tonal from 'tonal';
import pianoStyles from '../stylesheets/new-piano.css';
window.tonal=tonal;

export default class Piano extends Component {
  keys(octave) {
    return this.props.notes.map(note => {
      return <Key selectedNote={this.props.selectedNote} key={note} note={note}/>;
    });
  }

  render() {
    return <div className="keys">
      {this.keys(this.props.octave)}
    </div>;
  }
}
