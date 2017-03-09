import React, { Component } from 'react';
import tonal from 'tonal';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';

// Needed for onTouchTap
import injectTapEventPlugin from 'react-tap-event-plugin';
injectTapEventPlugin();

export default class SimpleSelect extends Component {
  get menuItems() {
    return this.props.values.map(name => {
      return <MenuItem key={name} value={name} primaryText={name} />;
    });
  }

  render() {
    return <SelectField
      value={this.props.selected}
      onChange={this.props.onChange}>
      {this.menuItems}
    </SelectField>;
  }
}
