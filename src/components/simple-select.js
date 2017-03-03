import React, { Component } from 'react';
import tonal from 'tonal';

export default class SimpleSelect extends Component {
  selectOptions() {
    return this.props.values.map(name => {
      return <option key={name} value={name}>{name}</option>;
    });
  }

  render() {
    return <select value={this.props.selected} onChange={this.props.onChange}> {this.selectOptions()} </select>;
  }
}
