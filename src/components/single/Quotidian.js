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
            images={
              [{image:"media/quotidian/page.jpg",caption:"Quotidian Ventures needed a no-frills website to display their portfolio."},
              {image:"media/quotidian/companies.jpg",caption:"The portfolio displays each company proudly with large logos."},
              {image:"media/quotidian/about.jpg",caption:"Sparce colors and direct messaging build a results-first brand."},
            ]}
            visit="http://www.quotidian.co/"
            tags={
              ["ui",
              "ux",
              "development",
              "logo",
              "print",
              "branding"]}
            />
            />

          <div className="content">
            <div className="block three-col">
              <section className="one-col">
                <h3>What is <br/>Quotidian Ventures</h3>
                <p>Quotidian Ventures is an early stage investment fund that focuses on businesses with a strategic advantage in their respective industries.</p>
              </section>
              <section className="two-col" style={{height:"400px"}}></section>
              <section className="one-col">
                <h3>Concept</h3>
                <p>The roll of a website for a fund like Quotidian is to demonstrate their portfolio, and mark a strong web presence.</p>
              </section>
            </div>
          </div>
        </div>
      </div>


    )
  }
}

