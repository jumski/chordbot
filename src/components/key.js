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

  selectedClassName() {
    const note = this.props.note;

    if (note == this.props.selectedNote)
      return 'selected';

    return '';
  }

  classNames() {
    return ['piano-key', this.colorClassName(), this.selectedClassName()].join(' ');
  }

  render() {
    return <span className={this.classNames()}>
      <span className="note-name">{this.props.note}</span>
    </span>;
  }
}
