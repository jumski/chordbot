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

  handleChangeOctave(delta) {
    return () => {
      if (!this.canChangeOctave(delta)) return;

      this.setState({ octave: this.state.octave + delta });
    };
  }

  canChangeOctave(delta) {
    return (delta > 0 && !this.isMaxOctave()) || (delta < 0 && !this.isMinOctave());
  }

  isMaxOctave() {
    return this.state.octave >= 8;
  }

  isMinOctave() {
    return this.state.octave <= 0;
  }

  handleSet(key) {
    return (value) => {
      this.setState({ [key]: value });
    };
  }

  selectRootNote(note) {
    this.setState({rootNote: note});

    if (WebMidi.enabled && this.state.midiOutput) {
      this.state.midiOutput.playNote(this.chordNotes(), "all", { duration: 5000 });
    }
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
        octaveUp={this.handleChangeOctave(+1)}
        octaveDown={this.handleChangeOctave(-1)}
        setScale={this.handleSet('scale')}
        setChord={this.handleSet('chord')}
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
        setMidiOut={this.handleSet('midiOutput')}
        setMidiIn={this.handleSet('midiInput')}
      />
    </div>;
  }
}
