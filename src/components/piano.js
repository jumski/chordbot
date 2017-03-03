import React, { Component } from 'react';
import Key from './key';
import SimpleSelect from './simple-select';
import tonal from 'tonal';
import pianoStyles from '../stylesheets/new-piano.css';
window.tonal=tonal;

export default class Piano extends Component {
  constructor(props) {
    super(props);

    const currentOctave = 3;
    this.state = {
      currentOctave: currentOctave,
      chord: '5',
      scale: 'major',
      selectedNote: this.notes(currentOctave)[0]
    };
  }

  notes(octave = this.state.currentOctave) {
    const notesRange = `C${octave}, C${octave + 2}`;

    return tonal.range.chromatic(notesRange);
  }

  keys(currentOctave) {
    return this.notes().map(note => {
      return <Key selectedNote={this.state.selectedNote} key={note} note={note}/>;
    });
  }

  octaveUp() {
    if (this.isMaxOctave()) return;

    this.setState({ currentOctave: this.state.currentOctave + 1 });
  }

  octaveDown() {
    if (this.isMinOctave()) return;

    this.setState({ currentOctave: this.state.currentOctave - 1 });
  }

  isMaxOctave() {
    return this.state.currentOctave >= 8;
  }

  isMinOctave() {
    return this.state.currentOctave <= 0;
  }

  setChord(event) {
    this.setState({ chord: event.target.value });
  }

  setScale(event) {
    this.setState({ scale: event.target.value });
  }

  render() {
    return <div>
      <div className="keys">{this.keys(this.state.currentOctave)}</div>
      <div className="menu">
        <div>
          <button disabled={this.isMinOctave()} onClick={this.octaveDown.bind(this)}>Octave Down</button>
          <button disabled={this.isMaxOctave()} onClick={this.octaveUp.bind(this)}>Octave Up</button>
        </div>

        <div>
          <SimpleSelect values={tonal.chord.names()} selected={this.state.chord} onChange={this.setChord.bind(this)}/>
        </div>

        <div>
          <SimpleSelect values={tonal.scale.names()} selected={this.state.scale} onChange={this.setScale.bind(this)}/>
        </div>
      </div>
    </div>;
  }
}
