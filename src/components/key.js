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
    return ['piano-key', this.colorClassName()].join(' ');
  }

  render() {
    return <span className={this.classNames()}>
      <span className="noteName">{this.props.note}</span>
    </span>;
  }
}
