import React from 'react';
// import { Component } from 'react';
import SingleHead from '../SingleHead'
// import {
  // BrowserRouter as Router,
  // Route,
  // Link
// } from 'react-router-dom'

export default class MichelleBogre extends React.Component {
  componentDidMount() {
    window.scrollTo(0, 0)
  }

  render() {
    return (
      <div className="gallery tk-adobe-garamond-pro" >
        <div className="wrapper">

          <SingleHead
            title="Michelle Bogre"
            images={
              [{image:"media/dv01/page.jpg",caption:"I was hired to audit the highly complex interface for clarity and power of interaction."},
            ]}
            visit="https://www.dv01.co/"
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
            <h1>Michelle Bogre</h1>
              <section className="one-col">
                <p>dv01 is a financial technology platform that streamlines consumer and mortgage loan data—making markets transparent and efficient for institutional investors and safer for the world.</p>
              </section>
              <section className="two-col">
                <p>I was hired as a contractor to lead the company through a product audit, bringing to light infrastructural product decisions that needed to take place as the platform matured in the direction of the mission. That involved working with internal stakeholders to gather domain specific knowledge and to empower decisions to be made by the team.</p>
                <p>Additionally, I took a design pass at the platform's homepage and dashboard infrastructure</p>
              </section>
            </div>
          </div>
        </div>
      </div>


    )
  }
}

