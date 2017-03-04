import React, { Component } from 'react';
import WebMidi from 'webmidi';
import SimpleSelect from './simple-select';

export default class MidiConfig extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputNames: [],
      outputNames: []
    };
  }

  setMidiIn(event) {
    if (WebMidi.enabled) {
      const selectedOption = event.target.selectedOptions[0];
      const inputName = selectedOption.value;
      const input = WebMidi.getInputByName(inputName);
      this.props.setMidiIn(input);

      input.addListener('noteon', "all", e => this.props.onNoteOn(e.note));
      // input.addListener('noteoff', "all", this.props.handleNoteOff(e.note));
    }
  }

  setMidiOut(event) {
    if (WebMidi.enabled) {
      const selectedOption = event.target.selectedOptions[0];
      const outputName = selectedOption.value;
      const output = WebMidi.getOutputByName(outputName);
      this.props.setMidiOut(output);
    }
  }

  render() {
    if (this.state.error) {
      return <div className="midi-config">
        MIDI ERROR: {this.state.error}
      </div>;
    }

    return <div className="midi-config">
      <SimpleSelect
        onChange={this.setMidiIn.bind(this)}
        values={this.state.inputNames} />

      <SimpleSelect
        onChange={this.setMidiOut.bind(this)}
        values={this.state.outputNames} />
    </div>;
  }

  componentWillMount() {
    WebMidi.enable(isError => {
      if (isError) {
        this.setState({error: isError})
      }
      else {
        this.setState({
          inputNames: WebMidi.inputs.map(i => i.name),
          outputNames: WebMidi.outputs.map(o => o.name)
        });
      }
    });
  }
}
