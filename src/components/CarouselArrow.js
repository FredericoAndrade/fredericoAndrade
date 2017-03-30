import React from 'react';
// import { Component } from 'react';
// import SingleHead from '../SingleHead'
// import {
  // BrowserRouter as Router,
  // Route,
//   Link
// } from 'react-router-dom'

export default class CarouselArrow extends React.Component {
  render() {
    return (
      <button className={this.props.className}
              onClick={this.props.onClick}>
              &rsaquo;
      </button>
    );
  }
}

