import React from 'react';
// import { Component } from 'react';
import SingleHead from '../SingleHead'
// import {
  // BrowserRouter as Router,
  // Route,
  // Link
// } from 'react-router-dom'

export default class NationalSawdust extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="gallery tk-adobe-garamond-pro" >
        <div className="wrapper">

          <SingleHead
            title="National Sawdust"
            images={
              [{image:"media/poly/logo/banner.jpg",caption:"Placeholder"},
            ]}
            visit="https://nationalsawdust.org/"
            tags={
              ["ui",
              "ux",
              "development",
              "logo",
              "print",
              "branding"]}
            />

          <div className="content">
            <h1>National Sawdust</h1>
          </div>
        </div>
      </div>


    )
  }
}

