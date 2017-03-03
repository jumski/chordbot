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
      selectedNote: this.notes(octave)[0]
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
  console.log("this.state.selectedNote = ", this.state.selectedNote);
    return tonal.scale(`${this.state.selectedNote} ${this.state.scale}`);
  }

  render() {
    return <div>
      <Piano
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
      />
    </div>;
  }
}
