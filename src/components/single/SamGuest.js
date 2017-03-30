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
            title="Sam Guest"
            images={
              [{image:"media/poly/logo/banner.jpg",caption:"Placeholder"},
            ]}
            visit="http://sam-guest.com/"
            tags={
              ["ui",
              "ux",
              "development",
              "logo",
              "print",
              "branding"]}
            />

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

