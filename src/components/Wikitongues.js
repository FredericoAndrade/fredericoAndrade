import React, { Component } from 'react';
import Gallery from './Gallery'
import ScrollToTop from './ScrollToTop'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

export default class Wikitongues extends React.Component {
  render() {
    return (
      <ScrollToTop>
        <div className="gallery tk-adobe-garamond-pro" >
          <div className="wrapper">
            <div className="banner" style={{backgroundImage: "url('../../bannerWikitongues.png')"}}></div>
            <div className="subnav">
              <ul>
                <li><a href="#logo"><h2>Logo</h2></a></li>
                <li><a href="#brand"><h2>Brand</h2></a></li>
                <li><a href="#collateral"><h2>Collateral</h2></a></li>
                <li><a href="#website"><h2>Website</h2></a></li>
              </ul>
            </div>
            <div className="content">
              <h1>Wikitongues</h1>
              <p className="description">Co-founder, chief platform officer, board member (volunteer). I crafted the organization’s brand meeting strategic goals, and produced all of the collateral (business cards, pamplhets, presentation materials, ads). I conceived, designed and implemented an open source tool Poly to advance the organziation’s mission, presented it by invitation at the New York Tech Meetup’s respected Hack of the Month segment and raised a record breaking kickstarter campaign to build it and the distributed team of open source contributors that helps me maintain it.</p>
              <section>
              <h3 id="logo">Logo</h3>
              <p>The Wikitongues logo went through a long iteration process to arrive at the current glyph.</p>
              </section>
              <section>
              <h3 id="brand">Brand</h3>
              <ul>
                <li>Colors</li>
                <li>Imagery</li>
                <li>Grid</li>
                <li>Graphics</li>
              </ul>
              </section>
              <section>
              <h3 id="collateral">Collateral</h3>
              <ul>
                <li>Business cards</li>
                <li>Pamphlets</li>
                <li>Table banner</li>
                <li>Stickers</li>
                <li>Mugs</li>
                <li>Catalogs</li>
              </ul>
              </section>
              <section>
              <h3 id="website">Website</h3>
              <ul>
                <li>Version 1</li>
                <li>Version 2</li>
                <li>Version 3</li>
              </ul>
              </section>
            </div>
          </div>
          <Gallery/>
        </div>
      </ScrollToTop>

    )
  }
}

