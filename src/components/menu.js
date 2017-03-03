import React, { Component } from 'react';
import SimpleSelect from './simple-select';
import tonal from 'tonal';

export default class Menu extends Component {
  render() {
    return <div className="menu">
      <div>
        <button disabled={this.props.isMinOctave} onClick={this.props.octaveDown}>Octave Down</button>
        <button disabled={this.props.isMaxOctave} onClick={this.props.octaveUp}>Octave Up</button>

        current octave = {this.props.octave}
      </div>

      <div>
        <SimpleSelect values={tonal.chord.names()} selected={this.props.chord} onChange={this.props.setChord}/>
      </div>

      <div>
        <SimpleSelect values={tonal.scale.names()} selected={this.props.scale} onChange={this.props.setScale}/>
      </div>
    </div>
  }
}
