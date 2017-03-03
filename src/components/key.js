import React, { Component } from 'react';

export default class Key extends Component {
  colorClassName() {
    const note = this.props.note;

    if (note.indexOf('#') > -1 || note.indexOf('b') > -1) {
      return "black";
    }
    else {
      return "white";
    }
  }

  classNames() {
    const names = ['piano-key', this.colorClassName()];

    if (this.props.isSelected)
      names.push('selected');

    if (this.props.isFromScale)
      names.push('scale');

    return names.join(' ');
  }

  onClick() {
    this.props.onClick(this.props.note);
  }

  render() {
    return <span onClick={this.onClick.bind(this)} className={this.classNames()}>
      <span className="note-name">{this.props.note}</span>
    </span>;
  }
}
