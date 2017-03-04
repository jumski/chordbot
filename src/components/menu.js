import React, { Component } from 'react';
import SimpleSelect from './simple-select';
import tonal from 'tonal';

export default class Menu extends Component {
  setChord(event) {
    this.props.setChord(event.target.value);
  }

  setScale(event) {
    this.props.setScale(event.target.value);
  }

  setOctavesCount(event) {
    this.props.setOctavesCount(parseInt(event.target.value, 10));
  }

  render() {
    return <div className="menu">
      <div>
        <button disabled={this.props.isMinOctave} onClick={this.props.octaveDown}>Octave Down</button>
        <button disabled={this.props.isMaxOctave} onClick={this.props.octaveUp}>Octave Up</button>
      </div>

      <div>
        <SimpleSelect values={[2,3,4]} selected={2} onChange={this.setOctavesCount.bind(this)}/>
      </div>

      <div>
        <SimpleSelect values={tonal.chord.names().sort()} selected={this.props.chord} onChange={this.setChord.bind(this)}/>
      </div>

      <div>
        <SimpleSelect values={tonal.scale.names().sort()} selected={this.props.scale} onChange={this.setScale.bind(this)}/>
      </div>
    </div>
  }
}
