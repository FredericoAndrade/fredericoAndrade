import React from 'react';
// import { Component } from 'react';
import SingleHead from '../SingleHead'
// import {
  // BrowserRouter as Router,
  // Route,
  // Link
// } from 'react-router-dom'

export default class Amicus extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="gallery tk-adobe-garamond-pro" >
        <div className="wrapper">

          <SingleHead
            path="amicus"
            visit="https://amicushq.com/"
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
            <h1>Amicus</h1>
            <p className="description">EndDash is a two-way-binding javascript templating framework built on top of semantic HTML. It was developed by the engineers at Amicus when I was at the company. Once it reached a mature enough stage to be opened to the general public, it needed a documentation site. To that end, I designed and built the docs.</p>
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
      </div>
    )
  }
}