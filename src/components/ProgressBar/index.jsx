import React, { Component } from 'react';

import './ProgressBar.css';

export class ProgressBar extends Component {
  render() {
    const {value} = this.props;

    return (
      <div className="ProgressBar">
        <div className="progress" style={{width: `${value * 100}%`}}></div>
      </div>
    );
  }
}
