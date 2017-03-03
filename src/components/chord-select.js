import React, { Component } from 'react';
import tonal from 'tonal';

export default class ChordSelect extends Component {
  selectOptions() {
    return tonal.chord.names().map(name => {
      return <option key={name} value={name}>{name}</option>;
    });
  }

  render() {
    console.log("'omghax' = ", 'omghax');
    return <select> {this.selectOptions()} </select>;
  }
}
