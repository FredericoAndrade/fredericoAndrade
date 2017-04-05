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
              [{image:"media/ns/banner.jpg",caption:"National Sawdust is a performance arts institution in Brooklyn, NY."},
              {image:"media/ns/page.jpg",caption:"Artist profile page"},
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
            <div className="block three-col">
              <section className="one-col">
                <h1>National Sawdust</h1>
                <p>National Sawdust is an acclaimed performance arts institution in Williamsburg, Brooklyn.</p>
                <p>I had the opportunity to design and build their official website in time with their grand opening.</p>
              </section>
              <section className="two-col" style={{height:"540px"}}></section>
              <section className="one-col">
                <h3>Process</h3>
                <p>They needed a website to accompany the grand opening of the venue, on which they could publish their schedule, sell tickets to events and showcase partners and performers.</p>
                <p>I worked with wordpress developer Daniel Udell and iterated closely with the National Sawdust team to design and build a platform that was flexible enough to support their varied needs, both e-commerce and content-wise.</p>
              </section>
            </div>
          </div>
        </div>
      </div>


    )
  }
}

