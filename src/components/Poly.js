import React, { Component } from 'react';
import Gallery from './Gallery'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export default class Poly extends React.Component {
  render() {
    return (
      <div className="gallery tk-adobe-garamond-pro" >
        <div className="wrapper">
          <div className="banner" style={{backgroundImage: "url('../../bannerPoly.jpg')"}}></div>
          <div className="subnav">
            <ul>
              <li><a href="#logo"><h2>Logo</h2></a></li>
              <li><a href="#interface"><h2>Interface</h2></a></li>
            </ul>
          </div>
          <div className="content">
            <h1>Poly</h1>
            <h3 id="logo">Logo</h3>
            <h3 id="interface">Interface</h3>
          </div>
        </div>
        <Gallery/>
      </div>


    )
  }
}

