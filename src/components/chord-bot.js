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

    this.changeOctave(+1);
  }

  changeOctave(delta) {
    const interval = tonal.ivl.fromSemitones(delta * 12);
    const newOctave = this.state.octave + delta;
    const newSelectedNote = tonal.transpose(this.state.selectedNote, interval);

    this.setState({
      octave: newOctave,
      selectedNote: newSelectedNote
    });
  }

  octaveDown() {
    if (this.isMinOctave()) return;

    this.changeOctave(-1);
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
    const scale = tonal.scale(`${this.state.selectedNote} ${this.state.scale}`);
    const octave = this.state.octave;

console.log("scale = ", scale);
    return scale.map(note => `${note}${octave}`).map(tonal.note.simplify);
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
      />
    </div>;
  }
}
