import React from 'react';
// import { Component } from 'react';
import SingleHead from '../SingleHead'
// import {
  // BrowserRouter as Router,
  // Route,
  // Link
// } from 'react-router-dom'

export default class Quotidian extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="gallery tk-adobe-garamond-pro" >
        <div className="wrapper">

          <SingleHead
            title="Quotidian Ventures"
            visit="http://www.quotidian.co/"
            images={
              [{image:"media/quotidian/page.jpg",placeholder:"placeholder/quotidian/page.jpg",caption:"Quotidian Ventures needed a no-frills website to display their portfolio."},
              {image:"media/quotidian/companies.jpg",placeholder:"placeholder/quotidian/companies.jpg",caption:"The portfolio displays each company proudly with large logos."},
              {image:"media/quotidian/about.jpg",placeholder:"placeholder/quotidian/about.jpg",caption:"Sparse colors and direct messaging build a results-first brand."},
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
            <div className="block three-col">
              <h1>Quotidian Ventures</h1>
              <section className="one-col">
                <p>Quotidian Ventures is an early stage investment fund that focuses on businesses with a strategic advantage in their respective industries.</p>
              </section>
              <section className="two-col">
                <p>Quotidian Ventures needed a portfolio website that provided an overview with contact information, without removing the focus from their brand and portfolio.</p>
                <p>The portfolio page brings evidence to all of Quotidian's portfolio companies with prominent logos. The fund preferred to let each company best represent themselves instead of producing original coverage, by linking to each of them.</p>
              </section>
            </div>
          </div>
        </div>
      </div>


    )
  }
}

