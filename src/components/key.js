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
    const classes = ['piano-key', this.colorClassName()];

    if (this.props.isSelected)
      classes.push('selected');

    if (this.props.isFromScale)
      classes.push('scale');

    return classes.join(' ');
  }

  onClick() {
    this.props.onClick(this.props.note);
  }

  render() {
    return <div onClick={this.onClick.bind(this)} className={this.classNames()}>
      <div className="info">
        <span className="note-name">{this.props.note}</span>
      </div>
    </div>;
  }
}
