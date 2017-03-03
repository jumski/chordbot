import React, { Component } from 'react';
import Key from './key';
import SimpleSelect from './simple-select';
import tonal from 'tonal';
import pianoStyles from '../stylesheets/new-piano.css';
window.tonal=tonal;

export default class Piano extends Component {
  constructor(props) {
    super(props);

    const baseOctave = 3;
    this.state = {
      baseOctave: baseOctave,
      chord: '5',
      scale: 'major',
      currentNote: this.notes(baseOctave)[0]
    };
  }

  notes(octave = this.state.baseOctave) {
    const notesRange = `C${octave}, C${octave + 2}`;

    return tonal.range.chromatic(notesRange);
  }

  keys(baseOctave) {
    return this.notes().map(note => {
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
    this.setState({ chord: event.target.value });
  }

  setScale(event) {
    this.setState({ scale: event.target.value });
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
          <SimpleSelect values={tonal.chord.names()} selected={this.state.chord} onChange={this.setChord.bind(this)}/>
        </div>

        <div>
          <SimpleSelect values={tonal.scale.names()} selected={this.state.scale} onChange={this.setScale.bind(this)}/>
        </div>
      </div>
    </div>;
  }
}
