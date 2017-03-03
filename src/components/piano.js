import React, { Component } from 'react';
import Key from './key';
import tonal from 'tonal';
import pianoStyles from '../stylesheets/new-piano.css';
window.tonal=tonal;

export default class Piano extends Component {
  keys(octave) {
    return this.props.notes.map(note => {
      return <Key
        isSelected={this.isSelected(note)}
        isFromScale={this.isFromScale(note)}
        isFromChord={this.isFromChord(note)}
        key={note}
        note={note}
      />;
    });
  }

  isSelected(note) {
    return note === this.props.selectedNote;
  }

  isFromScale(note) {
    // console.log("this.props.scaleNotes = ", this.props.scaleNotes);
    return this.props.scaleNotes.indexOf(note) > -1;
  }

  isFromChord(note) {
  }

  render() {
    return <div className="keys">
      {this.keys(this.props.octave)}
    </div>;
  }
}
