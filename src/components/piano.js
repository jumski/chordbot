import React, { Component } from 'react';
import Key from './key';
import ChordSelect from './chord-select';
import tonal from 'tonal';
import pianoStyles from '../stylesheets/new-piano.css';
window.tonal=tonal;

export default class Piano extends Component {
  constructor(props) {
    super(props);

    this.state = {
      baseOctave: 3,
      chord: '5',
    };
  }

  keys(baseOctave) {
    const notesRange = `C${baseOctave}, C${baseOctave + 2}`;

    return tonal.range.chromatic(notesRange).map(note => {
      return <Key key={note} note={note}/>;
    });
  }

  octaveUp() {
    if (this.isMaxOctave()) return;

    this.setState({ baseOctave: this.state.baseOctave + 1 });
  }

  octaveDown() {
    if (this.isMinOctave()) return;

    this.setState({ baseOctave: this.state.baseOctave - 1 });
  }

  isMaxOctave() {
    return this.state.baseOctave >= 8;
  }

  isMinOctave() {
    return this.state.baseOctave <= 0;
  }

  setChord(event) {
    const chord = event.target.value;

    this.setState({ chord: chord });
  }

  render() {
    return <div>
      <div className="keys">{this.keys(this.state.baseOctave)}</div>
      <div className="menu">
        <div>
          <button disabled={this.isMinOctave()} onClick={this.octaveDown.bind(this)}>Octave Down</button>
          <button disabled={this.isMaxOctave()} onClick={this.octaveUp.bind(this)}>Octave Up</button>
        </div>

        <div>
          <ChordSelect selected={this.state.chord} onChange={this.setChord.bind(this)}/>
        </div>
      </div>
    </div>;
  }
}
