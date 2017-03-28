import React from 'react';
// import { Component } from 'react';
import SingleHead from '../SingleHead'
// import {
  // BrowserRouter as Router,
  // Route,
  // Link
// } from 'react-router-dom'

export default class Poly extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="gallery tk-adobe-garamond-pro" >
        <div className="wrapper">

          <SingleHead
            path="poly"
            visit="https://www.poly.wikitongues.org/"
            />

          <div className="tags">
            <ul>
              <li>UI</li>
              <li>UX</li>
              <li>Logo</li>
              <li>Brand</li>
            </ul>
          </div>

          <div className="content">
            <h1>Poly</h1>
          </div>
        </div>
      </div>


    )
  }
}

