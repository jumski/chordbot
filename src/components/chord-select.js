import React, { Component } from 'react';
import tonal from 'tonal';

export default class ChordSelect extends Component {
  selectOptions() {
    return tonal.chord.names().map(name => {
      return <option selected={this.props.selected === name}
                     key={name} value={name}>{name}</option>;
    });
  }

  render() {
    return <select onChange={this.props.onChange}> {this.selectOptions()} </select>;
  }
}
