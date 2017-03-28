import React from 'react';
// import { Component } from 'react';
import SingleHead from '../SingleHead'
// import {
  // BrowserRouter as Router,
  // Route,
  // Link
// } from 'react-router-dom'

export default class SamGuest extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="gallery tk-adobe-garamond-pro" >
        <div className="wrapper">

          <SingleHead
            path="samGuest"
            visit="http://sam-guest.com/"
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
            <h1>Sam</h1>
            <h3 id="logo">Logo</h3>
            <h3 id="interface">Interface</h3>
          </div>
        </div>
      </div>


    )
  }
}

