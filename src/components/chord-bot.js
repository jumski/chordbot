import React, { Component } from 'react';
import Piano from './piano';
import Menu from './menu';

export default class ChordBot extends Component {
  constructor(props) {
    super(props);

    const octave = 3;
    this.state = {
      octave: octave,
      chord: '5',
      scale: 'major',
      selectedNote: `C${octave}`,
    };
  }

  notes(octave = this.state.octave) {
    const notesRange = `C${octave}, C${octave + 2}`;

    return tonal.range.chromatic(notesRange);
  }

  octaveUp() {
    if (this.isMaxOctave()) return;

    this.setState({ octave: this.state.octave + 1 });
  }

  octaveDown() {
    if (this.isMinOctave()) return;

    this.setState({ octave: this.state.octave - 1 });
  }

  isMaxOctave() {
    return this.state.octave >= 8;
  }

  isMinOctave() {
    return this.state.octave <= 0;
  }

  setChord(event) {
    this.setState({ chord: event.target.value });
  }

  setScale(event) {
    this.setState({ scale: event.target.value });
  }

  scaleNotes() {
    const octave = this.state.octave;
    const interval = tonal.interval(`C0`, this.state.selectedNote);
    const pcScale = tonal.scale(`C${octave} ${this.state.scale}`);
    const baseScale = pcScale.map(n => `${n}0`);
    const transposedScale = tonal.map(tonal.transpose(interval), baseScale);

    return transposedScale.map(tonal.note.simplify);

    return transposedScale;
  }

  selectNote(note) {
    this.setState({selectedNote: note});
  }

  render() {
    return <div>
      <Piano
        onKeyClick={this.selectNote.bind(this)}
        notes={this.notes()}
        scaleNotes={this.scaleNotes()}
        chordNotes={[]}
        octave={this.state.octave}
        selectedNote={this.state.selectedNote}
      />

      <Menu
        isMinOctave={this.isMinOctave()}
        isMaxOctave={this.isMaxOctave()}
        octaveUp={this.octaveUp.bind(this)}
        octaveDown={this.octaveDown.bind(this)}
        setScale={this.setScale.bind(this)}
        setChord={this.setChord.bind(this)}
        scale={this.state.scale}
        chord={this.state.chord}
      />

      <div className="stats">
        octave = {this.state.octave} <br/>
        note = {this.state.selectedNote} <br/>
        scaleNotes = {this.scaleNotes().join(' ')}
      </div>
    </div>;
  }
}
