import React, { Component } from 'react';
import Piano from './piano';
import Menu from './menu';
import MidiConfig from './midi-config';
import WebMidi from 'webmidi';
import tonal from 'tonal';
import { buildChromaticNotes, scaleNotes, chordNotes } from '../helpers/music';

export default class ChordBot extends Component {
  constructor(props) {
    super(props);

    const octave = 3;
    this.state = {
      octave: octave,
      chord: '5',
      scale: 'major',
      rootNote: `C${octave}`,
    };
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

  selectRootNote(note) {
    this.setState({rootNote: note});

    if (WebMidi.enabled && this.state.midiOutput) {
      this.state.midiOutput.playNote(this.chordNotes(), "all", { duration: 5000 });
    }
  }

  setMidiIn(input) {
    this.setState({midiInput: input});
  }

  setMidiOut(output) {
    this.setState({midiOutput: output});
  }

  render() {
    return <div>
      <Piano
        onKeyClick={this.selectRootNote.bind(this)}
        notes={buildChromaticNotes(this.state.octave)}
        scaleNotes={scaleNotes(this.state)}
        chordNotes={chordNotes(this.state)}
        octave={this.state.octave}
        rootNote={this.state.rootNote}
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
        note = {this.state.rootNote} <br/>
        scaleNotes = {scaleNotes(this.state).join(' ')}<br/>
        chordNotes = {chordNotes(this.state).join(' ')}<br/>
      </div>

      <MidiConfig
        setMidiOut={this.setMidiOut.bind(this)}
        setMidiIn={this.setMidiIn.bind(this)}
      />
    </div>;
  }
}
