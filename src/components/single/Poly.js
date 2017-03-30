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
            title="Poly"
            images={
              [{image:"media/poly/logo/banner.jpg",caption:"Placeholder"},
            ]}
            visit="https://www.poly.wikitongues.org/"
            images={
              [{image:"media/poly/interface/interfaceMobile.jpg",caption:"Mobile interfaces"},
              {image:"media/poly/logo/logomark.jpg",caption:"Logomark"},
              {image:"media/poly/logo/mascotFull.jpg",caption:"Poly mascot"},
              {image:"media/poly/logo/poster.jpg",caption:"Promotional poster"},
              {image:"media/poly/logo/banner.jpg",caption:"Publishing banner"},
              ]}
            tags={
              ["ui",
              "ux",
              "development",
              "logo",
              "print",
              "branding"]}
            />

          <div className="content">
            <h1>Poly</h1>
          </div>
        </div>
      </div>


    )
  }
}

