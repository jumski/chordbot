import React, { Component } from 'react';
import Key from './key';
import tonal from 'tonal';
import pianoStyles from '../stylesheets/new-piano.css';
window.tonal=tonal;

export default class Piano extends Component {
  keys() {
    return this.props.notes.map(note => {
      return <Key
        onClick={this.props.onKeyClick}
        isSelected={this.isSelected(note)}
        isFromScale={this.isFromScale(note)}
        isFromChord={this.isFromChord(note)}
        key={note}
        note={note}
      />;
    });
  }

  isSelected(note) {
    return tonal.note.simplify(note) === tonal.note.simplify(this.props.selectedNote);
  }

  isFromScale(note) {
    return this.props.scaleNotes.indexOf(tonal.note.simplify(note)) > -1;
  }

  isFromChord(note) {
  }

  render() {
    return <div className="keys">
      {this.keys()}
    </div>;
  }
}
